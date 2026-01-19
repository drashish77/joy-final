'use client'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import FramerMultiSlideCarousel from '@/components/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FramerMultiSlideCarousel />
      {/* <Pricing /> */}
      <Faq />
      <CTA />
    </>
  )
}
