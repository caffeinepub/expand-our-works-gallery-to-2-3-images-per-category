import { useState } from 'react';
import { Lightbulb, Palette, Wrench, ArrowRight, MessageCircle } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';
import PhoneNumberSelector from '../PhoneNumberSelector';

export default function ServicesSection() {
  const [whatsappSelectorOpen, setWhatsappSelectorOpen] = useState(false);

  const handleGetQuote = async () => {
    await scrollToSection('contact');
    
    // Focus the Contact Us heading after scroll completes
    const contactHeading = document.getElementById('contact-heading');
    if (contactHeading) {
      contactHeading.focus();
    }
  };

  const handleWhatsAppClick = () => {
    setWhatsappSelectorOpen(true);
  };

  const services = [
    {
      icon: Lightbulb,
      title: 'Signage Solutions',
      items: [
        'Star Flex Name Boards',
        'ACP Sign Boards',
        'Backlight Boards',
        'LED Sign Boards',
        '3D Acrylic & Channel Letter Boards',
      ],
    },
    {
      icon: Palette,
      title: 'Branding & Printing',
      items: [
        'Flex Banners & Hoardings',
        'Vinyl Printing',
        'Posters, Flyers & Pamphlets',
        'Visiting Cards & Brochures',
        '360 Degree Rotational Standing Board',
      ],
    },
    {
      icon: Wrench,
      title: 'Fabrication Works',
      items: [
        'MS Fabrication',
        'Arch Boards',
        'Frame Structures',
        'Installation Services',
      ],
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy rounded-lg mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-brand-green mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <button
              onClick={handleGetQuote}
              className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-green-dark transition-all hover:scale-105 shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* WhatsApp Reference Images CTA */}
          <div className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-700 text-lg mb-4">
              If you need any reference images
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-all hover:scale-105 shadow-md min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              Contact us on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <PhoneNumberSelector
        open={whatsappSelectorOpen}
        onOpenChange={setWhatsappSelectorOpen}
        type="whatsapp"
        message="Hello, I need reference images and details for your services. Please share more information."
        showNumberLabels={true}
      />
    </>
  );
}
