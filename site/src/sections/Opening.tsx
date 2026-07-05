import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/motion'
import { brandAssets } from '@/lib/content'

export function Opening() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll('[data-anim]'), { opacity: 1, filter: 'blur(0px)', y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      // Entrance timeline — replays every time the section scrolls back into view.
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: el,
          // Fire while the opening is the dominant section on screen.
          start: 'top center',
          end: 'bottom top',
          // onEnter, onLeave, onEnterBack, onLeaveBack
          // Play on first enter; reset (hide) when scrolled past; replay when scrolled back up.
          toggleActions: 'restart reset restart reset',
        },
      })
      // fromTo tweens (explicit start + end) so a `restart` reliably resets and replays.
      tl.fromTo(
        '[data-anim="logo"]',
        { opacity: 0, scale: 0.94, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 2, ease: 'power1.out' },
      )
        .fromTo(
          '[data-anim="line"]',
          { opacity: 0, y: 34, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.18 },
          '-=1.3',
        )
        .fromTo(
          '[data-anim="rule"]',
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: 'power2.inOut' },
          '-=0.7',
        )

      // Continuous gentle float on the logo so it always feels alive.
      // Applied to an inner wrapper so it never fights the entrance tween's transform.
      gsap.to('[data-float]', {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      // Continuous soft breathing glow behind the logo.
      gsap.to('[data-glow]', {
        scale: 1.08,
        opacity: 0.85,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="opening"
      ref={root}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Campus background */}
      <div className="absolute inset-0 z-0">
        <img
          src={brandAssets.campusBg}
          alt="IIM Bodh Gaya campus"
          className="h-full w-full object-cover"
        />
        {/* Cinematic darkening — kept light enough to read the campus */}
        <div className="absolute inset-0 bg-void/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-transparent to-void" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* IIM Bodh Gaya logo — soft light halo so the deep-blue mark reads on the dark statue */}
        <div data-anim="logo" className="relative mb-10">
          <div data-float className="relative flex items-center justify-center p-8">
            {/* Soft radial light that dissolves to transparent — no hard rim */}
            <div
              aria-hidden
              data-glow
              className="absolute inset-0 -m-6 origin-center"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 34%, rgba(255,255,255,0.35) 58%, rgba(255,255,255,0) 74%)',
                filter: 'blur(6px)',
              }}
            />
            <img
              src={brandAssets.iimLogo}
              alt="Indian Institute of Management Bodh Gaya"
              className="relative w-36 md:w-44 lg:w-48"
            />
          </div>
        </div>

        <h1
          data-anim="line"
          className="text-shimmer max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-[0.06em] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Indian Institute of<br />Management
        </h1>

        <p
          data-anim="line"
          className="text-shimmer mt-6 font-display text-lg font-medium uppercase tracking-[0.4em] md:text-2xl"
        >
          Bodh Gaya
        </p>

        <span
          data-anim="rule"
          className="mt-8 block h-px w-64 origin-center bg-gradient-to-r from-transparent via-accent-cyan to-transparent md:w-96 lg:w-[32rem]"
        />

        <p
          data-anim="line"
          className="text-shimmer mt-8 font-display text-2xl font-semibold uppercase tracking-[0.45em] md:text-4xl lg:text-5xl"
        >
          IT Committee
        </p>
      </div>
    </section>
  )
}
