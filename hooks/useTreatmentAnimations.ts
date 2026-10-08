'use client';

import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Options = {
  revealSelector: string;
  scrollSelector: string;
  parallax?: {
    target: string;
    trigger: string;
  };
};

export function useTreatmentAnimations(root: RefObject<HTMLElement | null>, options: Options) {
  const parallaxTarget = options.parallax?.target;
  const parallaxTrigger = options.parallax?.trigger;

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.from(options.revealSelector, {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>(options.scrollSelector).forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
            once: true,
          },
        });
      });

      if (parallaxTarget && parallaxTrigger) {
        gsap.to(parallaxTarget, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: parallaxTrigger,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, [root, options.revealSelector, options.scrollSelector, parallaxTarget, parallaxTrigger]);
}
