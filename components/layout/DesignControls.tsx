"use client";

interface DesignProps {
  design: { color: string; bgColor: string; logo: string | null };
  setDesign: (design: any) => void;
}

export default function DesignControls({ design, setDesign }: DesignProps) {
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
      <div className="grid grid-cols-2 gap-4">
        {/* Foreground Color */}
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

        {/* Background Color */}
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

      {/* Logo Upload Section */}
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Center Branding</label>
        <div className="group relative flex items-center justify-center w-full h-12 rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-700 hover:border-blue-500 transition-colors cursor-pointer">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleLogoUpload} 
            className="absolute inset-0 opacity-0 cursor-pointer" 
          />
          <span className="text-xs text-zinc-500 group-hover:text-blue-500 font-medium">
            {design.logo ? "✓ Logo Uploaded" : "+ Upload Center Logo"}
          </span>
        </div>
      </div>
    </div>
  );
}