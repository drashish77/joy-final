'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { blogs } from '@/data/dummy-data'

export default function Blogs() {
  const displayedBlogs = blogs.slice(0, 6)

  return (
    <section id='blogs' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
            Latest Blogs
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Insights, tips, and industry trends to keep you informed
          </p>
          <Link
            href='/blogs'
            className='inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 font-semibold transition-colors'
          >
            View All Blogs <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {displayedBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className='h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors hover:shadow-lg flex flex-col'>
                  {/* Image */}
                  <div className='h-48 overflow-hidden bg-muted'>
                    <img
                      src={blog.image || '/placeholder.svg'}
                      alt={blog.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                  </div>

                  {/* Content */}
                  <div className='p-6 flex-1 flex flex-col'>
                    <div className='flex items-center gap-3 mb-3'>
                      <span className='inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full'>
                        {blog.category}
                      </span>
                    </div>

                    <h3 className='text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors'>
                      {blog.title}
                    </h3>
                    <p className='text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow'>
                      {blog.excerpt}
                    </p>

                    <div className='flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border'>
                      <div className='flex items-center gap-1'>
                        <User size={14} />
                        {blog.author}
                      </div>
                      <div className='flex items-center gap-1'>
                        <Calendar size={14} />
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className='flex justify-end'>
          <Link
            href='/blogs'
            className='inline-flex items-center gap-2 mt-8 text-primary hover:text-primary/80 font-semibold transition-colors'
          >
            View All Blogs <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
