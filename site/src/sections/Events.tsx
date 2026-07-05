import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/motion'
import { Section, Eyebrow, Glow } from '@/components/primitives'
import { events } from '@/lib/content'

export function Events() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll('[data-anim],[data-event]'), { opacity: 1, y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      // Header rises up; replays on up & down scroll.
      gsap.fromTo(
        '[data-anim]',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
      // Event cards rise up in a stagger; replays both directions.
      gsap.fromTo(
        '[data-event]',
        { opacity: 0, y: 46 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '[data-grid]',
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'restart reset restart reset',
          },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <Section id="events" align="start" className="bg-void/60">
      <Glow className="left-[-10%] top-[8%] h-[420px] w-[420px]" color="var(--color-accent-primary)" />
      <div ref={root}>
        <div data-anim>
          <Eyebrow n="06">On the Ground</Eyebrow>
        </div>
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2
            data-anim
            className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl"
          >
            Events we’ve <span className="text-gradient">built and run.</span>
          </h2>
          <p data-anim className="max-w-sm text-sm leading-relaxed text-text-secondary md:text-right">
            From case competitions to industry MoUs — turning ideas into moments.
          </p>
        </div>

        {/* Uniform grid — every card is the same size */}
        <div data-grid className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {events.map((ev, i) => (
            <article
              key={ev.title}
              data-event
              className="glass group flex h-full flex-col overflow-hidden rounded-2xl"
            >
              <figure className="relative aspect-video overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-void/20 transition-opacity duration-500 group-hover:opacity-0" />
              </figure>
              <div className="flex flex-1 flex-col gap-2 p-6 md:p-7">
                <span className="font-display text-sm text-accent-cyan">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-medium text-text-primary md:text-2xl">
                  {ev.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{ev.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
