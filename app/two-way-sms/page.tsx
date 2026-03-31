"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CompactSidebar } from "@/components/compact-sidebar";
import { TopNavbar } from "@/components/top-navbar";
import { supabase } from "@/lib/supabase";
import {
  ChevronDown,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Settings,
  X,
  Loader2,
  FileText,
  UserPlus,
  Sparkles,
} from "lucide-react";

type TwilioConfig = {
  id: string;
  label: string | null;
  account_sid: string;
  auth_token: string;
  from_number: string;
  is_active: boolean;
  created_at: string;
};

type SmsContact = {
  id: string;
  name: string;
  phone_e164: string;
  created_at: string;
};

type ChatMessage = {
  id: string;
  direction: "out" | "in";
  body: string;
  timestamp: string;
};

export default function TwoWaySmsPage() {
  const [activeTab, setActiveTab] = useState("two-way-sms");
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [configLoading, setConfigLoading] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [twilioConfigs, setTwilioConfigs] = useState<TwilioConfig[]>([]);
  const [activeConfigId, setActiveConfigId] = useState<string | null>(null);
  const activeConfig = useMemo(
    () => twilioConfigs.find((c) => c.id === activeConfigId) || null,
    [twilioConfigs, activeConfigId]
  );

  const [contacts, setContacts] = useState<SmsContact[]>([]);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const selectedContact = useMemo(
    () => contacts.find((c) => c.id === selectedContactId) || null,
    [contacts, selectedContactId]
  );

  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [chatFilter, setChatFilter] = useState<"open" | "closed">("open");

  const [configForm, setConfigForm] = useState({
    label: "",
    accountSid: "",
    authToken: "",
    fromNumber: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    phoneE164: "",
  });

  const [draftMessage, setDraftMessage] = useState("");
  const [messagesByContact, setMessagesByContact] = useState<Record<string, ChatMessage[]>>({});
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [lastReadByContact, setLastReadByContact] = useState<Record<string, string>>({});

  useEffect(() => {
    let mounted = true;
    const bootstrap = async () => {
      setLoading(true);
      setError("");
      try {
        const { data } = await supabase.auth.getSession();
        const user = data?.session?.user;
        if (!user?.id) {
          setUserId(null);
          return;
        }
        if (!mounted) return;
        setUserId(user.id);
        await loadConfigs(user.id);
      } catch (err: any) {
        setError(err?.message || "Failed to load user");
      } finally {
        setLoading(false);
      }
    };
    bootstrap();
    return () => {
      mounted = false;
    };
  }, []);

  const loadConfigs = async (uid: string) => {
    setConfigLoading(true);
    try {
      const { data, error: fetchError } = await supabase
        .from("twilio_credentials")
        .select("*")
        .eq("user_id", uid)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
      const configs = (data || []) as TwilioConfig[];
      setTwilioConfigs(configs);
      const active = configs.find((c) => c.is_active) || configs[0] || null;
      setActiveConfigId(active?.id || null);
      if (active?.id) await loadContacts(uid, active.id);
      else setContacts([]);
    } catch (err: any) {
      setError(err?.message || "Failed to load Twilio config");
    } finally {
      setConfigLoading(false);
    }
  };

  const loadContacts = async (uid: string, configId: string) => {
    setContactLoading(true);
    try {
      const { data, error: fetchError } = await supabase
        .from("twilio_sms_contacts")
        .select("*")
        .eq("user_id", uid)
        .eq("twilio_credential_id", configId)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
      setContacts((data || []) as SmsContact[]);
      const list = (data || []) as SmsContact[];
      if (selectedContactId && !list.some((c) => c.id === selectedContactId)) {
        setSelectedContactId(null);
      }
    } catch (err: any) {
      setError(err?.message || "Failed to load contacts");
    } finally {
      setContactLoading(false);
    }
  };

  const loadMessages = async (uid: string, configId: string, contactId: string) => {
    setMessagesLoading(true);
    try {
      const { data, error: fetchError } = await supabase
        .from("twilio_sms_messages")
        .select("*")
        .eq("user_id", uid)
        .eq("twilio_credential_id", configId)
        .eq("contact_id", contactId)
        .order("created_at", { ascending: true });
      if (fetchError) throw fetchError;
      const mapped = (data || []).map((m: any) => ({
        id: m.id,
        direction: m.direction as "out" | "in",
        body: m.body,
        timestamp: m.created_at,
      })) as ChatMessage[];
      setMessagesByContact((prev) => ({
        ...prev,
        [contactId]: mapped,
      }));
    } catch (err: any) {
      setError(err?.message || "Failed to load messages");
    } finally {
      setMessagesLoading(false);
    }
  };

  const isValidE164 = (value: string) => /^\+[1-9]\d{7,14}$/.test(value.trim());

  const handleSaveConfig = async () => {
    if (!userId) return;
    if (!configForm.label.trim() || !configForm.accountSid.trim() || !configForm.authToken.trim() || !configForm.fromNumber.trim()) {
      setError("Please fill all Twilio fields.");
      return;
    }
    if (!isValidE164(configForm.fromNumber)) {
      setError("Phone number must be in E.164 format, like +15551234567.");
      return;
    }
    setConfigLoading(true);
    setError("");
    try {
      await supabase
        .from("twilio_credentials")
        .update({ is_active: false })
        .eq("user_id", userId);
      const { error: insertError } = await supabase
        .from("twilio_credentials")
        .insert({
          user_id: userId,
          label: configForm.label.trim(),
          account_sid: configForm.accountSid.trim(),
          auth_token: configForm.authToken.trim(),
          from_number: configForm.fromNumber.trim(),
          is_active: true,
        });
      if (insertError) {
        console.error("Twilio config insert error:", insertError);
        throw insertError;
      }
      setShowConfigModal(false);
      setConfigForm({ label: "", accountSid: "", authToken: "", fromNumber: "" });
      setSuccess("Twilio connected.");
      await loadConfigs(userId);
    } catch (err: any) {
      setError(err?.message || "Failed to save Twilio config");
    } finally {
      setConfigLoading(false);
    }
  };

  const handleAddContact = async () => {
    if (!userId || !activeConfig?.id) return;
    if (!contactForm.name.trim() || !contactForm.phoneE164.trim()) {
      setError("Please fill contact name and phone number.");
      return;
    }
    if (!isValidE164(contactForm.phoneE164)) {
      setError("Phone number must be in E.164 format, like +15551234567.");
      return;
    }
    setContactLoading(true);
    setError("");
    try {
      const { error: insertError } = await supabase
        .from("twilio_sms_contacts")
        .insert({
          user_id: userId,
          twilio_credential_id: activeConfig.id,
          name: contactForm.name.trim(),
          phone_e164: contactForm.phoneE164.trim(),
        });
      if (insertError) {
        console.error("Add contact insert error:", insertError);
        throw insertError;
      }
      setShowAddContactModal(false);
      setContactForm({ name: "", phoneE164: "" });
      setSuccess("Contact added.");
      setSelectedContactId(null);
      await loadContacts(userId, activeConfig.id);
    } catch (err: any) {
      setError(err?.message || "Failed to add contact");
    } finally {
      setContactLoading(false);
    }
  };

  const handleSelectContact = (contactId: string) => {
    setSelectedContactId(contactId);
    setShowContactMenu(false);
    if (userId && activeConfig?.id) {
      loadMessages(userId, activeConfig.id, contactId);
    }
    setLastReadByContact((prev) => ({
      ...prev,
      [contactId]: new Date().toISOString(),
    }));
  };

  const handleDeleteContact = async () => {
    if (!userId || !selectedContactId) return;
    setContactLoading(true);
    setError("");
    try {
      const { error: deleteError } = await supabase
        .from("twilio_sms_contacts")
        .delete()
        .eq("id", selectedContactId)
        .eq("user_id", userId);
      if (deleteError) {
        console.error("Delete contact error:", deleteError);
        throw deleteError;
      }
      setShowContactMenu(false);
      setSelectedContactId(null);
      setSuccess("Contact deleted.");
      if (activeConfig?.id) {
        await loadContacts(userId, activeConfig.id);
      }
    } catch (err: any) {
      setError(err?.message || "Failed to delete contact");
    } finally {
      setContactLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!selectedContact || !draftMessage.trim() || !userId || !activeConfig?.id) return;
    const newMessage: ChatMessage = {
      id: `${Date.now()}`,
      direction: "out",
      body: draftMessage.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessagesLoading(true);
    try {
      const { error: insertError } = await supabase
        .from("twilio_sms_messages")
        .insert({
          user_id: userId,
          twilio_credential_id: activeConfig.id,
          contact_id: selectedContact.id,
          direction: "out",
          body: newMessage.body,
        });
      if (insertError) {
        console.error("Message insert error:", insertError);
        throw insertError;
      }
      setMessagesByContact((prev) => ({
        ...prev,
        [selectedContact.id]: [...(prev[selectedContact.id] || []), newMessage],
      }));
      setDraftMessage("");
    } catch (err: any) {
      setError(err?.message || "Failed to send message");
    } finally {
      setMessagesLoading(false);
    }
  };

  const messages = selectedContact ? messagesByContact[selectedContact.id] || [] : [];
  const orderedMessages = useMemo(
    () => [...messages].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()),
    [messages]
  );

  useEffect(() => {
    if (!userId || !activeConfig?.id || !selectedContactId) return;
    loadMessages(userId, activeConfig.id, selectedContactId);
  }, [userId, activeConfig?.id, selectedContactId]);

  useEffect(() => {
    if (!userId) return;
    try {
      const raw = localStorage.getItem(`twoway_sms_lastread_${userId}`);
      if (raw) setLastReadByContact(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    try {
      localStorage.setItem(`twoway_sms_lastread_${userId}`, JSON.stringify(lastReadByContact));
    } catch {
      // ignore
    }
  }, [userId, lastReadByContact]);

  const getUnreadCount = (contactId: string) => {
    const list = messagesByContact[contactId] || [];
    if (list.length === 0) return 0;
    const lastRead = lastReadByContact[contactId];
    if (!lastRead) {
      return list.filter((m) => m.direction === "in").length;
    }
    return list.filter((m) => m.direction === "in" && new Date(m.timestamp) > new Date(lastRead)).length;
  };


  const avatarColors = [
    "bg-blue-600",
    "bg-indigo-600",
    "bg-emerald-600",
    "bg-rose-600",
    "bg-amber-600",
    "bg-violet-600",
    "bg-cyan-600",
    "bg-teal-600",
  ];

  const getAvatarColor = (seed: string) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) {
      hash = (hash * 31 + seed.charCodeAt(i)) % avatarColors.length;
    }
    return avatarColors[Math.abs(hash) % avatarColors.length];
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] dark:bg-gray-950 flex">
      <CompactSidebar activeTab={activeTab} onTabChangeAction={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <div className="flex-1 p-6 space-y-6 relative">
          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              Two-Way SMS
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 h-9 rounded-xl text-xs font-semibold bg-gray-900 text-white shadow-md shadow-emerald-500/10">
                <Phone className="w-4 h-4" />
                {activeConfig ? activeConfig.from_number : "No active number"}
              </div>
              <button
                onClick={() => setShowAddContactModal(true)}
                className="inline-flex items-center gap-2 h-9 px-3 rounded-xl text-sm font-semibold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Plus className="w-4 h-4" /> Add Contacts
              </button>
              <button
                onClick={() => setShowConfigModal(true)}
                className="inline-flex items-center gap-2 h-9 px-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/30"
              >
                <Settings className="w-4 h-4" /> Config Twilio
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-stretch min-h-0">
            <div className="w-full lg:w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col h-[calc(100vh-230px)]">
              <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">All Messages</div>
                <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800 p-1 text-xs font-semibold">
                  <button
                    onClick={() => {
                      setChatFilter("open");
                      setDropdownOpen(true);
                    }}
                    className={`px-3 py-1 rounded-full ${
                      chatFilter === "open"
                        ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    }`}
                  >
                    Open Chat
                  </button>
                  <button
                    onClick={() => {
                      setChatFilter("closed");
                      setDropdownOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full ${
                      chatFilter === "closed"
                        ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    }`}
                  >
                    Closed
                  </button>
                </div>
                <div className="mt-3 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    placeholder="Search by contact"
                    className="w-full h-9 pl-9 pr-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-[#f7f8fb] dark:bg-gray-900 text-xs text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                {loading ? (
                  <div className="text-xs text-gray-500">Loading...</div>
                ) : !activeConfig ? (
                  <div className="text-xs text-gray-500">No Twilio number configured yet.</div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-800 dark:text-gray-200">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      {activeConfig.from_number}
                    </div>
                    <button
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="text-[10px] font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      {dropdownOpen ? "Hide" : "Show"}
                    </button>
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto">
                {dropdownOpen ? (
                  contactLoading ? (
                    <div className="text-xs text-gray-500 px-4 py-2">Loading contacts...</div>
                  ) : contacts.length === 0 ? (
                    <div className="text-xs text-gray-500 px-4 py-2">No contacts yet.</div>
                  ) : (
                    [...contacts]
                      .sort((a, b) => {
                        const aMsgs = messagesByContact[a.id] || [];
                        const bMsgs = messagesByContact[b.id] || [];
                        const aLast = aMsgs.length ? new Date(aMsgs[aMsgs.length - 1].timestamp).getTime() : 0;
                        const bLast = bMsgs.length ? new Date(bMsgs[bMsgs.length - 1].timestamp).getTime() : 0;
                        return bLast - aLast;
                      })
                      .map((contact) => (
                      <button
                        key={contact.id}
                        onClick={() => handleSelectContact(contact.id)}
                        className={`w-full flex items-start gap-3 px-4 py-3 border-b border-gray-100/80 dark:border-gray-800 text-left transition-all ${
                          selectedContactId === contact.id
                            ? "bg-emerald-50/70 dark:bg-emerald-900/30"
                            : "hover:bg-[#f2f5fb] dark:hover:bg-gray-800/60"
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-full text-white flex items-center justify-center text-xs font-bold ${getAvatarColor(`${contact.id}-${contact.name || ""}`)}`}>
                          {contact.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <div className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                              {contact.name}
                            </div>
                            <div className="text-[10px] text-gray-400">Inbox · Now</div>
                          </div>
                          <div className="text-[11px] text-gray-500 truncate">
                            {messagesByContact[contact.id]?.slice(-1)[0]?.body || contact.phone_e164}
                          </div>
                        </div>
                        {getUnreadCount(contact.id) > 0 && (
                          <span className="mt-1 min-w-[18px] h-[18px] px-1 rounded-full bg-emerald-600 text-white text-[10px] font-semibold flex items-center justify-center">
                            {getUnreadCount(contact.id)}
                          </span>
                        )}
                      </button>
                    ))
                  )
                ) : (
                  <div className="text-xs text-gray-500 px-4 py-4">Contacts hidden.</div>
                )}
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-[980px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col shadow-sm h-[calc(100vh-230px)]">
                <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => setShowContactMenu((v) => !v)}
                    className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                    disabled={!selectedContact}
                    aria-label="Contact options"
                  >
                    <span className="text-lg leading-none">⋯</span>
                  </button>
                  {showContactMenu && selectedContact && (
                    <div className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                      <button
                        onClick={handleDeleteContact}
                        className="w-full text-left px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
                <div className={`w-12 h-12 rounded-full text-white flex items-center justify-center text-sm font-bold ${getAvatarColor(`${selectedContact?.id || "none"}-${selectedContact?.name || ""}`)}`}>
                  {selectedContact?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {selectedContact ? selectedContact.name : "Select a contact"}
                  </div>
                  {selectedContact ? (
                    <div className="text-xs text-gray-500 truncate">{selectedContact.phone_e164}</div>
                  ) : (
                    <div className="text-xs text-gray-400">Updates</div>
                  )}
                </div> 
                {selectedContact && (
                  <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[10px] font-semibold px-2.5 py-1">
                    Online
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                )}
              </div>

              <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900">
                {!selectedContact ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                      <div className="text-sm text-gray-500">Start or continue a conversation.</div>
                      <div className="flex items-center gap-6">
                      {/* <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-2xl bg-gray-800/90 flex items-center justify-center text-white shadow-sm">
                          <FileText className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-gray-500">Send document</span>
                      </div> */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white shadow-md">
                          <UserPlus className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-gray-500">Add contact</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-gray-500">Smart reply</span>
                      </div>
                      </div>
                    </div>
                  </div>
                ) : messagesLoading ? (
                  <div className="text-sm text-gray-500">Loading messages...</div>
                ) : messages.length === 0 ? (
                  <div className="text-sm text-gray-500">Start a conversation.</div>
                ) : (
                  <div className="space-y-3">
                    {orderedMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.direction === "out" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-2xl px-3.5 py-2 text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5 ${
                            msg.direction === "out"
                              ? "bg-[#f7e7c3] text-gray-900 border border-[#f0ddb2]"
                              : "bg-[#f5f6f8] dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          <div>{msg.body}</div>
                          <div className="mt-1 text-[9px] text-gray-400 text-right">
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-[#f7f8fb] dark:bg-gray-800 px-4 py-3">
                  <input
                    value={draftMessage}
                    onChange={(e) => setDraftMessage(e.target.value)}
                    placeholder="Type something..."
                    className="w-full bg-transparent text-sm text-gray-800 dark:text-gray-200 outline-none"
                    disabled={!selectedContact}
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <button className="text-[11px] font-semibold text-gray-500 hover:text-gray-700">
                      Quick Response
                    </button>
                    <button
                      onClick={handleSendMessage}
                      className="h-9 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold disabled:opacity-50 transition-colors"
                      disabled={!selectedContact || !draftMessage.trim()}
                    >
                      Send Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {showConfigModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-lg p-5 relative border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowConfigModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Config Twilio</h3>
              <p className="text-xs text-gray-500 mb-4">Enter your Twilio credentials.</p>

              <div className="space-y-3">
                <input
                  value={configForm.label}
                  onChange={(e) => setConfigForm({ ...configForm, label: e.target.value })}
                  placeholder="User name / Admin name"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
                />
                <input
                  value={configForm.accountSid}
                  onChange={(e) => setConfigForm({ ...configForm, accountSid: e.target.value })}
                  placeholder="Account SID"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
                />
                <input
                  value={configForm.authToken}
                  onChange={(e) => setConfigForm({ ...configForm, authToken: e.target.value })}
                  placeholder="Auth Token"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
                />
               <input
                  value={configForm.fromNumber}
                  onChange={(e) => setConfigForm({ ...configForm, fromNumber: e.target.value })}
                  placeholder="Phone number (E.164, e.g. +15551234567)"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
                />
              </div>
  
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setShowConfigModal(false)}
                  className="h-9 px-4 rounded-lg text-sm font-semibold border border-gray-200 dark:border-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveConfig}
                  className="h-9 px-4 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={configLoading}
                >
                  {configLoading ? "Connecting..." : "Connect"}
                </button>
              </div>
            </div>
          </div>
        )}

        {showAddContactModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-lg p-5 relative border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowAddContactModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Add Contact</h3>
              <p className="text-xs text-gray-500 mb-4">Save a contact with an E.164 number.</p>

              <div className="space-y-3">
                <input
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="Name"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
                />
                <input
                  value={contactForm.phoneE164}
                  onChange={(e) => setContactForm({ ...contactForm, phoneE164: e.target.value })}
                  placeholder="Phone number (E.164, e.g. +15551234567)"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
                />
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setShowAddContactModal(false)}
                  className="h-9 px-4 rounded-lg text-sm font-semibold border border-gray-200 dark:border-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddContact}
                  className="h-9 px-4 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={contactLoading || !activeConfig}
                >
                  {contactLoading ? "Adding..." : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}

        {(error || success) && (
          <div className="fixed bottom-4 right-4 z-[210] space-y-2">
            {error && (
              <div className="bg-red-600 text-white text-xs px-4 py-2 rounded-lg shadow">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-600 text-white text-xs px-4 py-2 rounded-lg shadow">
                {success}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
