'use client';

import { FormEvent, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useTreatmentAnimations } from '@/hooks/useTreatmentAnimations';

const phone = '+91 8085 733 733';
const tel = 'tel:+918085733733';
const whatsapp = 'https://wa.me/918085733733';
const address = 'Near Police High Rise Tiraha, Laxmipuri Colony, Indore, Madhya Pradesh';
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const treatments = [
  'General Dental Check-up',
  'Root Canal Treatment',
  'Dental Crowns / Bridges',
  'Dental Implants',
  'Braces / Clear Aligners',
  'Gum Treatment',
  'Wisdom Tooth Surgery',
  'Teeth Whitening',
  'Other / Not sure',
];

export default function ContactClient() {
  const root = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useTreatmentAnimations(root, {
    revealSelector: '.contact-reveal',
    scrollSelector: '.contact-scroll',
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main ref={root} className="bg-[#f7f7f2] text-[#17211d]">
      <section className="px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <nav className="contact-reveal mb-8 flex items-center gap-2 text-xs uppercase tracking-[.18em] text-[#7a837e]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#17211d]">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="contact-reveal mb-5 text-xs font-semibold uppercase tracking-[.28em] text-[#9a6b50]">Joy Dental · Indore</p>
              <h1 className="contact-reveal max-w-5xl text-[clamp(3.5rem,8vw,7.8rem)] font-medium leading-[.9] tracking-[-.055em]">
                Let&apos;s talk about <span className="text-[#8b5f45]">your smile.</span>
              </h1>
            </div>
            <div className="contact-reveal lg:pb-2">
              <p className="max-w-md text-lg leading-8 text-[#66736d] md:text-xl">
                Have a dental concern, want to understand your treatment options, or ready to book a visit? Reach out to our team.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#17211d] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">WhatsApp us ↗</a>
                <a href={tel} className="rounded-full border border-[#cfd5d0] px-6 py-3.5 text-sm font-semibold transition hover:bg-white">Call us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dde1dc] bg-[#f2f2ec] px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <QuickContact label="Call" value={phone} href={tel} />
          <QuickContact label="WhatsApp" value="Chat with Joy Dental" href={whatsapp} external />
          <QuickContact label="Location" value="Laxmipuri Colony, Indore" href={maps} external />
          <div className="border-t border-[#d9ded9] pt-4 sm:border-0 sm:pt-0">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#8b5f45]">Hours</p>
            <p className="mt-2 text-sm leading-6 text-[#4f5b55]">Please call or WhatsApp for today&apos;s appointment availability.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="contact-scroll lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]">Consultation request</p>
            <h2 className="max-w-lg text-4xl leading-[1.02] tracking-[-.04em] md:text-6xl">Tell us what you need help with.</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-[#66736d]">
              Share a few details and our team can understand your concern before your visit. You can also contact us directly by phone or WhatsApp.
            </p>
            <div className="mt-10 border-t border-[#d9ded9] pt-7">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#7a837e]">Prefer a direct conversation?</p>
              <div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                <a href={tel} className="hover:text-[#8b5f45]">{phone}</a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#8b5f45]">WhatsApp the clinic ↗</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-scroll rounded-[2rem] border border-[#d9ded9] bg-white p-6 shadow-[0_20px_60px_rgba(23,33,29,.05)] md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Your name" required />
              <Field label="Phone" name="phone" type="tel" placeholder="Your phone number" required />
              <Field label="Email" name="email" type="email" placeholder="name@email.com" />
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[.16em] text-[#66736d]">Treatment of interest</span>
                <select name="treatment" className="w-full rounded-2xl border border-[#d9ded9] bg-[#fafaf7] px-4 py-3.5 text-sm outline-none transition focus:border-[#8b5f45]">
                  <option value="">Choose a treatment</option>
                  {treatments.map((treatment) => <option key={treatment}>{treatment}</option>)}
                </select>
              </label>
              <Field label="Preferred date" name="date" type="date" />
              <Field label="Preferred time" name="time" type="time" />
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[.16em] text-[#66736d]">Your question or concern</span>
              <textarea name="message" rows={6} placeholder="Tell us briefly what is bothering you or what you would like to discuss..." className="w-full resize-none rounded-2xl border border-[#d9ded9] bg-[#fafaf7] px-4 py-3.5 text-sm outline-none transition focus:border-[#8b5f45]" />
            </label>

            <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-[#66736d]">
              <input required type="checkbox" className="mt-1 h-4 w-4 accent-[#17211d]" />
              <span>I agree that Joy Dental may use the information submitted here to contact me regarding my enquiry and appointment.</span>
            </label>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button type="submit" className="rounded-full bg-[#17211d] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">Send enquiry ↗</button>
              <span className="text-xs text-[#7a837e]">We&apos;ll use your details only to respond to your enquiry.</span>
            </div>

            {submitted && (
              <div className="mt-6 rounded-2xl border border-[#cfd5d0] bg-[#f2f2ec] p-4 text-sm leading-6 text-[#4f5b55]">
                Thank you. Your enquiry has been captured on this page. Connect the form to your preferred email/CRM endpoint before going live to send submissions to the clinic.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="border-t border-[#dde1dc] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="contact-scroll mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9a6b50]">Location</p>
            <h2 className="max-w-3xl text-4xl tracking-[-.04em] md:text-6xl">Find Joy Dental in Indore.</h2>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-[#d9ded9] bg-[#ebece5] lg:grid-cols-[1.15fr_.85fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-[radial-gradient(circle_at_30%_35%,rgba(154,107,80,.25),transparent_25%),linear-gradient(135deg,#e5e7df,#d5d9d1)]">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(23,33,29,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(23,33,29,.15) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
              <div className="absolute left-[18%] top-[31%] h-4 w-4 rounded-full bg-[#8b5f45] shadow-[0_0_0_10px_rgba(139,95,69,.18)]" />
              <div className="absolute left-[18%] top-[31%] ml-8 -mt-5 rounded-2xl bg-white px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#8b5f45]">Joy Dental</p>
                <p className="mt-1 text-xs text-[#66736d]">Laxmipuri Colony, Indore</p>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#8b5f45]">Our clinic</p>
              <h3 className="mt-4 text-3xl tracking-[-.03em]">Joy Dental Care</h3>
              <p className="mt-5 text-base leading-7 text-[#66736d]">{address}</p>
              <div className="mt-8 border-t border-[#d9ded9] pt-7">
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#7a837e]">Directions</p>
                <a href={maps} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-[#17211d] px-6 py-3.5 text-sm font-semibold text-white">Open in Google Maps ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#17211d] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16">
        <div className="contact-scroll mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.25em] text-[#d3a98f]">Caring for your smile</p>
            <h2 className="max-w-3xl text-4xl leading-[1] tracking-[-.045em] md:text-7xl">Not sure which treatment is right for you? Start with a conversation.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/treatments" className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#17211d]">Explore treatments ↗</Link>
            <a href={tel} className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white">Call {phone.replace('+91 ', '')}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function QuickContact({ label, value, href, external = false }: { label: string; value: string; href: string; external?: boolean }) {
  return (
    <div className="border-t border-[#d9ded9] pt-4 sm:border-0 sm:pt-0">
      <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#8b5f45]">{label}</p>
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="mt-2 block text-sm font-medium text-[#4f5b55] hover:text-[#17211d]">{value} <span className="ml-1">↗</span></a>
    </div>
  );
}

function Field({ label, name, placeholder, type = 'text', required = false }: { label: string; name: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[.16em] text-[#66736d]">{label}{required ? ' *' : ''}</span>
      <input required={required} name={name} type={type} placeholder={placeholder} className="w-full rounded-2xl border border-[#d9ded9] bg-[#fafaf7] px-4 py-3.5 text-sm outline-none transition focus:border-[#8b5f45]" />
    </label>
  );
}
