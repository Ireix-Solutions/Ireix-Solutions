import { AboutSection } from "@/app/(pages)/(home)/_components/AboutSection";
import { BlogInsightsSection } from "@/app/(pages)/(home)/_components/BlogInsightsSection";
import { ContactSection } from "@/app/(pages)/(home)/_components/ContactSection";
import { HeroSection } from "@/app/(pages)/(home)/_components/HeroSection";
import { ProcessSection } from "@/app/(pages)/(home)/_components/ProcessSection";
import { ProfessionalFooter } from "@/app/(pages)/(home)/_components/ProfessionalFooter";
import { ServicesSection } from "@/app/(pages)/(home)/_components/ServicesSection";
import { WhatsAppSpotlight } from "@/app/(pages)/(home)/_components/WhatsAppSpotlight";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[var(--irex-ink)]">
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <WhatsAppSpotlight />
        <BlogInsightsSection />
        <ContactSection />
      </main>
      <ProfessionalFooter />
    </div>
  );
}
