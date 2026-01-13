'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  CheckCircle2, 
  Mail, 
  Zap, 
  Calendar, 
  Flame,
  Building,
  Globe,
  Phone,
  User,
  Clock,
  CheckCircle,
  Filter,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CalendarDays
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Footer } from '@/components/footer';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';

type TimeSlot = {
  usTime: string;
  usFormatted: string;
  indiaTime: string;
  indiaFormatted: string;
  value: string;
};

type CalendarDay = {
  date: Date;
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  available: boolean;
};

export default function DemoFormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    userCount: '',
    specificNeeds: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Calendar states
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTimezone, setSelectedTimezone] = useState<'us' | 'india'>('us');
  const [tempFormData, setTempFormData] = useState<any>(null);

  // Generate calendar days for current month
  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // First day of month
    const firstDay = new Date(year, month, 1);
    // Last day of month
    const lastDay = new Date(year, month + 1, 0);
    // Days in month
    const daysInMonth = lastDay.getDate();
    
    // Start from Monday of the week containing first day
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay() + (startDate.getDay() === 0 ? -6 : 1));
    
    // End on Sunday of the week containing last day
    const endDate = new Date(lastDay);
    endDate.setDate(endDate.getDate() + (7 - endDate.getDay()) % 7);
    
    const days: CalendarDay[] = [];
    const currentDate = new Date(startDate);
    const today = new Date();
    
    while (currentDate <= endDate) {
      const dayDate = new Date(currentDate);
      const isCurrentMonth = dayDate.getMonth() === month;
      const isToday = 
        dayDate.getDate() === today.getDate() &&
        dayDate.getMonth() === today.getMonth() &&
        dayDate.getFullYear() === today.getFullYear();
      
      // Make dates available from tomorrow onwards
      const isAvailable = dayDate > today && isCurrentMonth;
      
      days.push({
        date: dayDate,
        day: dayDate.getDate(),
        month: dayDate.getMonth(),
        year: dayDate.getFullYear(),
        isCurrentMonth,
        isToday,
        available: isAvailable
      });
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    setCalendarDays(days);
  };

  // Convert US time to India time (US is UTC-4 to UTC-5, India is UTC+5:30)
  const convertUSToIndiaTime = (usHour: number, usMinute: number): string => {
    // US Eastern Time (ET) is UTC-5, India is UTC+5:30, so difference is 10.5 hours
    let indiaHour = usHour + 10; // 10 hour difference
    const indiaMinute = usMinute + 30; // Plus 30 minutes
    
    // Adjust for minute overflow
    let finalIndiaHour = indiaHour;
    let finalIndiaMinute = indiaMinute;
    
    if (indiaMinute >= 60) {
      finalIndiaHour += 1;
      finalIndiaMinute -= 60;
    }
    
    // Handle hour overflow
    if (finalIndiaHour >= 24) {
      finalIndiaHour -= 24;
    }
    
    // Format 24h to 12h
    const ampm = finalIndiaHour >= 12 ? 'PM' : 'AM';
    const displayHour = finalIndiaHour > 12 ? finalIndiaHour - 12 : finalIndiaHour === 0 ? 12 : finalIndiaHour;
    
    return `${displayHour}:${finalIndiaMinute.toString().padStart(2, '0')} ${ampm}`;
  };

  // Generate time slots for both US and India time zones
  const generateTimeSlots = () => {
    const slots: TimeSlot[] = [];
    
    // US Eastern Time slots (9 AM to 8 PM)
    const usStartHour = 9; // 9 AM ET
    const usEndHour = 20; // 8 PM ET
    
    for (let hour = usStartHour; hour <= usEndHour; hour++) {
      // Create :00 slots only for cleaner UI
      const usMinute = 0;
      const usTime = `${hour.toString().padStart(2, '0')}:${usMinute.toString().padStart(2, '0')}`;
      
      // Format US time
      const usHour12 = hour > 12 ? hour - 12 : hour;
      const usAmpm = hour >= 12 ? 'PM' : 'AM';
      const usFormatted = `${usHour12}:${usMinute.toString().padStart(2, '0')} ${usAmpm} ET`;
      
      // Calculate India time (IST)
      const indiaFormatted = convertUSToIndiaTime(hour, usMinute) + ' IST';
      const indiaTime = `${hour + 10}:${usMinute}`; // Simplified for value storage
      
      slots.push({
        usTime,
        usFormatted,
        indiaTime,
        indiaFormatted,
        value: `${hour}:${usMinute}` // Store as hour:minute for simplicity
      });
    }
    
    setTimeSlots(slots);
  };

  useEffect(() => {
    generateCalendar(currentMonth);
    generateTimeSlots();
  }, [currentMonth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    try {
      // Save form data temporarily for the scheduling step
      setTempFormData({ ...formData });
      
      // Send initial form submission with template variables
      await emailjs.send(
        'service_dxyn8u2',
        'template_pzd5l3c',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
          userCount: formData.userCount,
          specificNeeds: formData.specificNeeds || 'Not specified',
          submitted_at: new Date().toLocaleString(),
          // Demo scheduling fields (will be updated after scheduling)
          preferredDate: 'Not scheduled yet',
          preferredTime: 'Not scheduled yet',
          timeZone: 'Not selected yet',
          alternativeDate: 'Not specified'
        },
        'Oj-CWMpC50tIV6CUF'
      );

      setStatus('✅ Successfully Submitted! 🎉');
      setShowConfetti(true);
      
      // Show calendar after 1.5 seconds
      setTimeout(() => {
        setFormSubmitted(true);
        setShowCalendar(true);
        setShowConfetti(false);
      }, 1500);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('❌ Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDateSelect = (day: CalendarDay) => {
    if (day.available) {
      setSelectedDate(day.date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleScheduleConfirm = async () => {
    if (!selectedDate || !selectedTime || !tempFormData) return;
    
    setLoading(true);
    
    try {
      // Format date and time for email (matching your template variables)
      const formattedDate = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const [hour, minute] = selectedTime.split(':').map(Number);
      const timeSlot = timeSlots.find(slot => {
        const [slotHour] = slot.value.split(':').map(Number);
        return slotHour === hour;
      });
      
      let formattedTime = '';
      let timeZoneText = '';
      
      if (timeSlot) {
        if (selectedTimezone === 'us') {
          formattedTime = timeSlot.usFormatted;
          timeZoneText = 'US Eastern Time (ET)';
        } else {
          formattedTime = timeSlot.indiaFormatted;
          timeZoneText = 'India Standard Time (IST)';
        }
      }
      
      // Calculate alternative date (next day)
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      const alternativeDate = nextDay.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Send scheduling confirmation email with ALL data matching your template
      await emailjs.send(
        'service_dxyn8u2',
        'template_pzd5l3c', // Your template ID
        {
          // Form data (matching your template variables)
          firstName: tempFormData.firstName,
          lastName: tempFormData.lastName,
          email: tempFormData.email,
          phone: tempFormData.phone,
          companyName: tempFormData.companyName,
          userCount: tempFormData.userCount,
          specificNeeds: tempFormData.specificNeeds || 'Not specified',
          
          // Demo scheduling data (MATCHING YOUR TEMPLATE VARIABLES)
          preferredDate: formattedDate, // This matches your template
          preferredTime: formattedTime, // This matches your template
          timeZone: timeZoneText, // This matches your template
          alternativeDate: alternativeDate, // This matches your template
          
          // Additional info
          submitted_at: new Date().toLocaleString(),
          demo_status: '✅ SCHEDULED',
          demo_duration: '15 minutes',
          meeting_type: 'Google Meet',
          
          // For better display in email
          full_name: `${tempFormData.firstName} ${tempFormData.lastName}`,
          company_info: `${tempFormData.companyName} (${tempFormData.userCount} users)`,
          demo_details: `Demo scheduled for ${formattedDate} at ${formattedTime} ${timeZoneText}`
        },
        'Oj-CWMpC50tIV6CUF' // Your public key
      );
      
      // Navigate to success page
      setShowCalendar(false);
      setFormData({
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '',
        companyName: '', 
        userCount: '',
        specificNeeds: ''
      });
      setTempFormData(null);
      
    } catch (error) {
      console.error('Scheduling Error:', error);
      setStatus('❌ Scheduling failed. Please try again or contact us.');
    } finally {
      setLoading(false);
    }
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const userCountOptions = [
    { value: '1-5', label: '1-5 Users' },
    { value: '6-10', label: '6-10 Users' },
    { value: '11-25', label: '11-25 Users' },
    { value: '26-50', label: '26-50 Users' },
    { value: '51-100', label: '51-100 Users' },
    { value: '101-250', label: '101-250 Users' },
    { value: '251-500', label: '251-500 Users' },
    { value: '501-1000', label: '501-1,000 Users' },
    { value: '1000+', label: '1,000+ Users' }
  ];

  // Calendar Page
  if (formSubmitted && showCalendar) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -100 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                y: [0, window.innerHeight],
                x: Math.sin(i * 0.5) * 100
              }}
              transition={{ 
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
              className="absolute w-1 h-1 rounded-full bg-[#FF8A65]/30"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="relative inline-block mb-8">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full blur-2xl opacity-30"
                />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6432] to-[#FF8A65] flex items-center justify-center shadow-2xl shadow-[#FF6432]/50">
                  <CalendarDays className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                <span className="block mb-2">Schedule Your Demo</span>
                <span className="block bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-white bg-clip-text text-transparent">
                  Select Date & Time
                </span>
              </h1>
              
              <div className="h-1 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full max-w-md mx-auto mb-6" />
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Choose a convenient time for your personalized 15-minute demo
              </p>
            </motion.div>

            {/* Timezone Selector */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => setSelectedTimezone('us')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      selectedTimezone === 'us' 
                        ? 'bg-gradient-to-r from-[#FF6432] to-[#FF8A65] text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Globe className="h-4 w-4" />
                    <span>US Eastern Time</span>
                  </button>
                  <button
                    onClick={() => setSelectedTimezone('india')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      selectedTimezone === 'india' 
                        ? 'bg-gradient-to-r from-[#FF6432] to-[#FF8A65] text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Globe className="h-4 w-4" />
                    <span>India Standard Time</span>
                  </button>
                </div>
                <p className="text-white/60 text-sm text-center mt-3">
                  {selectedTimezone === 'us' 
                    ? 'Showing times in US Eastern (converted to IST)' 
                    : 'Showing times in India (converted to ET)'}
                </p>
              </div>
            </motion.div>

            {/* Calendar Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                <CardHeader className="pb-6 bg-gradient-to-r from-[#FF6432]/10 to-[#FF8A65]/10 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white">
                        Select Demo Time
                      </CardTitle>
                      <CardDescription className="text-white/80">
                        Available time slots for the next 30 days
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToPreviousMonth}
                        className="text-white hover:bg-white/10"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <span className="text-white font-semibold text-lg">
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToNextMonth}
                        className="text-white hover:bg-white/10"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Calendar */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4">Select Date</h3>
                      <div className="grid grid-cols-7 gap-2 mb-4">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                          <div key={day} className="text-center text-white/60 text-sm font-medium py-2">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2">
                        {calendarDays.map((day, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: day.available ? 1.05 : 1 }}
                            whileTap={{ scale: day.available ? 0.95 : 1 }}
                            onClick={() => handleDateSelect(day)}
                            disabled={!day.available}
                            className={`
                              relative h-12 rounded-lg flex items-center justify-center text-sm font-medium
                              transition-all duration-200
                              ${!day.isCurrentMonth ? 'opacity-30' : ''}
                              ${day.isToday ? 'border-2 border-[#FF8A65]' : ''}
                              ${selectedDate?.getDate() === day.date.getDate() && 
                                selectedDate?.getMonth() === day.date.getMonth() ? 
                                'bg-gradient-to-r from-[#FF6432] to-[#FF8A65] text-white' :
                                day.available ? 
                                'bg-white/5 text-white hover:bg-white/10' : 
                                'bg-white/5 text-white/40 cursor-not-allowed'
                              }
                            `}
                          >
                            {day.day}
                            {day.isToday && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF8A65] rounded-full"
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                      
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-[#FF8A65]" />
                            <span className="text-white font-medium">
                              Selected: {selectedDate.toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                month: 'long', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Time Slots */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4">
                        Available Time Slots
                        <span className="text-sm font-normal text-white/70 ml-2">
                          ({selectedTimezone === 'us' ? 'US Eastern Time' : 'India Standard Time'})
                        </span>
                      </h3>
                      {selectedDate ? (
                        <div className="space-y-3">
                          <div className="text-white/70 mb-4">
                            Select a time for your 15-minute demo session
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2">
                            {timeSlots.map((slot, index) => (
                              <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleTimeSelect(slot.value)}
                                className={`
                                  p-3 rounded-xl text-center transition-all duration-200
                                  flex flex-col items-center justify-center
                                  ${selectedTime === slot.value ?
                                    'bg-gradient-to-r from-[#FF6432] to-[#FF8A65] text-white shadow-lg' :
                                    'bg-white/5 text-white hover:bg-white/10'
                                  }
                                `}
                              >
                                <div className="font-medium text-lg">
                                  {selectedTimezone === 'us' ? slot.usFormatted.split(' ')[0] : slot.indiaFormatted.split(' ')[0]}
                                </div>
                                <div className="text-xs mt-1 text-white/70">
                                  {selectedTimezone === 'us' ? slot.indiaFormatted : slot.usFormatted}
                                </div>
                              </motion.button>
                            ))}
                          </div>
                          
                          {selectedTime && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-6"
                            >
                              <div className="bg-gradient-to-r from-[#FF6432]/10 to-[#FF8A65]/10 rounded-xl p-6 border border-[#FF8A65]/30">
                                <div className="flex items-center justify-between mb-4">
                                  <div>
                                    <h4 className="text-white font-bold text-lg">Demo Scheduled!</h4>
                                    <p className="text-white/80">
                                      {selectedDate.toLocaleDateString('en-US', { 
                                        month: 'long', 
                                        day: 'numeric' 
                                      })}{' '}
                                      at {selectedTimezone === 'us' 
                                        ? timeSlots.find(s => s.value === selectedTime)?.usFormatted
                                        : timeSlots.find(s => s.value === selectedTime)?.indiaFormatted
                                      }
                                    </p>
                                    <p className="text-white/60 text-sm mt-1">
                                      ({selectedTimezone === 'us' 
                                        ? timeSlots.find(s => s.value === selectedTime)?.indiaFormatted
                                        : timeSlots.find(s => s.value === selectedTime)?.usFormatted
                                      })
                                    </p>
                                  </div>
                                  <CheckCircle className="h-8 w-8 text-[#FF8A65]" />
                                </div>
                                
                                <div className="space-y-3 mb-6">
                                  <div className="flex items-center gap-3 text-white/80">
                                    <Clock className="h-4 w-4" />
                                    <span>Duration: 15 minutes</span>
                                  </div>
                                  <div className="flex items-center gap-3 text-white/80">
                                    <Video className="h-4 w-4" />
                                    <span>Google Meet link will be emailed</span>
                                  </div>
                                </div>
                                
                                <Button
                                  onClick={handleScheduleConfirm}
                                  disabled={loading}
                                  className="w-full bg-gradient-to-r from-[#FF6432] to-[#FF8A65] hover:opacity-90 text-white h-12 text-lg font-semibold"
                                >
                                  {loading ? (
                                    <div className="flex items-center justify-center gap-3">
                                      <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                      >
                                        <Zap className="h-5 w-5" />
                                      </motion.div>
                                      Confirming...
                                    </div>
                                  ) : (
                                    <>
                                      <Calendar className="mr-3" /> Confirm Demo Time
                                    </>
                                  )}
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center min-h-[300px]">
                          <div className="text-center text-white/60">
                            <CalendarDays className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p>Select a date to see available time slots</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-8"
            >
              <Button
                variant="outline"
                onClick={() => setShowCalendar(false)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ArrowUpRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Form
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Final Success Page after scheduling
  if (formSubmitted && !showCalendar && selectedDate && selectedTime) {
    const timeSlot = timeSlots.find(s => s.value === selectedTime);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] relative overflow-hidden">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={500}
            gravity={0.15}
            colors={['#FF6432', '#FF8A65', '#FFB74D', '#FFFFFF']}
          />
        )}
        
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-12"
            >
              <div className="relative inline-block mb-8">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full blur-2xl opacity-30"
                />
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6432] to-[#FF8A65] flex items-center justify-center shadow-2xl shadow-[#FF6432]/50">
                  <div className="text-white text-3xl font-bold">360</div>
                </div>
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
              >
                <span className="block mb-2">Demo Scheduled!</span>
                <span className="block bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-white bg-clip-text text-transparent">
                  Check Your Email for Details
                </span>
              </motion.h1>
              
              <div className="h-1 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full max-w-md mx-auto mb-8" />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6432] to-[#FF8A65] flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">360airo Demo Confirmed</h3>
                    <p className="text-white/70">Your session has been scheduled</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-white/90">
                  <p className="text-lg">
                    Thank you for scheduling your demo! Here are your session details:
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#FF6432]/10 to-[#FF8A65]/10 rounded-xl p-6 max-w-md mx-auto">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-3">
                        <Calendar className="h-6 w-6 text-[#FF8A65]" />
                        <div>
                          <div className="text-sm text-white/70">Date</div>
                          <div className="text-xl font-bold text-white">
                            {selectedDate.toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              month: 'long', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center gap-3">
                        <Clock className="h-6 w-6 text-[#FF8A65]" />
                        <div>
                          <div className="text-sm text-white/70">Time ({selectedTimezone === 'us' ? 'US Eastern' : 'India'})</div>
                          <div className="text-xl font-bold text-white">
                            {selectedTimezone === 'us' ? timeSlot?.usFormatted : timeSlot?.indiaFormatted}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center gap-3">
                        <Globe className="h-6 w-6 text-[#FF8A65]" />
                        <div>
                          <div className="text-sm text-white/70">Time Zone</div>
                          <div className="text-lg text-white">
                            {selectedTimezone === 'us' ? 'US Eastern Time (ET)' : 'India Standard Time (IST)'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6">
                    <h4 className="text-white font-bold mb-3">What happens next?</h4>
                    <ul className="space-y-3 text-white/80 text-left">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#FF8A65] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Check your email for confirmation with meeting link</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#FF8A65] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Add the meeting to your calendar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#FF8A65] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Prepare any questions for your demo</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-lg">
                    A confirmation email with the Google Meet link has been sent to <span className="text-[#FF8A65] font-semibold">{tempFormData?.email}</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div className="text-white/80">
                  <p>If you don't see the email in your inbox, please check your spam folder.</p>
                </div>
                
                <Button
                  onClick={() => {
                    setFormSubmitted(false);
                    setSelectedDate(null);
                    setSelectedTime(null);
                    setShowCalendar(false);
                    setSelectedTimezone('us');
                    setTempFormData(null);
                  }}
                  className="bg-gradient-to-r from-[#FF6432] to-[#FF8A65] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold"
                >
                  <Calendar className="mr-3" />
                  Schedule Another Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Original Form Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.15}
          colors={['#FF6432', '#FF8A65', '#FFB74D', '#FFFFFF']}
        />
      )}
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#FF6432]/50 text-white font-semibold text-sm">
                <Flame className="h-4 w-4 text-[#FF8A65] mr-3" />
                Get Your Personalized Demo
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              <span className="block">Get Your</span>
              <span className="block bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-white bg-clip-text text-transparent">
                Free AI Email Demo
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1 }}
              className="h-1 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full max-w-md mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
            >
              15-minute personalized walkthrough. See how 360airo can scale your outreach 10x faster.
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <CardHeader className="pb-6 bg-gradient-to-r from-[#FF6432]/10 to-[#FF8A65]/10 border-b border-white/10">
                <CardTitle className="text-3xl font-bold text-white text-center">
                  Request Your Demo
                </CardTitle>
                <CardDescription className="text-white/80 text-center text-lg">
                  Complete the form to schedule your personalized demo
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <User className="w-5 h-5 mr-2 text-[#FF8A65]" />
                      Basic Information
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-white font-semibold">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="bg-white/5 border-white/20 text-white h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432] placeholder-white/40"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-white font-semibold">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          className="bg-white/5 border-white/20 text-white h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432] placeholder-white/40"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-white font-semibold flex items-center">
                          <Mail className="w-4 h-4 mr-2" />Work Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-white/5 border-white/20 text-white h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432] placeholder-white/40"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-white font-semibold flex items-center">
                          <Phone className="w-4 h-4 mr-2" />Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/5 border-white/20 text-white h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432] placeholder-white/40"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Company Information */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <Building className="w-5 h-5 mr-2 text-[#FF8A65]" />
                      Company Information
                    </h3>
                    <div className="space-y-3">
                      <Label htmlFor="companyName" className="text-white font-semibold">Company Name *</Label>
                      <Input
                        id="companyName"
                        type="text"
                        placeholder="Your Company Inc."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                        className="bg-white/5 border-white/20 text-white h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432] placeholder-white/40"
                      />
                    </div>
                    <div className="grid gap-6 ">
                      <div className="space-y-3">
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="userCount" className="text-white font-semibold">Number of Users *</Label>
                        <Select 
                          value={formData.userCount} 
                          onValueChange={(value) => setFormData({ ...formData, userCount: value })}
                          required
                        >
                          <SelectTrigger className="bg-white/5 border-white/20 text-white h-12 rounded-lg">
                            <SelectValue placeholder="Select number of users" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0a0014] border-white/20 text-white">
                            {userCountOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value} className="hover:bg-white/10 focus:bg-white/10">
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>

                  {/* Additional Details */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-[#FF8A65]" />Additional Details
                    </h3>
                    <div className="space-y-3">
                      <Label htmlFor="specificNeeds" className="text-white font-semibold flex items-center">
                        <Filter className="w-4 h-4 mr-2" />Goals & Needs (Optional)
                      </Label>
                      <textarea
                        id="specificNeeds"
                        placeholder="Tell us about your outreach goals, current challenges, and what you hope to achieve with 360airo..."
                        value={formData.specificNeeds}
                        onChange={(e) => setFormData({ ...formData, specificNeeds: e.target.value })}
                        rows={4}
                        className="w-full bg-white/5 border border-white/20 rounded-lg p-4 text-white placeholder-white/40 focus:border-[#FF6432] focus:ring-[#FF6432] focus:outline-none resize-none"
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6"
                  >
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold rounded-lg bg-gradient-to-r from-[#FF6432] to-[#FF8A65] hover:opacity-90 transition-all hover:scale-[1.02] text-white relative overflow-hidden group"
                      disabled={loading}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="mr-3"
                            >
                              <Zap className="h-5 w-5" />
                            </motion.div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Calendar className="mr-3" /> Submit & Schedule Demo
                          </>
                        )}
                      </span>
                    </Button>

                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg text-center font-medium ${status.includes('✅') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}
                      >
                        {status}
                      </motion.div>
                    )}
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Add missing Video icon component
const Video = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);
