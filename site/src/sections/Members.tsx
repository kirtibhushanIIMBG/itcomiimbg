import { Section, Eyebrow, Glow } from '@/components/primitives'
import { committeeMembers } from '@/lib/content'
import { useRevealReplay } from '@/lib/motion'

export function Members() {
  // Cards scale-in with a soft stagger; replays on up & down scroll.
  const ref = useRevealReplay<HTMLDivElement>({
    variant: 'scale',
    selector: '[data-card]',
    stagger: 0.04,
    duration: 0.6,
  })

  return (
    <Section id="members" grid className="bg-surface-100/58 !py-16 md:!py-20">
      <Glow className="right-[-6%] top-[20%] h-[380px] w-[380px]" color="var(--color-accent-purple)" />
      <Eyebrow n="05">The Committee</Eyebrow>
      <div className="mb-6 flex flex-col justify-between gap-2 md:mb-8 md:flex-row md:items-end">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
          Seventeen students. <span className="text-gradient">One committee.</span>
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-text-secondary md:text-right">
          The people behind every platform, poster, and production across campus.
        </p>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:gap-3 lg:grid-cols-6"
      >
        {committeeMembers.map((m) => (
          <figure
            key={m.name}
            data-card
            className="relative aspect-4/5 overflow-hidden rounded-lg border border-white/10"
          >
            <img
              src={m.photo}
              alt={m.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {/* Name always readable — gradient scrim, no hover interaction */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-2">
              <p className="font-display text-xs font-medium leading-tight text-text-primary">
                {m.name}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
