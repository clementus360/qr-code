"use client";

import { useState } from "react";
import { Link2, Wifi, Contact, Mail, MessageSquare } from "lucide-react";

import PreviewArea from "@/components/layout/PreviewArea";
import { URLForm, VCardForm, WiFiForm } from "@/components";
import DesignControls from "@/components/layout/DesignControls";
import { EmailForm } from "@/components/sections/EmailForm";
import { SMSForm } from "@/components/sections/SMSForm";

const tabs = [
  { id: 'url', label: 'URL', icon: Link2 },
  { id: 'wifi', label: 'WiFi', icon: Wifi },
  { id: 'vcard', label: 'vCard', icon: Contact },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'sms', label: 'SMS', icon: MessageSquare },
];

export default function Home() {
  const [type, setType] = useState("url");
  const [encodedValue, setEncodedValue] = useState("https://google.com");
  const [design, setDesign] = useState({
    color: "#000000",
    bgColor: "#ffffff",
    logo: null,
    logoSize: 60,
    level: 'H' as const,
    margin: 4
  });

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 dark:bg-zinc-950 pt-24 pb-12 md:pt-32">
      <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8">

        {/* Mobile: Top / Desktop: Right (Sticky) */}
        {/* We use 'order-first lg:order-last' to ensure users see the QR code immediately on mobile */}
        <div className="order-first lg:order-last flex flex-col items-center justify-start lg:sticky lg:top-28 h-fit z-20">
          <div className="w-full max-w-100 lg:max-w-none">
            <PreviewArea value={encodedValue} design={design} />
          </div>

          {/* Subtle mobile hint */}
          <p className="mt-4 text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em] lg:hidden">
            Scroll to customize
          </p>
        </div>

        {/* Left: Input & Design Controls */}
        <div className="flex flex-col gap-6 md:gap-8 bg-white dark:bg-zinc-900 p-6 md:p-10 rounded-4xl md:rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none h-fit">
          <div className="space-y-1">
            <h1 className="text-xl font-black uppercase tracking-tighter italic">QR Space</h1>
            <p className="text-[10px] md:text-xs text-zinc-400 font-medium uppercase tracking-widest">
              Design Studio
            </p>
          </div>

          {/* Type Navigation - Touch Optimized */}
          <nav className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-x-auto no-scrollbar scroll-smooth">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setType(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3 min-w-17.5 rounded-xl transition-all duration-300 ${type === tab.id
                    ? 'bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-white scale-[1.02]'
                    : 'opacity-40 hover:opacity-100 text-zinc-500'
                  }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span className="text-[9px] font-black uppercase tracking-widest">{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Dynamic Forms Area */}
          <div className="min-h-40 md:min-h-50 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {type === "url" && <URLForm onChange={setEncodedValue} />}
            {type === "wifi" && <WiFiForm onChange={setEncodedValue} />}
            {type === "vcard" && <VCardForm onChange={setEncodedValue} />}
            {type === "email" && <EmailForm onChange={setEncodedValue} />}
            {type === "sms" && <SMSForm onChange={setEncodedValue} />}
          </div>

          {/* Style Controls */}
          <DesignControls design={design} setDesign={setDesign} />
        </div>

      </div>
    </div>
  );
}