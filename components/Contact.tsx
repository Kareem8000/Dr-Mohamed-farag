import React from 'react';
import { CLINIC_INFO } from '../constants';
import { MapPin, Phone, MessageCircle, Clock, Facebook, Stethoscope, Calendar, Instagram } from 'lucide-react';
import SectionTitle from './SectionTitle';
import RevealOnScroll from './RevealOnScroll';

// TikTok Icon SVG
const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-medical-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="نورنا في العيادة" alignment="center" />
        
        <RevealOnScroll className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/3 p-8 md:p-12 bg-medical-primary text-white relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-medical-accent/10 rounded-full blur-2xl"></div>
             <div className="absolute bottom-10 right-10 w-32 h-32 bg-medical-accent/10 rounded-full blur-2xl"></div>

            <h3 className="text-2xl font-bold mb-8 relative z-10 border-b border-white/10 pb-4">إزاي توصلنا؟</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                   <MapPin className="text-medical-accent w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">العنوان</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-medical-accent w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">مواعيد العمل</h4>
                  <p className="text-stone-300 text-sm">{CLINIC_INFO.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-medical-accent w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">التليفون</h4>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-stone-300 text-sm hover:text-white transition-colors block font-mono" dir="ltr">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-medical-accent w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">حجز ميعاد</h4>
                  <a 
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent("مساء الخير، كنت محتاج أحجز ميعاد في العيادة.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-medical-accent text-white px-5 py-2 rounded-full hover:bg-white hover:text-medical-accent transition-all duration-300 text-sm font-bold shadow-md group"
                  >
                    <span>احجز واتساب</span>
                    <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Social Links Section */}
              <div className="pt-6">
                <h4 className="font-bold text-lg mb-4">تابعنا على</h4>
                <div className="flex gap-4">
                  <a href={CLINIC_INFO.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href={CLINIC_INFO.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href={CLINIC_INFO.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="TikTok">
                    <TikTokIcon size={18} />
                  </a>
                  <a href={CLINIC_INFO.vezeeta} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0070CD] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="Vezeeta">
                    <Stethoscope size={20} />
                  </a>
                  <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="WhatsApp">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side - Satellite Styled */}
          <div className="w-full lg:w-2/3 h-[450px] lg:h-auto bg-stone-900 relative">
             <iframe 
               src={CLINIC_INFO.mapEmbedUrl}
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="موقع العيادة"
               className="filter contrast-110 saturate-110" 
             ></iframe>
             {/* Map overlay label */}
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg z-10 pointer-events-none">
                <p className="text-xs font-bold text-stone-800">صورة القمر الصناعي</p>
             </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;