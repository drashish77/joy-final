import { notFound } from 'next/navigation'
import { treatmentCategories } from '@/data/treatments'
import TreatmentCategoryClient from '@/components/TreatmentCategoryClient'

export function generateStaticParams() {
  return treatmentCategories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = treatmentCategories.find((c) => c.slug === slug)
  if (!category) return {}

  return {
    title: `${category.title} in Indore | Joy Dental`,
    description: `${category.description} Explore treatments available at Joy Dental in Indore.`,
    alternates: { canonical: `/treatments/category/${category.slug}` }
  }
}

export default async function TreatmentCategoryPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = treatmentCategories.find((c) => c.slug === slug)
  if (!category) notFound()

  return <TreatmentCategoryClient category={category} />
}
