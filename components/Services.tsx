'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'motion/react'
import { items } from '@/data/dummy-data'
import Title from './Title'

export default function FramerMultiSlideCarousel({
  breakpoints = {
    0: { slidesToShow: 1 },
    768: { slidesToShow: 2 },
    1024: { slidesToShow: 3 }
  }
}) {
  const [index, setIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)

  // Handle responsive breakpoints
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth
      const sortedBreakpoints = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => b - a)

      for (const bp of sortedBreakpoints) {
        if (width >= bp) {
          // @ts-ignore
          setSlidesToShow(breakpoints[bp].slidesToShow)
          break
        }
      }
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [breakpoints])

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1
      const slideWidth = containerWidth / slidesToShow
      const targetX = -index * slideWidth

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30
      })
    }
  }, [index, slidesToShow])

  // Reset index if it exceeds max when resizing
  useEffect(() => {
    const maxIndex = Math.max(0, items.length - slidesToShow)
    if (index > maxIndex) {
      setIndex(maxIndex)
    }
  }, [slidesToShow, index])

  const maxIndex = Math.max(0, items.length - slidesToShow)

  return (
    <div className='w-full lg:p-10 sm:p-4 p-2'>
      {/* <h2 className='text-2xl text-center pb-14 '>
        Gallery (Showing {slidesToShow})
      </h2> */}
      <Title
        title='Services'
        heading='Experience the Joy of a Healthy Smile'
        description='From routine check-ups to advanced orthodontics and implants, we provide personalized dental solutions for every smile'
      />
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
          <motion.div className='flex gap-4' style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className='shrink-0 h-[300px] rounded-lg overflow-hidden relative'
                style={{
                  width: `calc((100% - ${
                    (slidesToShow - 1) * 16
                  }px) / ${slidesToShow})`
                }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className='w-full h-full object-cover select-none pointer-events-none'
                  draggable={false}
                />
                <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-3'>
                  <p className='text-white text-sm font-medium'>{item.title}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed bg-gray-300'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          <motion.button
            disabled={index === maxIndex}
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === maxIndex
                  ? 'opacity-40 cursor-not-allowed bg-gray-300'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
