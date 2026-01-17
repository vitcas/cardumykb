import { getDocBySlug } from '@/lib/markdown'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function DocPage({ params }: Props) {
  try {
    const { slug } = await params
    const doc = await getDocBySlug(slug)

    return (
      <article dangerouslySetInnerHTML={{ __html: doc.html }} />
    )
  } catch {
    notFound()
  }
}
