import { CallToAction } from './sections/call-to-action/call-to-action'
import { CustomerHistorySection } from './sections/customer-history-section/customer-history-section'
import { FeatureSection } from './sections/feature-section/feature-section'
import { HeroSection } from './sections/hero-section/hero-secton'
import { SupportSection } from './sections/support-section/support-section'

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerHistorySection />
      <CallToAction />
    </article>
  )
}
