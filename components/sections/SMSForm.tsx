"use client";

import { useState, useEffect } from "react";

export function SMSForm({ onChange }: { onChange: (val: string) => void }) {
    const [data, setData] = useState({ phone: "", message: "" });

    useEffect(() => {
        const encoded = `SMSTO:${data.phone}:${data.message}`;
        onChange(encoded);
    }, [data, onChange]);

    return (
        <div className="space-y-3 animate-in fade-in duration-500">
            <input
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                placeholder="Phone Number (with country code)"
                onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            <textarea
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent min-h-25 resize-none"
                placeholder="Pre-filled Message"
                onChange={(e) => setData({ ...data, message: e.target.value })}
            />
        </div>
    );
}