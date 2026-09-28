import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Footer } from "@/components/layout/Footer";

// Dynamic imports for below-the-fold performance optimization
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection").then((m) => m.ServicesSection));
const AppTeaserSection = dynamic(() => import("@/components/sections/AppTeaserSection").then((m) => m.AppTeaserSection));
const FleetSection = dynamic(() => import("@/components/sections/FleetSection").then((m) => m.FleetSection));
const HowItWorksSection = dynamic(() => import("@/components/sections/HowItWorksSection").then((m) => m.HowItWorksSection));
const DriverQualitySection = dynamic(() => import("@/components/sections/DriverQualitySection").then((m) => m.DriverQualitySection));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then((m) => m.TestimonialsSection));
const FixedFaresSection = dynamic(() => import("@/components/sections/FixedFaresSection").then((m) => m.FixedFaresSection));
const CoverageMapSection = dynamic(() => import("@/components/sections/CoverageMapSection").then((m) => m.CoverageMapSection));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then((m) => m.FaqSection));
const CtaBannerSection = dynamic(() => import("@/components/sections/CtaBannerSection").then((m) => m.CtaBannerSection));

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white selection:bg-brand-yellow selection:text-brand-dark">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AppTeaserSection />
      <FleetSection />
      <HowItWorksSection />
      <DriverQualitySection />
      <TestimonialsSection />
      <FixedFaresSection />
      <CoverageMapSection />
      <FaqSection />
      <CtaBannerSection />
      <Footer />
    </main>
  );
}
