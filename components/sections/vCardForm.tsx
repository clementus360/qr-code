"use client";

import { useState, useEffect } from "react";

export function VCardForm({ onChange }: { onChange: (val: string) => void }) {
    const [data, setData] = useState({ fn: "", org: "", tel: "", email: "", url: "" });

    useEffect(() => {
        const vcard = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:${data.fn}`,
            `ORG:${data.org}`,
            `TEL:${data.tel}`,
            `EMAIL:${data.email}`,
            `URL:${data.url}`,
            "END:VCARD"
        ].join("\n");
        onChange(vcard);
    }, [data, onChange]);

    return (
        <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-500">
            <input
                className="col-span-2 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                placeholder="Full Name"
                onChange={(e) => setData({ ...data, fn: e.target.value })}
            />
            <input
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                placeholder="Company"
                onChange={(e) => setData({ ...data, org: e.target.value })}
            />
            <input
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                placeholder="Phone"
                onChange={(e) => setData({ ...data, tel: e.target.value })}
            />
            <input
                className="col-span-2 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                placeholder="Email Address"
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
        </div>
    );
}