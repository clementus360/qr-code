'use client'

import React from 'react'
import Link from 'next/link'
import { QrCode, Coffee } from 'lucide-react'
import { Button } from '../ui/Button'

export const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo & Brand */}
                <Link href="/" className="flex gap-2 items-center">
                    <QrCode className=" w-7 h-7" />
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        QR Studio
                    </span>
                </Link>

                {/* Donation Action */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://buymeacoffee.com/clementus360"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="dark-outline"
                            size="sm"
                            className="px-5 py-2 flex gap-2 items-center border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        >
                            <Coffee className="w-4 h-4 text-amber-600" />
                            <span className="hidden sm:inline">Buy me a coffee</span>
                        </Button>
                    </a>
                </div>

            </div>
        </header>
    )
}