import React from 'react';
import { CLINIC_INFO } from '../constants';
import { Facebook, Stethoscope, Instagram } from 'lucide-react';

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

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-right">
          <h4 className="text-white font-bold text-xl mb-2">{CLINIC_INFO.name}</h4>
          <p className="text-sm opacity-70">رعاية متخصصة، وأمان تام ليك ولأسرتك.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-medical-accent transition-colors hover:bg-white/5 px-3 py-1 rounded-full">خدماتنا</a>
          <a href="#before-after" onClick={(e) => handleScroll(e, '#before-after')} className="hover:text-medical-accent transition-colors hover:bg-white/5 px-3 py-1 rounded-full">قبل وبعد</a>
          <a href="#reviews" onClick={(e) => handleScroll(e, '#reviews')} className="hover:text-medical-accent transition-colors hover:bg-white/5 px-3 py-1 rounded-full">رأي الناس</a>
          <a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="hover:text-medical-accent transition-colors hover:bg-white/5 px-3 py-1 rounded-full">صور العيادة</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-medical-accent transition-colors hover:bg-white/5 px-3 py-1 rounded-full">احجز ميعاد</a>
        </div>

        <div className="flex gap-4">
             <a href={CLINIC_INFO.facebook} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-[#1877F2] transition-colors"><Facebook size={20} /></a>
             <a href={CLINIC_INFO.instagram} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-[#E1306C] transition-colors"><Instagram size={20} /></a>
             <a href={CLINIC_INFO.tiktok} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors"><TikTokIcon size={19} /></a>
             <a href={CLINIC_INFO.vezeeta} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-[#0070CD] transition-colors"><Stethoscope size={20} /></a>
        </div>

        <div className="text-xs text-center md:text-left text-stone-600 w-full md:w-auto mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} د. محمد فرج. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;