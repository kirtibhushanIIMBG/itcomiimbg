import { Section, Eyebrow, Glow } from '@/components/primitives'
import { chairperson, administration } from '@/lib/content'
import { useRevealReplay } from '@/lib/motion'

/** Leadership & IT Administration — Chairperson + the faculty who steer the committee. */
export function Leadership() {
  const ref = useRevealReplay<HTMLDivElement>({
    variant: 'blur',
    selector: '[data-reveal]',
    stagger: 0.07,
  })

  return (
    <Section id="leadership" align="start" className="bg-surface-100/58">
      <Glow className="right-[-8%] bottom-[10%] h-[420px] w-[420px]" color="var(--color-accent-cyan)" />
      <div ref={ref}>
        <div data-reveal>
          <Eyebrow n="04">Leadership & Administration</Eyebrow>
        </div>

        {/* Chairperson */}
        <div className="glass mb-10 grid grid-cols-1 gap-8 rounded-3xl p-7 md:grid-cols-[260px_1fr] md:p-9">
          <figure
            data-reveal
            className="group relative mx-auto aspect-3/4 w-full max-w-[240px] overflow-hidden rounded-2xl"
          >
            <img
              src={chairperson.photo}
              alt={chairperson.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-void/20 transition-opacity duration-500 group-hover:opacity-0" />
          </figure>
          <div data-reveal className="flex flex-col justify-center">
            <p className="eyebrow mb-3">{chairperson.role}</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
              {chairperson.name}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
              {chairperson.intro}
            </p>
          </div>
        </div>

        {/* IT Administration */}
        <div data-reveal className="mb-7">
          <h3 className="font-display text-3xl font-semibold text-text-primary md:text-5xl">
            IT <span className="text-gradient">Administration</span>
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
            The faculty and administration who guide the IT Committee’s direction across
            ERP, web portals, short-term programmes, and AI initiatives.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {administration.map((p) => (
            <figure key={p.name} data-reveal className="group glass overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
