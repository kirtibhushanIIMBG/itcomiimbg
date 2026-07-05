import { useEffect, useState } from 'react'
import { sections } from '@/lib/content'
import { cn } from '@/lib/utils'

/** Fixed right-edge dot navigation that tracks the active section. */
export function SideNav() {
  const [active, setActive] = useState('opening')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:flex">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center justify-end gap-3"
          aria-label={s.label}
        >
          <span
            className={cn(
              'font-body text-[11px] uppercase tracking-widest opacity-0 transition-all duration-300 group-hover:opacity-100',
              active === s.id ? 'text-accent-cyan opacity-100' : 'text-text-secondary',
            )}
          >
            {s.label}
          </span>
          <span
            className={cn(
              'h-2 w-2 rounded-full border transition-all duration-300',
              active === s.id
                ? 'scale-125 border-accent-cyan bg-accent-cyan shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                : 'border-white/30 bg-transparent group-hover:border-accent-cyan',
            )}
          />
        </a>
      ))}
    </nav>
  )
}
