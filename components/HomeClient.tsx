'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useTreatmentAnimations } from '@/hooks/useTreatmentAnimations'
import { treatmentCategories } from '@/data/treatments'

const faqs = [
  {
    q: 'How often should I visit a dentist?',
    a: 'Many people benefit from a check-up about every six months, but your dentist may recommend a different schedule depending on your oral health and risk factors.'
  },
  {
    q: 'Can I get general dental care and braces at Joy Dental?',
    a: 'Yes. Joy Dental provides general dental care and has an in-house orthodontics specialist for braces and clear aligner consultations.'
  },
  {
    q: 'What should I do if I have a toothache?',
    a: 'Contact the clinic for an assessment, especially if pain is persistent, worsening, or accompanied by swelling. A dentist can identify the cause and discuss suitable treatment.'
  },
  {
    q: 'How do I book an appointment?',
    a: 'Call Joy Dental or message us on WhatsApp. You can also use the contact page to send an enquiry.'
  }
]

const services = treatmentCategories
  .flatMap((category) =>
    category.treatments.map((treatment) => ({
      ...treatment,
      categorySlug: category.slug
    }))
  )
  .slice(0, 6)

export default function HomeClient() {
  const root = useRef<HTMLElement>(null)
  useTreatmentAnimations(root, {
    revealSelector: '.td-reveal',
    scrollSelector: '.td-reveal'
  })

  return (
    <main ref={root} className='overflow-hidden bg-[#f7f7f2] text-[#17211d]'>
      {/* Hero */}
      <section className='relative px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:px-16'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]'>
          <div>
            <p className='td-reveal mb-6 text-xs font-semibold uppercase tracking-[.28em] text-[#8b5f45]'>
              Joy Dental · Indore, India
            </p>
            <h1 className='td-reveal max-w-4xl text-[clamp(3.4rem,7.7vw,7.8rem)] font-medium leading-[.88] tracking-[-.06em]'>
              A healthier smile.{' '}
            </h1>
            <h1 className='td-reveal max-w-4xl text-[clamp(3.4rem,7.7vw,7.8rem)] text-[#8b5f45] font-medium leading-[.88] tracking-[-.06em]'>
              A happier you.
            </h1>
            <p className='td-reveal mt-8 max-w-xl text-lg leading-8 text-[#66736d] md:text-xl'>
              Thoughtful dental care for every stage of life — from routine
              check-ups and tooth-saving treatments to confident, well-aligned
              smiles.
            </p>
            <div className='td-reveal mt-9 flex flex-wrap gap-3'>
              <Link
                href='/contact'
                className='rounded-full bg-[#17211d] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5'
              >
                Book a consultation <span className='ml-3'>↗</span>
              </Link>
              <a
                href='https://wa.me/918085733733'
                target='_blank'
                rel='noreferrer'
                className='rounded-full border border-[#cfd5d0] px-6 py-4 text-sm font-semibold transition hover:bg-white'
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className='td-reveal mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#66736d]'>
              <span>
                <strong className='text-[#17211d]'>12+</strong> years of
                experience
              </span>
              <span className='hidden text-[#c4cbc5] sm:inline'>/</span>
              <span>
                <strong className='text-[#17211d]'>In-house</strong>{' '}
                orthodontics specialist
              </span>
            </div>
          </div>
          <div className='td-reveal relative min-h-[390px] overflow-hidden rounded-[2rem] bg-[#e8e8df] sm:min-h-[520px]'>
            <Image
              src='/img/rct_steps.jpg'
              alt='Dental care at Joy Dental'
              fill
              priority
              sizes='(max-width: 1024px) 100vw, 46vw'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#17211d]/70 via-transparent to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-6 text-white md:p-8'>
              <p className='text-xs font-semibold uppercase tracking-[.22em] text-white/75'>
                Caring for your smile
              </p>
              <p className='mt-3 max-w-sm text-2xl leading-tight tracking-[-.03em] md:text-3xl'>
                Expertise you can trust. Care that puts you first.
              </p>
            </div>
            <div className='absolute right-5 top-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-semibold text-[#17211d] backdrop-blur'>
              Joy Dental · Indore
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className='border-y border-[#dde1dc] bg-[#f0f1e9] px-6 py-7 md:px-10 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            ['12+', 'years of dental experience'],
            ['Comprehensive', 'care under one roof'],
            ['Specialist', 'orthodontic consultations'],
            ['Patient-first', 'clear treatment discussions']
          ].map(([value, label]) => (
            <div
              key={label}
              className='td-reveal border-l border-[#cfd5cd] pl-4'
            >
              <p className='text-xl font-medium tracking-[-.03em] md:text-2xl'>
                {value}
              </p>
              <p className='mt-1 text-sm text-[#66736d]'>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treatments */}
      <section className='px-6 py-24 md:px-10 md:py-32 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='td-reveal mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end'>
            <div>
              <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#8b5f45]'>
                Care for every smile
              </p>
              <h2 className='max-w-3xl text-4xl leading-[.98] tracking-[-.05em] md:text-6xl'>
                The right care starts with understanding you.
              </h2>
            </div>
            <p className='max-w-lg text-base leading-7 text-[#66736d]'>
              Whether you need relief from discomfort, help protecting a damaged
              tooth, or a plan to straighten your smile, we’ll help you
              understand the next step.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/treatments/${service.slug}`}
                className='td-reveal group flex min-h-[245px] flex-col rounded-[1.5rem] border border-[#dce0d9] bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b8c1b8] hover:bg-white md:p-7'
              >
                <div className='flex items-center justify-between'>
                  <span className='text-xs font-semibold tracking-[.18em] text-[#9a6b50]'>
                    0{index + 1}
                  </span>
                  <span className='text-xl transition group-hover:translate-x-1'>
                    ↗
                  </span>
                </div>
                <h3 className='mt-9 text-2xl tracking-[-.035em]'>
                  {service.title}
                </h3>
                <p className='mt-3 flex-1 text-sm leading-6 text-[#66736d]'>
                  {service.short}
                </p>
                <span className='mt-6 text-sm font-semibold'>
                  Explore treatment <span className='ml-1'>→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className='td-reveal mt-8'>
            <Link
              href='/treatments'
              className='inline-flex rounded-full border border-[#cfd5d0] px-6 py-3.5 text-sm font-semibold transition hover:bg-white'
            >
              Explore all treatments ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Care philosophy */}
      <section className='bg-[#e9ebe3] px-6 py-24 md:px-10 md:py-32 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center'>
          <div className='td-reveal'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#8b5f45]'>
              The Joy Dental approach
            </p>
            <h2 className='max-w-2xl text-4xl leading-[.98] tracking-[-.05em] md:text-6xl'>
              Good dentistry is a conversation, not just a procedure.
            </h2>
            <p className='mt-7 max-w-xl text-base leading-7 text-[#66736d]'>
              We believe you should understand what’s happening, why a treatment
              may be recommended, and what options are available before making a
              decision.
            </p>
            <Link
              href='/about'
              className='mt-8 inline-flex rounded-full bg-[#17211d] px-6 py-3.5 text-sm font-semibold text-white'
            >
              Get to know Joy Dental ↗
            </Link>
          </div>
          <div className='grid gap-3 sm:grid-cols-2'>
            {[
              [
                '01',
                'Listen first',
                'We begin by understanding your concern, symptoms and goals.'
              ],
              [
                '02',
                'Explain clearly',
                'We discuss findings and suitable treatment options in plain language.'
              ],
              [
                '03',
                'Plan together',
                'Your care plan is based on your needs and clinical assessment.'
              ],
              [
                '04',
                'Support your smile',
                'We share aftercare and prevention guidance to help maintain oral health.'
              ]
            ].map(([num, title, body]) => (
              <article
                key={num}
                className='td-reveal rounded-[1.5rem] border border-[#d4d9d0] bg-[#f7f7f2]/70 p-6 md:p-7'
              >
                <p className='text-xs font-semibold tracking-[.18em] text-[#9a6b50]'>
                  {num}
                </p>
                <h3 className='mt-7 text-2xl tracking-[-.03em]'>{title}</h3>
                <p className='mt-3 text-sm leading-6 text-[#66736d]'>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className='px-6 py-24 md:px-10 md:py-32 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='td-reveal mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end'>
            <div>
              <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#8b5f45]'>
                Meet your dentists
              </p>
              <h2 className='text-4xl tracking-[-.05em] md:text-6xl'>
                Experienced care. Specialist insight.
              </h2>
            </div>
            <Link
              href='/team'
              className='text-sm font-semibold hover:text-[#8b5f45]'
            >
              Meet the team ↗
            </Link>
          </div>
          <div className='grid gap-5 md:grid-cols-2'>
            <article className='td-reveal rounded-[1.75rem] border border-[#dce0d9] bg-white/70 p-7 md:p-9'>
              <p className='text-xs font-semibold uppercase tracking-[.2em] text-[#9a6b50]'>
                Founder · Dental Surgeon
              </p>
              <h3 className='mt-5 text-3xl tracking-[-.04em] md:text-4xl'>
                Dr. Ashish Gupta
              </h3>
              <p className='mt-3 text-sm font-medium text-[#66736d]'>
                BDS · MBA
              </p>
              <p className='mt-5 max-w-xl text-base leading-7 text-[#66736d]'>
                A Government Dental College, Indore graduate with 12+ years of
                experience in comprehensive dental care, with a focus on
                thoughtful assessment and restorative treatment.
              </p>
            </article>
            <article className='td-reveal rounded-[1.75rem] border border-[#dce0d9] bg-white/70 p-7 md:p-9'>
              <p className='text-xs font-semibold uppercase tracking-[.2em] text-[#9a6b50]'>
                Founder · Specialist Orthodontist
              </p>
              <h3 className='mt-5 text-3xl tracking-[-.04em] md:text-4xl'>
                Dr. Priyanka Gupta
              </h3>
              <p className='mt-3 text-sm font-medium text-[#66736d]'>
                BDS · MDS Orthodontics
              </p>
              <p className='mt-5 max-w-xl text-base leading-7 text-[#66736d]'>
                An orthodontics specialist trained at King George’s Medical
                University, Lucknow, helping patients explore braces, clear
                aligners and bite-correction options.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className='border-t border-[#dde1dc] px-6 py-24 md:px-10 md:py-32 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]'>
          <div className='td-reveal'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#8b5f45]'>
              A few helpful answers
            </p>
            <h2 className='text-4xl leading-[.98] tracking-[-.05em] md:text-6xl'>
              Frequently asked questions.
            </h2>
            <p className='mt-6 max-w-sm text-base leading-7 text-[#66736d]'>
              Have another question? Get in touch and our team can help you work
              out the next step.
            </p>
            <Link
              href='/contact'
              className='mt-7 inline-flex rounded-full border border-[#cfd5d0] px-6 py-3.5 text-sm font-semibold hover:bg-white'
            >
              Ask us a question ↗
            </Link>
          </div>
          <div className='divide-y divide-[#d9ded9] border-y border-[#d9ded9]'>
            {faqs.map((faq, i) => (
              <details key={faq.q} className='td-reveal group py-6'>
                <summary className='flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium tracking-[-.02em] md:text-xl'>
                  <span>{faq.q}</span>
                  <span className='text-2xl font-light text-[#8b5f45] transition group-open:rotate-45'>
                    +
                  </span>
                </summary>
                <p className='max-w-2xl pr-8 pt-4 text-sm leading-7 text-[#66736d]'>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className='bg-[#17211d] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16'>
        <div className='td-reveal mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end'>
          <div>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#d3a98f]'>
              Your smile, your next step
            </p>
            <h2 className='max-w-4xl text-4xl leading-[.96] tracking-[-.05em] md:text-7xl'>
              Let’s make your next dental visit a positive one.
            </h2>
            <p className='mt-6 max-w-2xl text-base leading-7 text-white/65'>
              Tell us what you need help with. We’ll help you get started.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='/contact'
              className='rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#17211d]'
            >
              Book a consultation ↗
            </Link>
            <a
              href='https://wa.me/918085733733'
              target='_blank'
              rel='noreferrer'
              className='rounded-full border border-white/25 px-6 py-4 text-sm font-semibold text-white'
            >
              WhatsApp us
            </a>
          </div>
        </div>
        <div className='mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between'>
          <span>Joy Dental · Caring for Your Smile with Expertise & Trust</span>
          <span>Near Police High Rise Tiraha, Laxmipuri Colony, Indore</span>
        </div>
      </section>
    </main>
  )
}
