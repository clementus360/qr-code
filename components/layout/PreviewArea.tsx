"use client";

import { QRCodeSVG } from "qrcode.react";
import { useRef, useEffect, useState } from "react";
import jsQR from "jsqr";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Helper for contrast validation
const getBrightness = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
};

export default function PreviewArea({ value, design }: any) {
    const qrRef = useRef<SVGSVGElement>(null);

    // States for both validation layers
    const [isReadableContrast, setIsReadableContrast] = useState(true);
    const [scanStatus, setScanStatus] = useState<"loading" | "success" | "warning">("loading");

    useEffect(() => {
        // 1. Quick Contrast Check
        const fg = getBrightness(design.color);
        const bg = getBrightness(design.bgColor);
        const diff = Math.abs(fg - bg);
        setIsReadableContrast(diff > 100);

        // 2. Technical Scan Validation
        validateScan();
    }, [value, design]);

    const validateScan = () => {
        if (!qrRef.current) return;

        const svg = qrRef.current;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = 500;
            canvas.height = 500;
            ctx?.drawImage(img, 0, 0, 500, 500);

            const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
            if (imageData) {
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                setScanStatus(code ? "success" : "warning");
            }
        };
        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    const handleDownload = (format: 'svg' | 'png' | 'jpg') => {
        if (!qrRef.current) return;

        const svg = qrRef.current;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            // High-res output (e.g., 2048px)
            const size = 2048;
            canvas.width = size;
            canvas.height = size;

            if (format === 'jpg') {
                // JPG needs a solid background fill or it will be black
                ctx!.fillStyle = design.bgColor;
                ctx!.fillRect(0, 0, size, size);
            }

            ctx?.drawImage(img, 0, 0, size, size);

            const quality = format === 'jpg' ? 0.9 : 1.0;
            const dataUrl = canvas.toDataURL(`image/${format === 'jpg' ? 'jpeg' : 'png'}`, quality);

            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `qr-space-${Date.now()}.${format}`;
            link.click();
        };

        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <div className="flex flex-col gap-6 items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all">

            {/* Unified Scannability Badge */}
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all ${scanStatus === "success" && isReadableContrast
                ? "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
                : "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"
                }`}>
                {scanStatus === "success" && isReadableContrast ? (
                    <><CheckCircle2 className="w-3.5 h-3.5" /> <span className="text-[10px] font-bold uppercase tracking-wider">Scannable</span></>
                ) : (
                    <><AlertTriangle className="w-3.5 h-3.5" /> <span className="text-[10px] font-bold uppercase tracking-wider">Invalid Design</span></>
                )}
            </div>

            <div
                className="p-8 rounded-[2rem] shadow-inner transition-colors duration-500 overflow-hidden"
                style={{ backgroundColor: design.bgColor }}
            >
                <QRCodeSVG
                    ref={qrRef}
                    value={value || " "}
                    size={260}
                    level={design.level}
                    marginSize={design.margin}
                    fgColor={design.color}
                    bgColor={design.bgColor}
                    className="qr-rounded"
                    imageSettings={design.logo ? { src: design.logo, height: 60, width: 60, excavate: true } : undefined}
                />
            </div>

            {/* Warning Message Area */}
            {(!isReadableContrast || scanStatus === "warning") && (
                <div className="text-center space-y-1">
                    {!isReadableContrast && (
                        <p className="text-[10px] text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">
                            Low Contrast Warning
                        </p>
                    )}
                    {scanStatus === "warning" && (
                        <p className="text-[10px] text-amber-600 dark:text-amber-500 font-medium leading-relaxed">
                            QR structure blocked. Try increasing Precision (ECC) or adjust quiet zone.
                        </p>
                    )}
                </div>
            )}

            <div className="w-full flex flex-col items-center space-y-4">
                <div className="flex flex-col gap-2">
                    <Button variant="primary" size="lg" className="w-full" onClick={() => handleDownload('png')}>
                        Download PNG (High Res)
                    </Button>
                    <div className="w-full flex gap-2">
                        <Button className="w-full" variant="outline" size="sm" onClick={() => handleDownload('svg')}>SVG</Button>
                        <Button className="w-full" variant="outline" size="sm" onClick={() => handleDownload('jpg')}>JPG</Button>
                    </div>
                </div>

                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">
                    No Expiration • Vector Format
                </p>
            </div>

            <style jsx global>{`
                .qr-rounded rect {
                    rx: 4px; /* Subtle rounding for a modern studio look */
                }
            `}</style>
        </div>
    );
}