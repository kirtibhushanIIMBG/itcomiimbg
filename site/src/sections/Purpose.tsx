import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/motion'
import { Section, Eyebrow, Glow } from '@/components/primitives'
import { purpose, brandAssets } from '@/lib/content'
import { ArrowRight } from 'lucide-react'

export function Purpose() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const words = el.querySelectorAll<HTMLElement>('[data-word]')
    if (prefersReducedMotion()) {
      words.forEach((w) => (w.style.opacity = '1'))
      gsap.set(el.querySelectorAll('[data-reveal]'), { opacity: 1, y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      // Intro words fade in on scrub (naturally responds to both scroll directions).
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-intro]',
            start: 'top 78%',
            end: 'bottom 62%',
            scrub: true,
          },
        },
      )
      // Logo + heading slide in from the left; replays up & down.
      gsap.fromTo(
        '[data-slide]',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: 'top 78%',
            end: 'bottom top',
            toggleActions: 'restart reset restart reset',
          },
        },
      )
      // Duties list replays on both scroll directions.
      gsap.fromTo(
        '[data-reveal]',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '[data-list]',
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'restart reset restart reset',
          },
        },
      )
    }, el)
    return () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }
  }, [])

  const intro = purpose.intro

  return (
    <Section id="purpose" grid className="bg-surface-100/58">
      <Glow className="right-[-10%] top-[10%] h-[400px] w-[400px]" color="var(--color-accent-primary)" />
      <div
        ref={root}
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(260px,0.9fr)_1.4fr] lg:gap-20"
      >
        {/* Left: IT Committee logo */}
        <div data-slide className="flex justify-center lg:justify-start">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-8 rounded-full bg-accent-cyan/15 blur-3xl"
            />
            <img
              src={brandAssets.logo}
              alt="IT Committee logo"
              className="relative w-52 drop-shadow-[0_0_40px_rgba(6,182,212,0.35)] md:w-64 lg:w-full lg:max-w-sm"
            />
          </div>
        </div>

        {/* Right: text content */}
        <div>
          <div data-slide>
            <Eyebrow n="02">What We Do</Eyebrow>
          </div>
          <h2
            data-slide
            className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl"
          >
            We run the technology that keeps the institute moving.
          </h2>

          <p
            data-intro
            className="mt-7 font-display text-lg leading-relaxed tracking-tight text-text-primary sm:text-xl md:text-2xl"
          >
            {intro.split(' ').map((w, i) => (
              <span key={i} data-word>
                {w}{' '}
              </span>
            ))}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            {purpose.body}
          </p>

          {/* Expanded duties */}
          <ul data-list className="mt-8 flex flex-col gap-3">
            {purpose.duties.map((d, i) => (
              <li
                key={i}
                data-reveal
                className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary md:text-base"
              >
                <ArrowRight
                  size={18}
                  className="mt-0.5 shrink-0 text-accent-cyan"
                  strokeWidth={2}
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
