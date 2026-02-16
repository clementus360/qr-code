"use client";

import { useState } from "react";
import { ChevronDown, Settings2 } from "lucide-react";

interface DesignProps {
  design: {
    color: string;
    bgColor: string;
    logo: string | null;
    logoSize: number; // Added
    level: "L" | "M" | "Q" | "H";
    margin: number;
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
                className="absolute -inset-1.25 w-[150%] h-[150%] cursor-pointer"
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
                className="absolute -inset-1.25 w-[150%] h-[150%] cursor-pointer"
              />
            </div>
            <span className="text-xs font-mono font-medium uppercase">{design.bgColor}</span>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Branding</label>
          {design.logo && (
            <button
              onClick={() => setDesign({ ...design, logo: null })}
              className="text-[9px] font-black uppercase tracking-widest text-red-500/80 hover:text-red-500 transition-colors"
            >
              Clear Logo
            </button>
          )}
        </div>

        {design.logo ? (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
            {/* Active Preview */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-600 bg-white flex items-center justify-center p-1">
                <img src={design.logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-900 dark:text-white uppercase tracking-tight">Image Active</span>
                <span className="text-[9px] text-zinc-400 font-medium">Auto-centered & Excavated</span>
              </div>
            </div>

            {/* Logo Size Slider */}
            <div className="space-y-2 px-1">
              <div className="flex justify-between">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Logo Size</label>
                <span className="text-[10px] font-mono text-zinc-500">{design.logoSize}px</span>
              </div>
              <input
                type="range" min="30" max="100"
                value={design.logoSize}
                onChange={(e) => setDesign({ ...design, logoSize: parseInt(e.target.value) })}
                className="w-full accent-zinc-900 dark:accent-zinc-100 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="group relative flex items-center justify-center w-full h-12 rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <span className="text-xs text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 font-medium transition-colors">
              + Upload Center Logo
            </span>
          </div>
        )}
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
                className="w-full accent-zinc-900 dark:accent-zinc-100 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}