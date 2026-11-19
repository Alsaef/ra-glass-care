import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroOfferBanner from "@/components/IntroOfferBanner";
import ServicesGrid from "@/components/ServicesGrid";
import PricingSection from "@/components/PricingSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import QuoteCalculator from "@/components/QuoteCalculator";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import FounderBrandStory from "@/components/FounderBrandStory";
import TestimonialsFAQ from "@/components/TestimonialsFAQ";
import CallToActionBanner from "@/components/CallToActionBanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col selection:bg-amber-400/20 selection:text-amber-300">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Introductory Offer Banner (20% off) */}
        <IntroOfferBanner />

        {/* 3. Services Grid (Pure Service Showcase) */}
        <ServicesGrid />

        {/* 4. Panel-Based Pricing Guide */}
        <PricingSection />

        {/* 5. Why Choose RA Glass Care + Before & After Showcase */}
        <WhyChooseUs />

        {/* 6. Interactive Quick-Quote Builder */}
        <QuoteCalculator />

        {/* 7. Local NYC Service Area Coverage */}
        <ServiceAreaSection />

        {/* 8. Founder Story & Brand Collateral Showcase */}
        <FounderBrandStory />

        {/* 9. Testimonials & FAQs */}
        <TestimonialsFAQ />

        {/* 10. High-Impact Closing CTA */}
        <CallToActionBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
