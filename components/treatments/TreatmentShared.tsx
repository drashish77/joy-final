'use client';

import Link from 'next/link';
import type { TreatmentCategory } from '@/data/treatments';

const whatsappUrl = 'https://wa.me/918085733733';

export function TreatmentBreadcrumbs({
  category,
  current,
  className = 'reveal',
}: {
  category?: TreatmentCategory;
  current?: string;
  className?: string;
}) {
  return (
    <nav
      className={`${className} flex flex-wrap items-center gap-2 text-xs uppercase tracking-[.18em] text-[#7a837e]`}
      aria-label="Breadcrumb"
    >
      <Link href="/" className="hover:text-[#17211d]">Home</Link>
      <span>/</span>
      <Link href="/treatments" className="hover:text-[#17211d]">Treatments</Link>
      {category && (
        <>
          <span>/</span>
          <Link href={`/treatments/category/${category.slug}`} className="hover:text-[#17211d]">
            {category.title}
          </Link>
        </>
      )}
      {current && (
        <>
          <span>/</span>
          <span>{current}</span>
        </>
      )}
    </nav>
  );
}

export function TreatmentActions({
  revealClass = 'reveal',
  compact = false,
}: {
  revealClass?: string;
  compact?: boolean;
}) {
  const buttonClass = compact ? 'px-5 py-3' : 'px-6 py-3.5';

  return (
    <div className={`${revealClass} flex flex-wrap gap-3`}>
      <Link
        href="/contact"
        className={`rounded-full bg-[#17211d] ${buttonClass} text-sm font-semibold text-white transition hover:-translate-y-0.5`}
      >
        Book a consultation <span className="ml-2">↗</span>
      </Link>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={`rounded-full border border-[#cfd5d0] bg-white/50 ${buttonClass} text-sm font-semibold transition hover:bg-white`}
      >
        WhatsApp us
      </a>
    </div>
  );
}

export function TreatmentCta({
  eyebrow = 'Joy Dental · Indore',
  title,
  description,
  className = 'reveal',
}: {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <section className="bg-[#17211d] px-6 py-20 text-white md:px-10 md:py-28 lg:px-16">
      <div className={`${className} mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end`}>
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#d3a98f]">{eyebrow}</p>
          <h2 className="max-w-3xl text-4xl leading-[1] tracking-[-.045em] md:text-7xl">{title}</h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/65">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#17211d]">
            Book an appointment ↗
          </Link>
          <a href="tel:+918085733733" className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white">
            Call 8085 733 733
          </a>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  count,
  className = 'reveal',
}: {
  eyebrow: string;
  title: string;
  count?: string;
  className?: string;
}) {
  return (
    <div className={`${className} mb-12 flex items-end justify-between gap-8`}>
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]">{eyebrow}</p>
        <h2 className="max-w-2xl text-4xl tracking-[-.04em] md:text-6xl">{title}</h2>
      </div>
      {count && <span className="hidden text-sm text-[#7a837e] md:block">{count}</span>}
    </div>
  );
}

