import { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from './components/Header'

import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--primary-font',
})

export const metadata: Metadata = {
  title: 'Morent',
  description: 'A car rental website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
