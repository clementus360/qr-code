"use client";

import { useState } from "react";
import { ChevronDown, Settings2 } from "lucide-react";

interface DesignProps {
  design: {
    color: string;
    bgColor: string;
    logo: string | null;
    level: "L" | "M" | "Q" | "H";
    margin: number
  };
  setDesign: (design: any) => void;
}

export default function DesignControls({ design, setDesign }: DesignProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (item) => setDesign({ ...design, logo: item.target?.result as string });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-6">
      {/* 1. Color Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">QR Color</label>
          <div className="flex items-center gap-3 p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-600">
              <input
                type="color"
                value={design.color}
                onChange={(e) => setDesign({ ...design, color: e.target.value })}
                className="absolute inset-[-5px] w-[150%] h-[150%] cursor-pointer"
              />
            </div>
            <span className="text-xs font-mono font-medium uppercase">{design.color}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Background</label>
          <div className="flex items-center gap-3 p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-600">
              <input
                type="color"
                value={design.bgColor}
                onChange={(e) => setDesign({ ...design, bgColor: e.target.value })}
                className="absolute inset-[-5px] w-[150%] h-[150%] cursor-pointer"
              />
            </div>
            <span className="text-xs font-mono font-medium uppercase">{design.bgColor}</span>
          </div>
        </div>
      </div>

      {/* 2. Logo Upload */}
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Branding</label>
        <div className="group relative flex items-center justify-center w-full h-12 rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-primary transition-colors cursor-pointer">
          <input type="file" accept="image/*" onChange={handleLogoUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
          <span className="text-xs text-zinc-500 group-hover:text-primary font-medium">
            {design.logo ? "✓ Logo Loaded" : "+ Add Logo"}
          </span>
        </div>
      </div>

      {/* 3. Collapsible Advanced Section */}
      <div className="pt-2">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
        >
          <Settings2 className="w-3 h-3" />
          Advanced Settings
          <ChevronDown className={`w-3 h-3 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
        </button>

        {showAdvanced && (
          <div className="mt-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Precision (ECC)</label>
              <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
                {['L', 'M', 'Q', 'H'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setDesign({ ...design, level: lvl })}
                    className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${design.level === lvl ? 'bg-white dark:bg-zinc-700 shadow-sm' : 'opacity-40'}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Quiet Zone</label>
                <span className="text-[10px] font-mono text-zinc-500">{design.margin}px</span>
              </div>
              <input
                type="range" min="0" max="20"
                value={design.margin}
                onChange={(e) => setDesign({ ...design, margin: parseInt(e.target.value) })}
                className="w-full accent-primary h-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}