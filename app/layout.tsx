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
  metadataBase: new URL('https://joydent.in'),
  title: {
    default: 'Joy Dental – Dental Care That Brings You Joy',
    template: '%s | Joy Dental'
  },

  description:
    'Experience gentle, advanced, and personalized dental care at Joy Dental. From routine check-ups to expert orthodontic and implant treatments, we care for every smile with joy. Expert care by Dr. Priyanka Gupta (MDS Orthodontics, KGMC Lucknow) & Dr. Ashish Gupta (BDS, MBA)',
  keywords: [
    'Joy Dental',
    'dental clinic',
    'dentist near me',
    'orthodontist',
    'braces',
    'aligners',
    'dental implants',
    'root canal treatment',
    'smile design',
    'teeth cleaning',
    'pediatric dentist',
    'general dentist',
    'orthodontic clinic',
    'dental care'
  ],
  authors: [{ name: 'Dr Ashish Gupta' }],
  creator: 'Dr Ashish Gupta',
  publisher: 'Dr Ashish Gupta',

  openGraph: {
    title: 'Joy Dental – Dental Care That Brings You Joy',
    description:
      'Experience gentle, advanced, and personalized dental care at Joy Dental. From routine check-ups to expert orthodontic and implant treatments, we care for every smile with joy',
    siteName: 'Joy dental',
    url: 'https://joydent.in',
    type: 'website',
    images: [{ url: 'https://joydent.in/joydent_final_cover.png' }]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Joy Dental – Dental Care That Brings You Joy',
    description:
      'Experience gentle, advanced, and personalized dental care at Joy Dental. From routine check-ups to expert orthodontic and implant treatments, we care for every smile with joy',
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
