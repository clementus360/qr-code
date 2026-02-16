import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@/components'
import { Footer } from '@/components/layout/Footer'

const gilroy = localFont({
  src: [
    { path: '../fonts/Gilroy-Thin.ttf', weight: '100' },
    { path: '../fonts/Gilroy-Light.ttf', weight: '300' },
    { path: '../fonts/Gilroy-Regular.ttf', weight: '400' },
    { path: '../fonts/Gilroy-Medium.ttf', weight: '500' },
    { path: '../fonts/Gilroy-SemiBold.ttf', weight: '600' },
    { path: '../fonts/Gilroy-Bold.ttf', weight: '700' },
  ],
  variable: '--font-gilroy',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'QR Space - Custom QR Code Generator',
  description:
    'QR Space is a sleek and intuitive QR code generator, offering customizable designs and seamless user experience for creating personalized QR codes that do not expire.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} antialiased`}>
        <Header />

        {/* App shell */}
        <div className="flex">
          <main className="flex-1 px-4">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  )
}