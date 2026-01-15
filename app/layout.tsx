import { Outfit } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SoftBackdrop from '@/components/SoftBackdrop'
import LenisScroll from '@/components/lenis'
import { Metadata } from 'next'

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    default: 'Joy Dental – complete dental solution | Dr Ashish Gupta',
    template: '%s | Joy Dental'
  },
  description:
    'Joy Dental is a modern complete dental solution by Dr Ashish Gupta, built for startups and growing businesses. Includes discovery, UI/UX design, development, pricing plans, FAQs, and conversion-focused sections.',
  keywords: [
    'Joy Dental',
    'Dr Ashish Gupta',
    'complete dental solution',
    'Next.js agency website',
    'UI UX agency',
    'startup website template',
    'web development services',
    'design and development agency'
  ],
  authors: [{ name: 'Dr Ashish Gupta' }],
  creator: 'Dr Ashish Gupta',
  publisher: 'Dr Ashish Gupta',

  openGraph: {
    title: 'Pixel.io – Digital Agency Template by Dr Ashish Gupta',
    description:
      'Launch faster with Pixel.io, a modern digital agency template featuring strategy, design, development, pricing plans, and FAQs.',
    siteName: 'Dr Ashish Gupta',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pixel.io – Digital Agency Template',
    description:
      'A conversion-focused digital agency template built with Next.js. Perfect for startups, teams, and scalable brands.',
    creator: '@Dr Ashish Gupta'
  },

  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <SoftBackdrop />
        <LenisScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
