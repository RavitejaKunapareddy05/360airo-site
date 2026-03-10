import Link from 'next/link';
import { Settings, Key } from 'lucide-react';

export function SettingsLink() {
  return (
    <Link
      href="/free-tools/settings"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
      title="API Key Settings"
    >
      <Settings className="h-4 w-4" />
      <span className="text-sm font-medium">Settings</span>
    </Link>
  );
}

export function ApiKeyIndicator() {
  return (
    <Link
      href="/free-tools/settings"
      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 hover:bg-green-500/30 transition-colors"
      title="API Key Configured"
    >
      <Key className="h-3 w-3 text-green-400" />
      <span className="text-xs font-semibold text-green-400">API Key Active</span>
    </Link>
  );
}
