"use client";

import { useState, useEffect } from "react";

export function EmailForm({ onChange }: { onChange: (val: string) => void }) {
    const [data, setData] = useState({ email: "", subject: "", body: "" });

    useEffect(() => {
        // MATMSG is the standard for Email QRs
        const encoded = `MATMSG:TO:${data.email};SUB:${data.subject};BODY:${data.body};;`;
        onChange(encoded);
    }, [data, onChange]);

    return (
        <div className="space-y-3 animate-in fade-in duration-500">
            <input
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                placeholder="Recipient Email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <input
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                placeholder="Subject"
                onChange={(e) => setData({ ...data, subject: e.target.value })}
            />
            <textarea
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent min-h-[80px] resize-none"
                placeholder="Message Body"
                onChange={(e) => setData({ ...data, body: e.target.value })}
            />
        </div>
    );
}