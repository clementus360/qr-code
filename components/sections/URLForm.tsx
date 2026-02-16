"use client";

export function URLForm({ onChange }: { onChange: (val: string) => void }) {
    return (
        <div className="space-y-4 animate-in fade-in duration-500">
            <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-tight">Website Link</label>
                <input
                    type="url"
                    placeholder="https://example.com"
                    className="w-full mt-2 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent outline-none focus:ring-2 focus:ring-primary"
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}