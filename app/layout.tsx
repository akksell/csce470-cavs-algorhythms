import './globals.css'
import type { Metadata } from 'next'
import { Rubik_Mono_One, Source_Code_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const rubik = Rubik_Mono_One({ 
  weight: '400',
  variable: '--font-rubik-mono',
  subsets: ['latin']
})
const srcCode = Source_Code_Pro({
  variable: '--font-src-code',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Cav's Algorhythms",
  description: "Cav's AlgoRhythms: The music meets algorithms hub, a Texas A&M CSCE 470 project. Dive into vinyl treasures supporting student learning and web development. Groove with us!",
  robots: "index, follow",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${srcCode.variable} ${rubik.variable}`}>
      <head>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
