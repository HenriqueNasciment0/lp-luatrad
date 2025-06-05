'use client';

import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import Services from '@/components/ui/Services';
import About from '@/components/ui/About';
import Differentials from '@/components/ui/Differentials';
import Testimonials from '@/components/ui/Testimonials';
import Process from '@/components/ui/Process';
import FAQ from '@/components/ui/FAQ';
import CTAFinal from '@/components/ui/CTAFinal';
import Footer from '@/components/ui/Footer';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import ScrollToTop from '@/components/shared/ScrollToTop';
import QuoteForm from '@/components/ui/QuoteForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Testimonials />
      <Process />
      <FAQ />
      <CTAFinal />
      <QuoteForm />
      <Footer />

      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
