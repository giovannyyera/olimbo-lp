import { BenefitsSection } from "@/components/sections/benefits-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { WhyOlimboSection } from "@/components/sections/why-olimbo-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { ScrollMotion } from "@/components/scroll-motion";

export default function Home() {
  return (
    <>
      <StructuredData />
      <ScrollMotion />
      <div className="reading-progress" aria-hidden="true" />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <BenefitsSection />
        <SolutionsSection />
        <ProblemSolutionSection />
        <ProcessSection />
        <WhyOlimboSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
