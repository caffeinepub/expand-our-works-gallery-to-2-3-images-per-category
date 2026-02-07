import { useState } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import PhoneNumberSelector from '../PhoneNumberSelector';

export default function HomeHero() {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [selectorType, setSelectorType] = useState<'call' | 'whatsapp'>('call');

  const handleCallClick = () => {
    setSelectorType('call');
    setSelectorOpen(true);
  };

  const handleWhatsAppClick = () => {
    setSelectorType('whatsapp');
    setSelectorOpen(true);
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/VKSsDUm73qUCSSQNA', '_blank');
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white pt-20"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Signage & Branding Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Creating impactful visual identities for retail, commercial, and corporate businesses across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCallClick}
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-green-dark transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </button>
              <button
                onClick={handleLocationClick}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-all hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Our Location
              </button>
            </div>
          </div>
        </div>
      </section>

      <PhoneNumberSelector
        open={selectorOpen}
        onOpenChange={setSelectorOpen}
        type={selectorType}
      />
    </>
  );
}
