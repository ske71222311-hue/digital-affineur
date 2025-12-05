import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ArchitectureSection from "./components/ArchitectureSection";
import ScienceSection from "./components/ScienceSection";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import ForWhom from "./components/ForWhom";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ResponsiveLayout from "./components/ResponsiveLayout";
import { MainPageJsonLd } from "./components/JsonLd";

export default function Home() {
  return (
    <ResponsiveLayout>
      {/* Structured Data for SEO */}
      <MainPageJsonLd />
      
      <div className="min-h-screen flex flex-col bg-background">
        {/* 1. Header - фиксированный */}
        <Header />

        {/* 2. Main Content - отступ сверху для фиксированного header */}
        <main className="flex-1 pt-16 md:pt-20 flex flex-col">
          {/* 3. Hero Section */}
          <Hero />

          {/* 4. Problem Section */}
          <ProblemSection />

          {/* 5. Architecture Section */}
          <ArchitectureSection />

          {/* 6. Science Section */}
          <ScienceSection />

          {/* Секции с адаптивными отступами */}
          <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* 8. Stats Section */}
            <Stats />

            {/* 5. How It Works Section */}
            <HowItWorks />

            {/* 6. For Whom Section */}
            <ForWhom />

            {/* 7. Contact Form Section */}
            <ContactForm />
          </div>
        </main>

        {/* 9. Footer */}
        <Footer />
      </div>
    </ResponsiveLayout>
  );
}
