import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/motion'
import { Section, Eyebrow, Glow } from '@/components/primitives'
import { recruitment, type RoleIconId } from '@/lib/content'
import { Code2, Cpu, PenLine, CalendarDays, Palette, Clapperboard } from 'lucide-react'

const icons: Record<RoleIconId, typeof Code2> = {
  developers: Code2,
  tech: Cpu,
  content: PenLine,
  events: CalendarDays,
  design: Palette,
  video: Clapperboard,
}

export function Recruitment() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll('[data-anim],[data-card]'), {
        opacity: 1,
        y: 0,
        rotationX: 0,
      })
      return
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-anim]',
        { opacity: 0, y: 28 },
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
      // Role cards flip in on the X axis; replays both directions.
      gsap.fromTo(
        '[data-card]',
        { opacity: 0, rotationX: -45, y: 30, transformPerspective: 600 },
        {
          opacity: 1,
          rotationX: 0,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.09,
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
    <Section id="recruitment" align="start" grid className="bg-void/60">
      <Glow className="left-1/2 top-[-5%] h-[500px] w-[500px] -translate-x-1/2" color="var(--color-accent-purple)" />
      <div ref={root} className="text-center">
        <div data-anim className="flex justify-center">
          <Eyebrow n="07">Who We Look For</Eyebrow>
        </div>
        <h2
          data-anim
          className="mx-auto max-w-3xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl"
        >
          {recruitment.headline}
        </h2>
        <p
          data-anim
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          {recruitment.sub}
        </p>
      </div>

      <div
        data-grid
        className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {recruitment.roles.map((r) => {
          const Icon = icons[r.iconId]
          return (
            <div
              key={r.title}
              data-card
              className="glass group flex flex-col rounded-2xl p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-cyan/12 text-accent-cyan transition-colors duration-500 group-hover:bg-accent-cyan/20">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h3 className="mb-2 font-display text-xl font-medium text-text-primary">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">{r.body}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
