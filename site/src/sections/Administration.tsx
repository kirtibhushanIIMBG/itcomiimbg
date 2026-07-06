import { Section, Eyebrow, Glow } from '@/components/primitives'
import { administration } from '@/lib/content'
import { useRevealReplay } from '@/lib/motion'

export function Administration() {
  const ref = useRevealReplay<HTMLDivElement>({
    variant: 'fade-up',
    selector: '[data-reveal]',
    stagger: 0.1,
  })

  return (
    <Section id="administration" className="bg-void/60">
      <Glow className="left-[-8%] top-[15%] h-[420px] w-[420px]" color="var(--color-accent-primary)" />
      <div ref={ref}>
        <div data-reveal>
          <Eyebrow n="05">IT Administration</Eyebrow>
        </div>
        <h2
          data-reveal
          className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl md:text-5xl"
        >
          The <span className="text-gradient">administration</span> steering the committee.
        </h2>
        <p data-reveal className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          The faculty and administration who guide the IT Committee’s direction across
          ERP, web portals, short-term programmes, and AI initiatives.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {administration.map((p) => (
            <figure key={p.name} data-reveal className="group glass overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-void/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <figcaption className="p-4">
                <p className="font-display text-base font-medium leading-tight text-text-primary">
                  {p.name}
                </p>
                <p className="mt-1 text-xs leading-snug text-accent-cyan">{p.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  )
}
