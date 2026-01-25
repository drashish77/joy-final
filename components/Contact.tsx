'use client'

import { motion } from 'motion/react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id='contact' className='py-20 bg-card/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
            Get In Touch
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            We'd love to hear from you. Reach out to discuss your project or ask
            any questions.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          {/* Contact Info */}
          {[
            {
              icon: Mail,
              title: 'Email',
              content: 'hello@digitalhub.com',
              href: 'mailto:hello@digitalhub.com'
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+1 (555) 123-4567',
              href: 'tel:+15551234567'
            },
            {
              icon: MapPin,
              title: 'Address',
              content: '123 Tech Street, San Francisco, CA 94105',
              href: '#'
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a href={item.href} className='group'>
                  <div className='bg-background border border-border rounded-xl p-6 h-full hover:border-primary transition-colors hover:shadow-lg'>
                    <Icon className='text-primary mb-4 w-8 h-8' />
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-muted-foreground group-hover:text-primary transition-colors'>
                      {item.content}
                    </p>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='max-w-2xl mx-auto'
        >
          <form className='bg-background border border-border rounded-xl p-8 space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-foreground mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-foreground mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground'
                  placeholder='your@email.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-foreground mb-2'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                className='w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground'
                placeholder='Project discussion'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-foreground mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                rows={5}
                className='w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none'
                placeholder='Tell us about your project...'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors'
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
