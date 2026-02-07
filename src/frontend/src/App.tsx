import SiteHeader from './components/SiteHeader';
import HomeHero from './components/sections/HomeHero';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import ContactSection from './components/sections/ContactSection';
import SiteFooter from './components/SiteFooter';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HomeHero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
