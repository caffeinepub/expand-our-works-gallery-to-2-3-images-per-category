import { Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-gray-300 leading-relaxed">
            VI Digital Branding is a professional signage and branding company delivering premium visual solutions.
          </p>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2026 VI Digital Branding. Built with{' '}
              <Heart className="inline w-4 h-4 text-red-500 fill-current" />{' '}
              using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:text-brand-green-dark transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
