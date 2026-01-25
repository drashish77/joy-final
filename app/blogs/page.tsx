'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { blogs } from '@/data/dummy-data'

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(blogs.map((blog) => blog.category)))
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs

  return (
    <main className='min-h-screen bg-background'>
      {/* Header */}
      <div className='relative pt-20 pb-16 bg-gradient-to-b from-primary/10 to-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6'
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
              Our Blogs
            </h1>
            <p className='text-lg text-muted-foreground max-w-2xl'>
              Explore insights, tips, and industry trends from our team of
              experts
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex flex-wrap gap-3 mb-12'>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'border border-border text-foreground hover:border-primary'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-foreground hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
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
                    <p className='text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow'>
                      {blog.excerpt}
                    </p>

                    <div className='flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border'>
                      <div className='flex items-center gap-1'>
                        <User size={14} />
                        {blog.author}
                      </div>
                      <div className='flex items-center gap-1'>
                        <Calendar size={14} />
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-muted-foreground text-lg'>
              No blogs found in this category
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
