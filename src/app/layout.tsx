import { type Metadata } from 'next'
import { Geist } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - ClawOS App',
    default: 'ClawOS App - Raise Your Claw, On the Go.',
  },
  description:
    'ClawOS App brings the power of the ClawOS ecosystem to your pocket. Cultivate, train, and manage your intelligent Claws anywhere, anytime.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('bg-gray-50 antialiased', geistSans.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
