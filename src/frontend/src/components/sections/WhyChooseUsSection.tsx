import { useState } from 'react';
import { Package, Settings, Users, Clock, DollarSign, Shield } from 'lucide-react';
import { Phone, MessageCircle } from 'lucide-react';
import PhoneNumberSelector from '../PhoneNumberSelector';

export default function WhyChooseUsSection() {
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

  const reasons = [
    { icon: Package, label: 'Quality Materials' },
    { icon: Settings, label: 'Customized Solutions' },
    { icon: Users, label: 'Expert Team' },
    { icon: Clock, label: 'Timely Completion' },
    { icon: DollarSign, label: 'Competitive Pricing' },
    { icon: Shield, label: 'Durability & Clarity' },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us – Vi Digital Branding</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-navy-card rounded-lg p-8 text-center hover:bg-navy-card-hover transition-all hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/20 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-brand-green" />
                  </div>
                  <h3 className="font-semibold text-lg">{reason.label}</h3>
                </div>
              );
            })}
          </div>

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
              WhatsApp Now
            </button>
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
