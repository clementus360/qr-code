"use client";

import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button"; // Adjust path as needed

export default function PreviewArea({ value, design }: any) {
    const qrRef = useRef<SVGSVGElement>(null);

    const handleDownload = () => {
        if (!qrRef.current) return;

        // Serialize SVG to XML for download
        const svgData = new XMLSerializer().serializeToString(qrRef.current);
        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(svgBlob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `permanent-qr-${Date.now()}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
            <div
                className="p-8 rounded-[2rem] mb-6 shadow-inner transition-colors duration-500"
                style={{ backgroundColor: design.bgColor }}
            >
                <QRCodeSVG
                    ref={qrRef}
                    value={value || " "}
                    size={260}
                    level="H"
                    fgColor={design.color}
                    bgColor={design.bgColor}
                    imageSettings={design.logo ? { src: design.logo, height: 60, width: 60, excavate: true } : undefined}
                />
            </div>

            <div className="w-full flex flex-col items-center space-y-4">
                <Button
                    variant="primary"
                    size="lg"
                    className="w-full py-4 shadow-lg shadow-blue-500/20"
                    onClick={handleDownload}
                >
                    Export Permanent QR
                </Button>

                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">
                    No Expiration • Vector Format
                </p>
            </div>
        </div>
    );
}