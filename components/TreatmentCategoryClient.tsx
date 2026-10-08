'use client'

import Link from 'next/link'
import { useRef } from 'react'
import type { TreatmentCategory } from '@/data/treatments'
import {
  TreatmentActions,
  TreatmentBreadcrumbs
} from '@/components/treatments/TreatmentShared'
import { useTreatmentAnimations } from '@/hooks/useTreatmentAnimations'
import Image from 'next/image'

type Props = { category: TreatmentCategory }

export default function TreatmentCategoryClient({ category }: Props) {
  const root = useRef<HTMLElement>(null)

  useTreatmentAnimations(root, {
    revealSelector: '.cat-reveal',
    scrollSelector: '.cat-card'
  })

  return (
    <main ref={root} className='overflow-hidden bg-[#f7f7f2] text-[#17211d]'>
      <section className='px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <TreatmentBreadcrumbs
            current={category.title}
            className='cat-reveal'
          />

          <div className='grid gap-12 pt-16 lg:grid-cols-[1fr_.72fr] lg:items-end lg:pt-24'>
            <div>
              <div className='cat-reveal mb-7 flex items-center gap-4'>
                <span className='text-sm font-medium text-[#9a6b50]'>
                  Chapter {category.number}
                </span>
                <span className='h-px w-14 bg-[#c8cec9]' />
                <span className='text-sm text-[#7a837e]'>
                  Joy Dental · Indore
                </span>
              </div>
              <h1 className='cat-reveal max-w-5xl text-[clamp(3.3rem,7.5vw,8rem)] font-medium leading-[.88] tracking-[-.06em]'>
                {category.title}
              </h1>
              <p className='cat-reveal mt-9 max-w-2xl text-lg leading-8 text-[#66736d] md:text-xl'>
                {category.description}
              </p>
              <TreatmentActions revealClass='cat-reveal mt-9' />
            </div>

            <div className='cat-reveal relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#dfe4de] lg:min-h-[480px]'>
              <div className='absolute inset-[-12%] bg-[radial-gradient(circle_at_65%_30%,rgba(255,255,255,.95),transparent_25%),radial-gradient(circle_at_30%_75%,rgba(154,107,80,.28),transparent_36%),linear-gradient(135deg,#eef0e9,#cfd7d0)]' />
              <Image
                src={category.image ?? '/img/rct_steps.jpg'}
                alt={`${category.title} at Joy Dental`}
                fill
                priority
                sizes='(max-width: 1024px) 100vw, 42vw'
                className='td-hero-art object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#17211d]/35 via-transparent to-white/10' />
              <div className='absolute bottom-0 left-0 right-0 flex items-end justify-between bg-orange-500/70 px-5 pb-4 text-white'>
                <span className='text-xs uppercase tracking-[.22em]'>
                  Joy Dental · Indore
                </span>
                <span className='text-5xl font-light'>{category.number}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-y border-[#dce1dc] bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='cat-reveal mb-12 max-w-2xl'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]'>
              Explore this chapter
            </p>
            <h2 className='text-4xl tracking-[-.04em] md:text-6xl'>
              Treatments available at Joy Dental.
            </h2>
          </div>

          <div className='grid gap-4 md:grid-cols-2'>
            {category.treatments.map((treatment, index) => (
              <Link
                key={treatment.slug}
                href={`/treatments/${treatment.slug}`}
                className='cat-card group rounded-[1.75rem] border border-[#d5dbd5] bg-[#f7f7f2] p-7 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#17211d]/5 md:p-9'
              >
                <div className='flex items-start justify-between gap-5'>
                  <span className='text-sm text-[#9a6b50]'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className='transition-transform duration-300 group-hover:translate-x-1'>
                    ↗
                  </span>
                </div>
                <h3 className='mt-20 text-2xl tracking-[-.025em] md:text-3xl'>
                  {treatment.title}
                </h3>
                <p className='mt-4 max-w-xl text-sm leading-7 text-[#66736d]'>
                  {treatment.short}
                </p>
                <div className='mt-7 flex flex-wrap gap-2'>
                  {treatment.highlights.slice(0, 3).map((highlight) => (
                    <span
                      key={highlight}
                      className='rounded-full border border-[#d5dbd5] bg-white px-3 py-1.5 text-xs text-[#66736d]'
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <p className='mt-8 text-sm font-semibold'>
                  View treatment{' '}
                  <span className='ml-2 transition-transform group-hover:translate-x-1'>
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 py-20 md:px-10 md:py-28 lg:px-16'>
        <div className='cat-reveal mx-auto max-w-7xl rounded-[2rem] bg-[#eef0e9] p-8 md:p-12 lg:p-16'>
          <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]'>
            Need help choosing?
          </p>
          <div className='grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end'>
            <div>
              <h2 className='max-w-3xl text-4xl tracking-[-.04em] md:text-6xl'>
                Start with your concern. We’ll help you understand the right
                treatment.
              </h2>
              <p className='mt-6 max-w-xl text-sm leading-7 text-[#66736d]'>
                Every treatment begins with an examination and a plan based on
                your individual dental needs.
              </p>
            </div>
            <Link
              href='/contact'
              className='inline-flex rounded-full bg-[#17211d] px-7 py-4 text-sm font-semibold text-white'
            >
              Book an appointment ↗
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-[#17211d] px-6 py-20 text-white md:px-10 md:py-28 lg:px-16'>
        <div className='mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#d3a98f]'>
              Keep exploring
            </p>
            <h2 className='text-4xl tracking-[-.04em] md:text-6xl'>
              Explore all Joy Dental treatments.
            </h2>
          </div>
          <Link
            href='/treatments'
            className='inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#17211d]'
          >
            View all treatments ↗
          </Link>
        </div>
      </section>
    </main>
  )
}
