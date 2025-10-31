
import { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import ServicesPreview from '@/components/services-preview'
import WhyChooseUs from '@/components/why-choose-us'
import CTASection from '@/components/cta-section'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Starting a Business in Brazil - Expert Business Consulting Services',
  description: 'Expert consulting services to help you start a business in Brazil. Get professional guidance for company formation, CNPJ registration, business permits, and full legal compliance in Brazil.',
  keywords: 'start business Brazil, company formation Brazil, Brazilian business consulting, CNPJ registration, business permits Brazil, MEI registration Brazil',
  openGraph: {
    title: 'Starting a Business in Brazil - Expert Business Consulting Services',
    description: 'Expert consulting services to help you start a business in Brazil. Get professional guidance for company formation, CNPJ registration, business permits, and full legal compliance.',
    url: 'https://startingabusinessinbrazil.com',
  }
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesPreview />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
