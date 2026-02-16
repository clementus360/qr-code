'use client'

import React from 'react'
import { Heart, Github, Globe, ExternalLink, Coffee } from 'lucide-react'

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full py-12 px-6 mt-20 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
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
                        <p className="text-[11px] text-zinc-500 font-medium leading-relaxed max-w-[240px]">
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
                            className="text-sm font-bold flex items-center gap-2 group hover:text-primary transition-colors"
                        >
                            clementus360
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                        </a>
                        <p className="text-[10px] text-zinc-400 font-medium flex items-center gap-1.5">
                            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Rwanda
                        </p>
                    </div>

                    {/* Social & Legal */}
                    <div className="flex flex-col md:items-end gap-6">
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/clementus360"
                                target="_blank"
                                className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all border border-zinc-100 dark:border-zinc-800"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href="https://buymeacoffee.com/clementus360"
                                target="_blank"
                                className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-500 hover:text-amber-500 transition-all border border-zinc-100 dark:border-zinc-800"
                            >
                                <Coffee className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                            &copy; {currentYear} QR Space Studio
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}