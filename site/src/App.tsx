import { useSmoothScroll } from '@/lib/motion'
import { SideNav } from '@/components/SideNav'
import { BrandHeader } from '@/components/BrandHeader'
import Particles from '@/components/Particles/Particles'
import { Opening } from '@/sections/Opening'
import { Purpose } from '@/sections/Purpose'
import { Support } from '@/sections/Support'
import { Members } from '@/sections/Members'
import { Events } from '@/sections/Events'
import { Leadership } from '@/sections/Leadership'
import { Department } from '@/sections/Department'
import { Recruitment } from '@/sections/Recruitment'
import { Contact } from '@/sections/Contact'

export default function App() {
  useSmoothScroll()

  return (
    <main className="relative bg-void">
      {/* Fixed animated Particles background — sits behind pages 2–9.
          Page 1 (Opening) has its own opaque campus image covering this. */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Particles
          particleColors={['#A6C8FF', '#2563EB', '#06B6D4', '#7C3AED', '#F8FAFC']}
          particleCount={420}
          particleSpread={13}
          speed={0.14}
          particleBaseSize={140}
          sizeRandomness={1.2}
          alphaParticles={true}
          moveParticlesOnHover={false}
          disableRotation={false}
        />
      </div>
      <BrandHeader />
      <SideNav />
      <Opening />
      <Purpose />
      <Support />
      <Leadership />
      <Department />
      <Members />
      <Events />
      <Recruitment />
      <Contact />
    </main>
  )
}
