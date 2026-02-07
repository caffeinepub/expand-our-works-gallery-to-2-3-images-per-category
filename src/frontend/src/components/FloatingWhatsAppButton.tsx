import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import PhoneNumberSelector from './PhoneNumberSelector';

export default function FloatingWhatsAppButton() {
  const [selectorOpen, setSelectorOpen] = useState(false);

  const handleWhatsAppClick = () => {
    setSelectorOpen(true);
  };

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-40 bg-whatsapp-green hover:bg-whatsapp-green-dark text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      <PhoneNumberSelector
        open={selectorOpen}
        onOpenChange={setSelectorOpen}
        type="whatsapp"
      />
    </>
  );
}
