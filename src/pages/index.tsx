import { FeatureSection } from '@/components/feature-section/feature-section'
import { HeroSection } from '@/components/hero-section/hero-secton'

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />

        <FeatureSection />
      </article>
    </>
  )
}
