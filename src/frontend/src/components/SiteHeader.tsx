import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import PhoneNumberSelector from './PhoneNumberSelector';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCallClick = () => {
    setSelectorOpen(true);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center" onClick={(e) => handleNavClick(e, '#home')}>
              <img
                src="/assets/generated/vi-digital-branding-logo.dim_512x128.png"
                alt="VI Digital Branding"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-navy font-medium hover:text-brand-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Call Button - Desktop */}
            <button
              onClick={handleCallClick}
              className="hidden lg:flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-navy-dark transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-navy hover:text-brand-green transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-navy font-medium hover:text-brand-green transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-navy-dark transition-all mt-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <PhoneNumberSelector
        open={selectorOpen}
        onOpenChange={setSelectorOpen}
        type="call"
      />
    </>
  );
}
