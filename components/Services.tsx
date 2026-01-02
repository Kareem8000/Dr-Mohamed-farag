import React from 'react';
import SectionTitle from './SectionTitle';
import RevealOnScroll from './RevealOnScroll';
import { SERVICES, CLINIC_INFO } from '../constants';
import { 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Sun, 
  Smile, 
  Stethoscope, 
  ArrowLeft,
  Anchor,
  Layers,
  Heart,
  GitCommit
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'ShieldCheck': <ShieldCheck className="w-8 h-8" />,
  'Sparkles': <Sparkles className="w-8 h-8" />,
  'Stethoscope': <Stethoscope className="w-8 h-8" />,
  'Activity': <Activity className="w-8 h-8" />,
  'Sun': <Sun className="w-8 h-8" />,
  'Smile': <Smile className="w-8 h-8" />,
  'Anchor': <Anchor className="w-8 h-8" />,
  'Layers': <Layers className="w-8 h-8" />,
  'Heart': <Heart className="w-8 h-8" />,
  'GitCommit': <GitCommit className="w-8 h-8" />, // Used for Orthodontics (representing nodes/connections)
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-medical-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-medical-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="خدماتنا ليك" 
          subtitle="حلول متكاملة لأسنانك، معمولة مخصوص عشانك بأحدث الأجهزة والتقنيات."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
             // Create specific WhatsApp URL for each service
             const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(service.whatsappMessage)}`;

             return (
              <RevealOnScroll key={service.id} delay={index * 50}>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group h-full flex flex-col relative overflow-hidden cursor-pointer block"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-medical-accent/0 to-medical-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-16 h-16 bg-medical-50 rounded-2xl flex items-center justify-center text-medical-accent mb-6 group-hover:bg-medical-accent group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 shadow-sm">
                    {iconMap[service.iconName] || <ShieldCheck className="w-8 h-8" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-medical-primary mb-3 group-hover:text-medical-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-stone-600 leading-relaxed text-sm mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex items-center text-medical-accent font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>احجز الخدمة</span>
                    <ArrowLeft size={16} className="mr-2" />
                  </div>
                </a>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;