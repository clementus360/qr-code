"use client";

import { useState } from "react";

import PreviewArea from "@/components/layout/PreviewArea";
import { URLForm, VCardForm, WiFiForm } from "@/components";
import DesignControls from "@/components/layout/DesignControls";

export default function Home() {
  const [type, setType] = useState("url");
  const [encodedValue, setEncodedValue] = useState("https://google.com");
  const [design, setDesign] = useState({ color: "#000000", bgColor: "#ffffff", logo: null });

  return (
    <div className="flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 pt-24">
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left: Input & Design */}
        <div className="flex flex-col gap-8 bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
          <div className="space-y-1">
            <h1 className="text-xl font-bold tracking-tight">QR Studio</h1>
            <p className="text-xs text-zinc-400">Select type and customize appearance</p>
          </div>

          <nav className="flex gap-2 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
            {['url', 'wifi', 'vcard'].map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`flex-1 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${type === t
                    ? 'bg-white dark:bg-zinc-700 shadow-sm text-primary dark:text-primary/50'
                    : 'opacity-40 hover:opacity-60'
                  }`}
              >
                {t}
              </button>
            ))}
          </nav>

          <div className="min-h-[180px]">
            {type === "url" && <URLForm onChange={setEncodedValue} />}
            {type === "wifi" && <WiFiForm onChange={setEncodedValue} />}
            {type === "vcard" && <VCardForm onChange={setEncodedValue} />}
          </div>

          <DesignControls design={design} setDesign={setDesign} />
        </div>

        {/* Right: Preview */}
        <div className="flex items-center justify-center">
          <PreviewArea value={encodedValue} design={design} />
        </div>
      </div>
    </div>
  );
}