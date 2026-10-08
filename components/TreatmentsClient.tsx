'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { treatmentCategories } from '@/data/treatments'

gsap.registerPlugin(ScrollTrigger)

export default function TreatmentsClient() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      })
      gsap.from('.hero-title span', {
        yPercent: 110,
        opacity: 0,
        stagger: 0.07,
        duration: 0.9,
        delay: 0.1,
        ease: 'power4.out'
      })
      gsap.from('.hero-copy', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.35,
        ease: 'power3.out'
      })
      gsap.utils.toArray<HTMLElement>('.treatment-row').forEach((row) => {
        gsap.from(row, {
          y: 55,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 86%', once: true }
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={root} className='bg-[#f7f7f2] text-[#17211d]'>
      <section className='relative overflow-hidden px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <p className='hero-kicker mb-6 text-xs font-semibold uppercase tracking-[.28em] text-[#66736d]'>
            Joy Dental · Treatments
          </p>
          <h1 className='hero-title max-w-5xl overflow-hidden text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[.9] tracking-[-.055em]'>
            <span className='inline-block pb-2'>Complete care.</span>
            <br />
            <span className='inline-block text-[#8b5f45]'>
              One trusted clinic.
            </span>
          </h1>
          <p className='hero-copy mt-9 max-w-2xl text-lg leading-8 text-[#66736d] md:text-xl'>
            From preventive care and root canal treatment to orthodontics,
            crowns, gum treatment and wisdom tooth surgery — explore the care
            available at Joy Dental.
          </p>
          <div className='mt-9 flex flex-wrap gap-3'>
            <Link
              href='/#contact'
              className='rounded-full bg-[#17211d] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5'
            >
              Book an appointment
            </Link>
            <a
              href='https://wa.me/918085733733'
              className='rounded-full border border-[#cfd5d0] px-6 py-3.5 text-sm font-semibold transition hover:bg-white'
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section className='border-y border-[#dde1dc] bg-[#f2f2ec] px-6 py-6 md:px-10 lg:px-16'>
        <div className='mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-3 text-sm text-[#66736d]'>
          <span>
            <strong className='text-[#17211d]'>12+</strong> years of experience
          </span>
          <span>
            <strong className='text-[#17211d]'>15,000+</strong> patients served
          </span>
          <span>
            <strong className='text-[#17211d]'>Specialist</strong> orthodontic
            care
          </span>
          <span>
            <strong className='text-[#17211d]'>Comprehensive</strong> dental
            treatment
          </span>
        </div>
      </section>

      <section className='px-6 py-24 md:px-10 md:py-32 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-14 flex items-end justify-between gap-8'>
            <div>
              <p className='mb-3 text-xs font-semibold uppercase tracking-[.25em] text-[#8b5f45]'>
                Explore
              </p>
              <h2 className='text-4xl tracking-[-.035em] md:text-6xl'>
                Treatments
              </h2>
            </div>
            <p className='hidden max-w-sm text-sm leading-6 text-[#66736d] md:block'>
              Start with a problem, a goal, or a treatment you already have in
              mind. Each service has its own detailed guide.
            </p>
          </div>

          <div className='divide-y divide-[#d9ded9] border-y border-[#d9ded9]'>
            {treatmentCategories.map((category) => (
              <article
                key={category.slug}
                className='treatment-row group py-9 md:py-12'
              >
                <Link
                  href={`/treatments/${category.slug}`}
                  className='grid gap-7 md:grid-cols-[90px_1.25fr_1fr_auto] md:items-start'
                >
                  <div className='text-sm font-medium text-[#9a6b50]'>
                    {category.number}
                  </div>
                  <div>
                    <h3 className='text-2xl tracking-[-.025em] transition group-hover:translate-x-1 md:text-4xl'>
                      {category.title}
                    </h3>
                    <p className='mt-4 max-w-xl text-sm leading-6 text-[#66736d]'>
                      {category.description}
                    </p>
                  </div>
                  <div className='grid gap-2 sm:grid-cols-2'>
                    {category.treatments.slice(0, 4).map((t) => (
                      <span key={t.slug} className='text-sm text-[#4f5b55]'>
                        {t.title}
                      </span>
                    ))}
                  </div>
                  <span className='text-sm font-semibold'>
                    Explore{' '}
                    <span className='inline-block transition group-hover:translate-x-1'>
                      ↗
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#17211d] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-end'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#d3a98f]'>
              Not sure what you need?
            </p>
            <h2 className='max-w-2xl text-4xl tracking-[-.04em] md:text-6xl'>
              Tell us what is bothering you. We’ll help you find the right place
              to start.
            </h2>
          </div>
          <div className='lg:justify-self-end'>
            <Link
              href='/contact'
              className='inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#17211d]'
            >
              Talk to Joy Dental <span className='ml-4'>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
