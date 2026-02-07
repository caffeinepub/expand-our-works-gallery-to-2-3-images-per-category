import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import PhoneNumberSelector from '../PhoneNumberSelector';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [enquiryMessage, setEnquiryMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {
      name: '',
      phone: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (newErrors.name || newErrors.phone) {
      setErrors(newErrors);
      return;
    }

    // Build WhatsApp message
    const message = `New Enquiry from Website
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Message: ${formData.message || 'No message'}`;

    setEnquiryMessage(message);
    setShowSelector(true);
  };

  const handleNumberSelected = () => {
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/VKSsDUm73qUCSSQNA', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 
            id="contact-heading" 
            tabIndex={-1}
            className="text-3xl md:text-4xl font-bold text-navy mb-6 focus:outline-none"
          >
            Contact Us
          </h2>
        </div>

        {showSuccess && (
          <div className="max-w-2xl mx-auto mb-8 bg-brand-green/10 border-2 border-brand-green rounded-lg p-4 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
            <p className="text-brand-green font-semibold">
              Thank you! Your message has been sent successfully. We will contact you shortly.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-light-gray rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-brand-green`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-brand-green`}
                  placeholder="Your Phone Number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  placeholder="Your Email (Optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green resize-none"
                  placeholder="Your Message (Optional)"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-green-dark transition-all hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+919176123196" className="hover:text-brand-green transition-colors">
                    +91 9176 123 196
                  </a>
                </p>
                <p className="text-gray-700">
                  <a href="tel:+916374942194" className="hover:text-brand-green transition-colors">
                    +91 6374 942 194
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:vigital27@gmail.com" className="hover:text-brand-green transition-colors">
                    vigital27@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Location</h3>
                <p className="text-gray-700 mb-2">
                  Veppampattu, Thiruvallur,<br />
                  Tamil Nadu, India
                </p>
                <button
                  onClick={handleLocationClick}
                  className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-semibold transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  📍 Our Location
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-2">Business Hours</h3>
                <p className="text-gray-700">Mon–Sat: 9 AM – 7 PM</p>
                <p className="text-gray-700">Sun: 10 AM – 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PhoneNumberSelector
        open={showSelector}
        onOpenChange={setShowSelector}
        type="whatsapp"
        message={enquiryMessage}
        onSelect={handleNumberSelected}
      />
    </section>
  );
}
