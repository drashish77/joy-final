import { ArrowRightIcon } from 'lucide-react'
import { GhostButton } from './Buttons'
import { motion } from 'motion/react'
import { Mail, MapPin, Phone } from 'lucide-react'


export default function CTA() {
  return (
    <section className='py-20 2xl:pb-32 px-4' id='contacts'>
      <div className='container mx-auto max-w-3xl'>
        <div className='rounded-3xl bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-12 md:p-16 text-center relative overflow-hidden'>
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
          <div className='relative z-10'>
            <motion.h2
              className='text-2xl sm:text-4xl font-semibold mb-6'
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 1
              }}
            >
              Ready to improve your smile?
            </motion.h2>
            <motion.p
              className='max-sm:text-sm text-slate-400 mb-10 max-w-xl mx-auto'
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.2
              }}
            >
              Partner with our agency to design, build and scale digital
              products that deliver real business results.
            </motion.p>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.3
              }}
            >
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
                {/* Contact Info */}
                {[
                  // {
                  //   icon: Mail,
                  //   title: 'Email',
                  //   content: 'hello@digitalhub.com',
                  //   href: 'mailto:hello@digitalhub.com'
                  // },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+91 8085 733 733',
                    href: 'tel:+918085733733'
                  },
                  {
                    icon: MapPin,
                    title: 'Address',
                    content:
                      'Near Police high rise tiraha, Laxmipuri Colony, Indore',
                    href: 'https://share.google/rbmoJE0otOaivxXHS'
                  }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      className='text-left'
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
              <GhostButton className='px-8 py-3'>
                <a href='tel:+918085733733' className='flex gap-2'>
                  Contact Us <ArrowRightIcon size={20} />
                </a>
              </GhostButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
