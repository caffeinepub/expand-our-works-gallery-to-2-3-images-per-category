import { Award, Users, ThumbsUp, Shield } from 'lucide-react';

export default function AboutSection() {
  const features = [
    { icon: Award, label: 'Quality Workmanship' },
    { icon: Users, label: 'Customized Solutions' },
    { icon: ThumbsUp, label: 'Customer Satisfaction' },
    { icon: Shield, label: 'Trusted Partner' },
  ];

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">About VI Digital Branding</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            VI Digital Branding is a leading signage and branding company specializing in creative design,
            fabrication, and installation of high-quality sign boards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-semibold text-navy text-lg">{feature.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
