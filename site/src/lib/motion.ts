import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Global Lenis smooth scroll, synced to GSAP ScrollTrigger.
 * Disabled entirely when the user prefers reduced motion.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Anchor links → Lenis scroll
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute('href')!.slice(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: 0 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])
}

/**
 * Reveal children on scroll: fade + rise, physics-friendly.
 * Only animates transform/opacity. Respects reduced motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  y?: number
  stagger?: number
  selector?: string
  start?: string
}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      const targets = options?.selector
        ? el.querySelectorAll<HTMLElement>(options.selector)
        : [el]
      targets.forEach((t) => {
        t.style.opacity = '1'
        t.style.transform = 'none'
      })
      return
    }

    const ctx = gsap.context(() => {
      const targets = options?.selector ? options.selector : el
      gsap.from(targets, {
        opacity: 0,
        y: options?.y ?? 40,
        duration: 0.9,
        ease: 'power3.out',
        stagger: options?.stagger ?? 0,
        scrollTrigger: {
          trigger: el,
          start: options?.start ?? 'top 80%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [options?.y, options?.stagger, options?.selector, options?.start])

  return ref
}

/**
 * Reveal variants — the "from" state each animates out of.
 * All animate only transform / opacity / filter (blur), per the perf constraints.
 */
export type RevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'blur'
  | 'rotate'

const VARIANTS: Record<RevealVariant, gsap.TweenVars> = {
  'fade-up': { opacity: 0, y: 44 },
  'fade-down': { opacity: 0, y: -44 },
  'fade-left': { opacity: 0, x: -60 },
  'fade-right': { opacity: 0, x: 60 },
  scale: { opacity: 0, scale: 0.85 },
  blur: { opacity: 0, filter: 'blur(14px)', y: 20 },
  rotate: { opacity: 0, rotationX: -40, y: 30, transformPerspective: 600 },
}

const RESET: gsap.TweenVars = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotationX: 0,
  filter: 'blur(0px)',
}

/**
 * Scroll reveal that **replays every time** the element enters the viewport —
 * whether scrolling down or back up. Each call can use a different `variant`,
 * so different pages animate their text in distinct ways.
 */
export function useRevealReplay<T extends HTMLElement = HTMLDivElement>(options?: {
  variant?: RevealVariant
  selector?: string
  stagger?: number
  duration?: number
  start?: string
  ease?: string
}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = options?.selector
      ? el.querySelectorAll<HTMLElement>(options.selector)
      : [el]
    if (!targets.length) return

    if (prefersReducedMotion()) {
      gsap.set(targets, RESET)
      return
    }

    const from = VARIANTS[options?.variant ?? 'fade-up']

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { ...from },
        {
          ...RESET,
          duration: options?.duration ?? 0.9,
          ease: options?.ease ?? 'power3.out',
          stagger: options?.stagger ?? 0.08,
          scrollTrigger: {
            trigger: el,
            start: options?.start ?? 'top 82%',
            end: 'bottom top',
            // onEnter, onLeave, onEnterBack, onLeaveBack
            toggleActions: 'restart reset restart reset',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [
    options?.variant,
    options?.selector,
    options?.stagger,
    options?.duration,
    options?.start,
    options?.ease,
  ])

  return ref
}

export { gsap, ScrollTrigger }
