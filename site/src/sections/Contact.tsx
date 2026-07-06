import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Magnetic } from '@/components/Magnetic'
import { pocs, contact, brand, brandAssets, socials } from '@/lib/content'

// Served from /public so the dotLottie files are always copied to the build verbatim.
const instagramLottie = '/instagram.lottie'
const linkedinLottie = '/linkedin.lottie'
import { useRevealReplay } from '@/lib/motion'
import { ArrowUpRight, Phone, Sparkles } from 'lucide-react'

export function Contact() {
  const ref = useRevealReplay<HTMLDivElement>({
    variant: 'fade-down',
    selector: '[data-reveal]',
    stagger: 0.1,
  })

  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Thank You background */}
      <div className="absolute inset-0 z-0">
        <img
          src={brandAssets.thankyouBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-void/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/30 to-void/70" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <p data-reveal className="eyebrow mb-6 justify-center">
          {brand.institute} · IT Committee
        </p>
        <h2
          data-reveal
          className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tighter text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Thank <span className="text-gradient">You.</span>
        </h2>
        <p
          data-reveal
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
        >
          Questions? We’d love to hear from you. Reach out to any of our points of contact
          or drop us a line.
        </p>

        {/* Email CTA */}
        <div data-reveal className="mt-10 flex justify-center">
          <Magnetic>
            <a
              href={`mailto:${contact.email}`}
              className="glass group inline-flex items-center gap-3 rounded-full px-7 py-4 font-display text-base font-medium text-text-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
            >
              {contact.email}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-cyan"
              />
            </a>
          </Magnetic>
        </div>

        {/* Follow Us */}
        <div
          data-reveal
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap"
        >
          {/* Follow Us icon + label */}
          <div className="flex items-center gap-2 text-text-primary">
            <Sparkles
              size={22}
              className="animate-[spin_5s_linear_infinite] text-accent-cyan md:h-6 md:w-6"
            />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] md:text-base">
              Follow Us
            </span>
          </div>

          {/* Instagram */}
          <Magnetic>
            <a
              href={socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group inline-flex items-center gap-3 rounded-full px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)] md:gap-4 md:px-7 md:py-4"
            >
              <DotLottieReact
                src={instagramLottie}
                loop
                autoplay
                className="h-9 w-9 shrink-0 md:h-11 md:w-11 lg:h-12 lg:w-12"
              />
              <span className="font-display text-sm font-medium text-text-primary md:text-base lg:text-lg">
                {socials.instagram.handle}
              </span>
            </a>
          </Magnetic>

          {/* LinkedIn */}
          <Magnetic>
            <a
              href={socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group inline-flex items-center gap-3 rounded-full px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] md:gap-4 md:px-7 md:py-4"
            >
              <DotLottieReact
                src={linkedinLottie}
                loop
                autoplay
                className="h-9 w-9 shrink-0 md:h-11 md:w-11 lg:h-12 lg:w-12"
              />
              <span className="font-display text-sm font-medium text-text-primary md:text-base lg:text-lg">
                {socials.linkedin.handle}
              </span>
            </a>
          </Magnetic>
        </div>

        {/* POCs */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {pocs.map((p) => (
            <div key={p.name} data-reveal className="glass rounded-2xl p-6 text-left">
              <p className="text-[11px] uppercase tracking-widest text-accent-cyan">
                {p.role}
              </p>
              <p className="mt-2 font-display text-lg font-medium text-text-primary">
                {p.name}
              </p>
              <a
                href={`tel:${p.phone?.replace(/\s/g, '')}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-cyan"
              >
                <Phone size={13} /> {p.phone}
              </a>
            </div>
          ))}
        </div>

        <p data-reveal className="mt-16 text-xs text-text-secondary/60">
          © {new Date().getFullYear()} IT Committee · IIM Bodh Gaya
        </p>
      </div>
    </section>
  )
}
