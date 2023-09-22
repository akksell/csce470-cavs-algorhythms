import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <head>
        <meta name="description" content="Welcome to Cav's Algorhythms! This is an SEO project for Cav's CSCE 470 class. Our record store is named Cav's Algorhythms." />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
