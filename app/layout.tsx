import './globals.css'
import type { Metadata } from 'next'
import { Rubik_Mono_One, Source_Code_Pro } from 'next/font/google'

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
  description: "Welcome to Cav's Algorhythms! This is an SEO project for Cav's CSCE 470 class. Our record store is named Cav's Algorhythms.",
  robots: "index, follow"
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
        <div className=''>
          <div className='container mx-auto px-4'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
