import { brandAssets } from '@/lib/content'

/** Fixed brand lockup shown in the top-left of every section, in the same position. */
export function BrandHeader() {
  return (
    <a
      href="#opening"
      aria-label="IIM Bodh Gaya · IT Committee — back to top"
      className="fixed left-6 top-6 z-50 flex items-center gap-3 md:left-10 md:top-8"
    >
      <img
        src={brandAssets.logo}
        alt="IT Committee logo"
        className="h-9 w-9 object-contain md:h-10 md:w-10"
      />
      <span className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-text-primary/90">
        IIM Bodh Gaya <span className="text-accent-cyan">·</span> IT Committee
      </span>
    </a>
  )
}
