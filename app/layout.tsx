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
        <meta name="description" content="Welcome to Cav's Algorhythms! This is an SEO project for Cav's CSCE 470 class. Our record store is named Cav's Algorhythms." />
      </head>
      <body>
        <div className='min-h-screen flex justify-center items-center'>
          <div className='container mx-auto px-4 md:border md:border-violet-500'>
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
