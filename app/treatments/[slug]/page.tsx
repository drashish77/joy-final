import { notFound } from 'next/navigation';
import { allTreatments, getTreatment, treatmentCategories } from '@/data/treatments';
import TreatmentDetailClient from '@/components/TreatmentDetailClient';

export function generateStaticParams() {
  return allTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.title} in Indore | Joy Dental`,
    description: `${treatment.short} Learn about ${treatment.title}, treatment planning, benefits and FAQs at Joy Dental in Indore.`,
    alternates: { canonical: `/treatments/${treatment.slug}` },
  };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const category = treatmentCategories.find((c) => c.treatments.some((t) => t.slug === slug));
  if (!category) notFound();

  const related = category.treatments.filter((t) => t.slug !== slug).slice(0, 3);

  return <TreatmentDetailClient treatment={treatment} category={category} related={related} />;
}
