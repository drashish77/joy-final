'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import type { Treatment, TreatmentCategory } from '@/data/treatments'
import {
  SectionHeading,
  TreatmentActions,
  TreatmentBreadcrumbs,
  TreatmentCta
} from '@/components/treatments/TreatmentShared'
import { useTreatmentAnimations } from '@/hooks/useTreatmentAnimations'

type Props = {
  treatment: Treatment
  category: TreatmentCategory
  related: Treatment[]
}

export default function TreatmentDetailClient({
  treatment,
  category,
  related
}: Props) {
  const root = useRef<HTMLElement>(null)

  useTreatmentAnimations(root, {
    revealSelector: '.td-reveal',
    scrollSelector: '.td-scroll',
    parallax: { target: '.td-hero-art', trigger: '.td-hero' }
  })

  return (
    <main ref={root} className='overflow-hidden bg-[#f7f7f2] text-[#17211d]'>
      {/* Breadcrumb + hero */}
      <section className='td-hero relative min-h-[760px] px-6 pb-20 pt-28 md:px-10 md:pt-36 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <TreatmentBreadcrumbs
            category={category}
            current={treatment.title}
            className='td-reveal'
          />

          <div className='grid items-end gap-12 pt-16 lg:grid-cols-[1fr_0.72fr] lg:pt-24'>
            <div>
              <div className='td-reveal mb-7 flex items-center gap-4'>
                <span className='text-sm font-medium text-[#9a6b50]'>
                  Chapter {category.number}
                </span>
                <span className='h-px w-14 bg-[#c8cec9]' />
                <Link
                  href={`/treatments/category/${category.slug}`}
                  className='text-sm text-[#7a837e] hover:text-[#17211d]'
                >
                  {category.title}
                </Link>
              </div>
              <h1 className='td-reveal max-w-5xl text-[clamp(3.5rem,8.5vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.065em]'>
                {treatment.title}
              </h1>
              <p className='td-reveal mt-9 max-w-2xl text-lg leading-8 text-[#66736d] md:text-xl'>
                {treatment.short}
              </p>
              <TreatmentActions revealClass='td-reveal mt-9' />
            </div>

            <div className='td-reveal love relative h-[360px] overflow-hidden rounded-[2rem] bg-[#dfe4de] md:h-[430px] lg:h-[500px]'>
              <Image
                src={treatment.image ?? '/img/rct_steps2.jpg'}
                alt={`${treatment.title} at Joy Dental`}
                fill
                priority
                sizes='(max-width: 1024px) 100vw, 42vw'
                className='td-hero-art object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#17211d]/45 via-transparent to-white/10' />
              <div className='absolute bottom-0 left-0 right-0 flex items-end justify-between bg-orange-500/70 px-5 pb-4 text-white'>
                <span className='text-xs uppercase tracking-[.22em]'>
                  Joy Dental · Indore
                </span>
                <span className='text-4xl font-light'>{category.number}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className='border-y border-[#dce1dc] bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16'>
        <div className='td-scroll mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.25fr_.75fr]'>
          <div>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]'>
              About the treatment
            </p>
            <p className='max-w-4xl text-2xl leading-[1.45] tracking-[-.025em] md:text-4xl md:leading-[1.35]'>
              {treatment.description}
            </p>
          </div>
          <div className='self-end border-t border-[#cfd5d0] pt-5'>
            <p className='text-xs uppercase tracking-[.2em] text-[#7a837e]'>
              At a glance
            </p>
            <p className='mt-5 text-sm leading-7 text-[#66736d]'>
              Treatment planning at Joy Dental starts with an examination and is
              tailored to your teeth, gums, goals and clinical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className='px-6 py-20 md:px-10 md:py-28 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <SectionHeading
            className='td-scroll'
            eyebrow='What to expect'
            title='Care planned around you.'
            count={`01 — ${String(treatment.highlights.length).padStart(2, '0')}`}
          />

          <div className='grid border-t border-[#cfd5d0] md:grid-cols-2 lg:grid-cols-4'>
            {treatment.highlights.map((item, i) => (
              <div
                key={item}
                className='td-scroll border-b border-[#cfd5d0] py-7 md:border-r md:px-7 lg:first:pl-0 lg:last:border-r-0'
              >
                <span className='text-sm text-[#9a6b50]'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className='mt-10 max-w-xs text-lg leading-7 tracking-[-.015em]'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient journey */}
      <section className='bg-[#eef0e9] px-6 py-20 md:px-10 md:py-28 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='td-scroll max-w-2xl'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]'>
              Your treatment journey
            </p>
            <h2 className='text-4xl tracking-[-.04em] md:text-6xl'>
              From consultation to confident care.
            </h2>
          </div>
          <div className='mt-14 grid gap-0 border-y border-[#cbd1cb] md:grid-cols-3'>
            {[
              [
                '01',
                'Consultation',
                'We understand your concern, examine your teeth and gums, and discuss what you want to achieve.'
              ],
              [
                '02',
                'Treatment plan',
                'You receive a clear plan based on your clinical findings and the treatment options suitable for you.'
              ],
              [
                '03',
                'Aftercare',
                'We explain what to expect after treatment and how to maintain your oral health and result.'
              ]
            ].map(([num, title, copy]) => (
              <div
                key={num}
                className='td-scroll border-b border-[#cbd1cb] py-8 md:border-b-0 md:border-r md:px-8 md:py-10 last:border-0'
              >
                <span className='text-sm text-[#9a6b50]'>{num}</span>
                <h3 className='mt-12 text-2xl tracking-[-.025em]'>{title}</h3>
                <p className='mt-4 max-w-sm text-sm leading-7 text-[#66736d]'>
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {treatment.faqs.length > 0 && (
        <section className='bg-white px-6 py-20 md:px-10 md:py-28 lg:px-16'>
          <div className='mx-auto max-w-5xl'>
            <div className='td-scroll mb-12'>
              <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]'>
                Frequently asked
              </p>
              <h2 className='text-4xl tracking-[-.04em] md:text-6xl'>
                Questions about {treatment.title}
              </h2>
            </div>
            <div className='td-scroll divide-y divide-[#d7dcd7] border-y border-[#d7dcd7]'>
              {treatment.faqs.map((faq) => (
                <details key={faq.q} className='group py-7'>
                  <summary className='cursor-pointer list-none pr-10 text-lg font-medium marker:hidden md:text-xl'>
                    {faq.q}
                    <span className='float-right text-2xl font-light transition-transform duration-300 group-open:rotate-45'>
                      +
                    </span>
                  </summary>
                  <p className='mt-5 max-w-3xl text-sm leading-7 text-[#66736d]'>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className='px-6 py-20 md:px-10 md:py-28 lg:px-16'>
          <div className='mx-auto max-w-7xl'>
            <div className='td-scroll flex items-end justify-between gap-8'>
              <div>
                <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]'>
                  Continue exploring
                </p>
                <h2 className='text-4xl tracking-[-.04em] md:text-6xl'>
                  Related treatments
                </h2>
              </div>
              <Link
                href='/treatments'
                className='hidden text-sm font-semibold underline underline-offset-4 md:block'
              >
                View all treatments
              </Link>
            </div>
            <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/treatments/${item.slug}`}
                  className='td-scroll group rounded-[1.5rem] border border-[#d5dbd5] bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17211d]/5'
                >
                  <div className='flex items-start justify-between gap-5'>
                    <span className='text-xs uppercase tracking-[.18em] text-[#7a837e]'>
                      {item.category}
                    </span>
                    <span className='transition-transform duration-300 group-hover:translate-x-1'>
                      ↗
                    </span>
                  </div>
                  <h3 className='mt-16 text-2xl tracking-[-.025em]'>
                    {item.title}
                  </h3>
                  <p className='mt-3 text-sm leading-6 text-[#66736d]'>
                    {item.short}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <TreatmentCta
        className='td-scroll'
        title='Not sure if this is the right treatment?'
        description='Start with a consultation. We’ll examine your dental health and help you understand the options available for your smile.'
      />
    </main>
  )
}
