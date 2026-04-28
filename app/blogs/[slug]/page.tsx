'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react'
import blogs from '../../../lib/data/blogsContent.json'

import { useParams } from 'next/navigation'

type ContentBlock = {
  type:
    | 'paragraph'
    | 'heading'
    | 'list'
    | 'bulletList'
    | 'numberedList'
    | 'quote'
    | 'image'
  level?: number
  text?: string
  items?: Array<{ title?: string; text: string }> | string[]
  author?: string
  src?: string
  alt?: string
}

// Component to render rich content blocks
function ContentRenderer({ content }: { content: ContentBlock[] }) {
  return (
    <div className='space-y-6'>
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p
                key={index}
                className='text-muted-foreground leading-relaxed text-lg'
              >
                {block.text}
              </p>
            )

          case 'heading':
            const headingClasses = {
              2: 'text-4xl sm:text-5xl font-bold',
              3: 'text-3xl sm:text-4xl font-bold',
              4: 'text-2xl sm:text-3xl font-bold'
            }
            return (
              <h2
                key={index}
                className={`${
                  headingClasses[block.level as keyof typeof headingClasses] ||
                  headingClasses[2]
                } text-foreground mt-10 mb-6`}
              >
                {block.text}
              </h2>
            )

          case 'bulletList':
            return (
              <ul key={index} className='space-y-3 pl-6'>
                {(block.items as string[]).map((item, i) => (
                  <li
                    key={i}
                    className='text-muted-foreground text-lg leading-relaxed list-disc'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )

          case 'list':
            return (
              <div key={index} className='space-y-4'>
                {(block.items as Array<{ title?: string; text: string }>).map(
                  (item, i) => (
                    <div key={i}>
                      {item.title && (
                        <h3 className='font-bold text-foreground text-lg mb-2'>
                          {item.title}
                        </h3>
                      )}
                      <p className='text-muted-foreground leading-relaxed text-lg'>
                        {item.text}
                      </p>
                    </div>
                  )
                )}
              </div>
            )

          case 'numberedList':
            return (
              <ol key={index} className='space-y-4 pl-6'>
                {(block.items as Array<{ title?: string; text: string }>).map(
                  (item, i) => (
                    <li key={i} className='list-decimal text-muted-foreground'>
                      <div>
                        {item.title && (
                          <span className='font-bold text-foreground text-lg'>
                            {item.title}
                          </span>
                        )}
                        {item.title && (
                          <span className='text-muted-foreground text-lg'>
                            {' '}
                            —{' '}
                          </span>
                        )}
                        <span className='text-muted-foreground leading-relaxed text-lg'>
                          {item.text}
                        </span>
                      </div>
                    </li>
                  )
                )}
              </ol>
            )

          case 'quote':
            return (
              <blockquote
                key={index}
                className='border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-lg'
              >
                <p className='text-lg italic text-foreground mb-3'>
                  "{block.text}"
                </p>
                {block.author && (
                  <p className='text-muted-foreground text-sm font-semibold'>
                    — {block.author}
                  </p>
                )}
              </blockquote>
            )

          case 'image':
            return (
              <div key={index} className='my-8 rounded-xl overflow-hidden'>
                <img
                  src={block.src || '/placeholder.svg'}
                  alt={block.alt || 'Blog image'}
                  className='w-full h-auto'
                />
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const blog = blogs.find((b) => b.slug === slug)
  const currentIndex = blog ? blogs.findIndex((b) => b.id === blog.id) : -1
  const previousBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null
  const nextBlog =
    currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null

  if (!blog) {
    return (
      <main className='min-h-screen bg-background flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-foreground mb-4'>
            Blog Not Found
          </h1>
          <p className='text-muted-foreground mb-6'>
            The blog you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href='/blogs'
            className='inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold'
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className='min-h-screen bg-background'>
      {/* Header with Home Button */}
      <div className='sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors'
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Blog Content */}
      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Image */}
          <div className='mb-10 rounded-xl overflow-hidden h-96 bg-muted'>
            <img
              src={blog.image || '/placeholder.svg'}
              alt={blog.title}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Metadata */}
          <div className='flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-border'>
            <span className='inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full'>
              {blog.category}
            </span>
            <div className='flex items-center gap-1 text-sm text-muted-foreground'>
              <User size={16} />
              {blog.author}
            </div>
            <div className='flex items-center gap-1 text-sm text-muted-foreground'>
              <Calendar size={16} />
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          {/* Title */}
          <h1 className='text-5xl sm:text-6xl font-bold text-foreground mb-8 leading-tight'>
            {blog.title}
          </h1>

          {/* Rich Content */}
          <div className='prose prose-invert max-w-none mb-12'>
            {Array.isArray(blog.content) ? (
              <ContentRenderer content={blog.content as ContentBlock[]} />
            ) : (
              <p className='text-muted-foreground leading-relaxed text-lg'>
                {blog.content}
              </p>
            )}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-border'
        >
          {previousBlog ? (
            <Link href={`/blogs/${previousBlog.slug}`}>
              <div className='group p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors hover:shadow-lg'>
                <div className='flex items-center gap-2 text-primary text-sm font-semibold mb-2'>
                  <ArrowLeft size={16} />
                  Previous
                </div>
                <h3 className='font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2'>
                  {previousBlog.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextBlog ? (
            <Link href={`/blogs/${nextBlog.slug}`}>
              <div className='group p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors hover:shadow-lg text-right md:text-left'>
                <div className='flex items-center justify-end md:justify-start gap-2 text-primary text-sm font-semibold mb-2'>
                  Next
                  <ArrowRight size={16} />
                </div>
                <h3 className='font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2'>
                  {nextBlog.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-16'
        >
          <h2 className='text-4xl font-bold text-foreground mb-8'>
            More Blogs
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {blogs
              .filter((b) => b.category === blog.category && b.id !== blog.id)
              .slice(0, 3)
              .map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.slug}`}>
                  <div className='group h-full bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors hover:shadow-lg'>
                    <div className='h-40 overflow-hidden bg-muted'>
                      <img
                        src={relatedBlog.image || '/placeholder.svg'}
                        alt={relatedBlog.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                      />
                    </div>
                    <div className='p-4'>
                      <h3 className='font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2'>
                        {relatedBlog.title}
                      </h3>
                      <p className='text-sm text-muted-foreground line-clamp-2'>
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </article>
    </main>
  )
}
