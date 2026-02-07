import { Phone, MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface PhoneNumberSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'call' | 'whatsapp';
  message?: string;
  onSelect?: () => void;
  showNumberLabels?: boolean;
}

const PHONE_NUMBERS = [
  { number: '+919176123196', display: '+91 9176 123 196', label: 'Number 1' },
  { number: '+916374942194', display: '+91 6374 942 194', label: 'Number 2' },
];

export default function PhoneNumberSelector({ 
  open, 
  onOpenChange, 
  type, 
  message,
  onSelect,
  showNumberLabels = false
}: PhoneNumberSelectorProps) {
  const handleNumberSelect = (phoneNumber: string) => {
    // Sanitize phone number to digits only for wa.me links
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    
    if (type === 'call') {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Build WhatsApp URL with optional message
      let whatsappUrl = `https://wa.me/${digitsOnly}`;
      if (message) {
        whatsappUrl += `?text=${encodeURIComponent(message)}`;
      }
      window.open(whatsappUrl, '_blank');
    }
    
    onOpenChange(false);
    
    // Invoke callback after action is triggered
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-navy">
            {type === 'call' ? (
              <>
                <Phone className="w-5 h-5 text-brand-green" />
                Select Number to Call
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5 text-brand-green" />
                Select Number for WhatsApp
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            Choose one of our business numbers to {type === 'call' ? 'call' : 'chat on WhatsApp'}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 mt-4">
          {PHONE_NUMBERS.map((phone) => (
            <button
              key={phone.number}
              onClick={() => handleNumberSelect(phone.number)}
              className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-brand-green hover:bg-brand-green/5 transition-all group min-h-[56px]"
            >
              <div className="flex flex-col items-start">
                {showNumberLabels && (
                  <span className="text-sm font-medium text-gray-600 group-hover:text-brand-green transition-colors mb-1">
                    {phone.label}
                  </span>
                )}
                <span className="font-semibold text-navy group-hover:text-brand-green transition-colors">
                  {phone.display}
                </span>
              </div>
              {type === 'call' ? (
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-brand-green transition-colors flex-shrink-0" />
              ) : (
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-brand-green transition-colors flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
