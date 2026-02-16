'use client'

import React, { useState } from 'react'
import { Heart, Github, ExternalLink, Coffee, Smartphone, Copy, Check, ChevronRight } from 'lucide-react'
import { Modal } from '../ui/Modal' // Adjust path as needed

export const Footer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const currentYear = new Date().getFullYear()

    const copyMoMoCode = () => {
        navigator.clipboard.writeText("*182*1*1*0787316052#")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <footer className="w-full py-12 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                        {/* Brand Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
                                    QR Space
                                </span>
                                <span className="px-2 py-0.5 text-[8px] font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded-md uppercase tracking-widest">
                                    v1.0
                                </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 font-medium leading-relaxed max-w-60">
                                A professional-grade, browser-based QR generator.
                                100% static, private, and forever free.
                            </p>
                        </div>

                        {/* Quick Credits */}
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Developer</span>
                            <a
                                href="https://github.com/clementus360"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold flex items-center gap-2 group hover:text-blue-600 transition-colors"
                            >
                                clementus360
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                            </a>
                            <p className="text-[10px] text-zinc-400 font-medium flex items-center gap-1.5">
                                Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Rwanda
                            </p>
                        </div>

                        {/* Social & Support Trigger */}
                        <div className="flex flex-col md:items-end gap-6">
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/clementus360"
                                    target="_blank"
                                    className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all border border-zinc-100 dark:border-zinc-800"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-500 hover:text-amber-500 transition-all border border-zinc-100 dark:border-zinc-800"
                                >
                                    <Coffee className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                                &copy; {currentYear} QR Space Studio
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Support Modal (Mirrored from Header) */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-2">
                    <div className="mb-8">
                        <h2 className="text-2xl font-black tracking-tighter uppercase">Support the project</h2>
                        <p className="text-sm text-zinc-500 font-medium">Help me keep QR Space 100% free and static.</p>
                    </div>

                    <div className="space-y-2">
                        <a
                            href="https://buymeacoffee.com/clementus360"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
                        >
                            <div className="flex items-center gap-4">
                                <Coffee className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                                <span className="text-sm font-bold tracking-tight">International / Card</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-zinc-300" />
                        </a>

                        <div className="relative group">
                            <div className="flex items-center gap-4 p-4">
                                <Smartphone className="w-5 h-5 text-zinc-400" />
                                <span className="text-sm font-bold tracking-tight">MTN Mobile Money</span>
                            </div>

                            <div
                                onClick={copyMoMoCode}
                                className="mx-2 mb-2 bg-zinc-900 dark:bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-[0.98] transition-all"
                            >
                                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-black uppercase tracking-[0.2em]">Dial Code</span>
                                <code className="text-xl font-black text-white dark:text-black tracking-tighter select-all">
                                    *182*1*1*0787316052#
                                </code>
                                <div className="flex items-center gap-1.5 mt-1">
                                    {copied ? (
                                        <span className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                                            <Check className="w-3 h-3" /> COPIED
                                        </span>
                                    ) : (
                                        <span className="text-[10px] text-zinc-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            CLICK TO COPY
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-[10px] text-zinc-400 font-medium text-center leading-relaxed">
                        This tool is independent and free. <br />
                        Your support helps me build more tools like this.
                    </p>
                </div>
            </Modal>
        </>
    )
}