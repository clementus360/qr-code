'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Coffee, Smartphone, Copy, Check, ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Logo } from '../icons/Logo'
import { Modal } from '../ui/Modal'

export const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const copyMoMoCode = () => {
        navigator.clipboard.writeText("*182*1*1*0787316052#")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <Link href="/" className="flex gap-2 items-center hover:opacity-80 transition-opacity">
                        <Logo className="w-8" />
                        <span className="text-xl font-bold tracking-tight">QR Space</span>
                    </Link>

                    <Button
                        variant="dark-outline"
                        size="sm"
                        onClick={() => setIsModalOpen(true)}
                        className="px-5 py-2 flex gap-2 items-center rounded-full text-[11px] uppercase tracking-wider font-bold"
                    >
                        <Coffee className="w-3.5 h-3.5" />
                        Support The Developer
                    </Button>
                </div>
            </header>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-2">
                    <div className="mb-8">
                        <h2 className="text-2xl font-black tracking-tighter uppercase">Support the project</h2>
                        <p className="text-sm text-zinc-500 font-medium">Help me keep QR Space 100% free and static.</p>
                    </div>

                    <div className="space-y-2">
                        {/* BuyMeACoffee - Clean Row */}
                        <a
                            href="https://buymeacoffee.com/clementus360"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-2xl hover:bg-primary/20 dark:hover:bg-zinc-800 transition-colors group"
                        >
                            <div className="flex items-center gap-4">
                                <Coffee className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                                <span className="text-sm font-bold tracking-tight">International / Card</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-zinc-300" />
                        </a>

                        {/* MoMo - High Contrast Box */}
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