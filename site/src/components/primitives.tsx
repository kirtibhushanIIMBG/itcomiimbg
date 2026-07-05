import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Full-viewport-height section shell with consistent padding + optional grid. */
export function Section({
  id,
  children,
  className,
  grid = false,
  align = 'center',
}: {
  id: string
  children: ReactNode
  className?: string
  grid?: boolean
  /** Vertical alignment of content. Use 'start' for tall content that would otherwise clip. */
  align?: 'center' | 'start'
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative flex min-h-screen w-full flex-col overflow-hidden px-6 py-24 md:px-12 lg:px-20',
        align === 'center' ? 'justify-center' : 'justify-start',
        grid && 'bg-grid',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, n }: { children: ReactNode; n?: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      {n && (
        <span className="font-display text-sm font-medium text-white/30">
          {n}
        </span>
      )}
      <span className="eyebrow">{children}</span>
      <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-accent-cyan/50 to-transparent" />
    </div>
  )
}

/** Ambient radial glow blob for cinematic lighting. */
export function Glow({
  className,
  color = 'var(--color-accent-primary)',
}: {
  className?: string
  color?: string
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute rounded-full blur-[120px]', className)}
      style={{ background: color, opacity: 0.18 }}
    />
  )
}
