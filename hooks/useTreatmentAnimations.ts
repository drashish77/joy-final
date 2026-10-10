'use client';

import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Options = {
  revealSelector?: string;
  scrollSelector?: string;
  parallax?: {
    target: string;
    trigger: string;
  };
};

/**
 * Shared reveal animation for treatment/home pages.
 *
 * Important: each element receives exactly ONE tween. Previously an element
 * could be animated once immediately and again by ScrollTrigger, causing the
 * two tweens to fight over opacity/transform and occasionally leave content
 * invisible.
 */
export function useTreatmentAnimations(
  root: RefObject<HTMLElement | null>,
  options: Options = {},
) {
  const revealSelector = options.revealSelector ?? '.td-reveal';
  const scrollSelector = options.scrollSelector ?? revealSelector;
  const parallaxTarget = options.parallax?.target;
  const parallaxTrigger = options.parallax?.trigger;

  useLayoutEffect(() => {
    const container = root.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(scrollSelector);

      // De-duplicate selectors so an element can never receive competing
      // reveal tweens when revealSelector and scrollSelector overlap.
      const uniqueElements = Array.from(new Set(elements));
      const viewportHeight = window.innerHeight;

      uniqueElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInitiallyVisible = rect.top < viewportHeight * 0.92;

        // Keep the content visible by default. GSAP only animates from this
        // state; if JS/ScrollTrigger has a problem, the page still works.
        gsap.set(element, { autoAlpha: 1, y: 0 });

        if (isInitiallyVisible) {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: 'power3.out',
              clearProps: 'transform,opacity,visibility',
            },
          );
        } else {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              clearProps: 'transform,opacity,visibility',
              scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                once: true,
              },
            },
          );
        }
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

      // Images/fonts can change layout after the first measurement.
      // Refreshing after the browser has painted gives ScrollTrigger the
      // correct positions without making content depend on the refresh.
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, container);

    return () => ctx.revert();
  }, [root, revealSelector, scrollSelector, parallaxTarget, parallaxTrigger]);
}
