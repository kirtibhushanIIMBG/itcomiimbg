import { Section, Eyebrow, Glow } from '@/components/primitives'
import { support } from '@/lib/content'
import { useRevealReplay } from '@/lib/motion'
import { Check } from 'lucide-react'

export function Support() {
  const ref = useRevealReplay<HTMLDivElement>({
    variant: 'fade-right',
    selector: '[data-reveal]',
    stagger: 0.1,
  })

  return (
    <Section id="support" className="bg-void/60">
      <Glow className="left-[-8%] bottom-[5%] h-[420px] w-[420px]" color="var(--color-accent-cyan)" />
      <div
        ref={ref}
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        {/* Left: content, vertically centered */}
        <div className="flex flex-col justify-center">
          <div data-reveal>
            <Eyebrow n="03">Support & Infrastructure</Eyebrow>
          </div>
          <h2
            data-reveal
            className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl"
          >
            The hands behind the scenes — <span className="text-gradient">we keep the campus running.</span>
          </h2>
          <p data-reveal className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            {support.intro}
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {support.duties.map((d, i) => (
              <li key={i} data-reveal className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-cyan/15 text-accent-cyan">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-relaxed text-text-secondary md:text-base">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: equal-size image cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {support.images.map((img, i) => (
            <figure
              key={i}
              data-reveal
              className="group relative aspect-video overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-void/20 transition-opacity duration-500 group-hover:opacity-0" />
            </figure>
          ))}
        </div>
      </div>
    </Section>
  )
}
