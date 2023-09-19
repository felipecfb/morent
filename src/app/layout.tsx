import { Metadata } from 'next'

import './globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Morent',
  description: 'A car rental website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
