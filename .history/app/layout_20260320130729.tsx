import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'AWS Student Community Day 2026 | Amity University Bengaluru',
  description: 'Build. Deploy. Scale. Join 300+ students and professionals for a power-packed day of cloud workshops, keynotes, and networking at Amity University Bengaluru.',
  keywords: ['AWS', 'Cloud Computing', 'Student Community', 'Tech Conference', 'Bengaluru', 'Amity University'],
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
