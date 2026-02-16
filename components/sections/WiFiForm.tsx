"use client";

import { useState, useEffect } from "react";

export function WiFiForm({ onChange }: { onChange: (val: string) => void }) {
    const [data, setData] = useState({ ssid: "", pass: "", auth: "WPA" });

    useEffect(() => {
        // Protocol: WIFI:T:WPA;S:network;P:password;;
        const encoded = `WIFI:T:${data.auth};S:${data.ssid};P:${data.pass};;`;
        onChange(encoded);
    }, [data, onChange]);

    return (
        <div className="space-y-4 animate-in fade-in duration-500">
            <input
                placeholder="Network Name (SSID)"
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                onChange={(e) => setData({ ...data, ssid: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                onChange={(e) => setData({ ...data, pass: e.target.value })}
            />
            <select
                className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent"
                onChange={(e) => setData({ ...data, auth: e.target.value })}
            >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">No Password</option>
            </select>
        </div>
    );
}