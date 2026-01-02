import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Stethoscope, Instagram } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

// TikTok Icon SVG since it's not in standard Lucide React package used
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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Links map exactly to the ID of the section components (About.tsx -> id="about", etc.)
  const navLinks = [
    { name: 'عن الدكتور', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'قبل وبعد', href: '#before-after' },
    { name: 'قالوا عنا', href: '#reviews' },
    { name: 'شوف العيادة', href: '#gallery' },
    { name: 'تواصل معانا', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#root')} className="flex flex-col group">
            <span className="font-bold text-2xl md:text-3xl text-medical-primary group-hover:text-medical-accent transition-colors duration-300">
              {CLINIC_INFO.name}
            </span>
            <span className="text-sm tracking-wide text-stone-500">{CLINIC_INFO.title}</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-stone-700 hover:text-medical-accent font-semibold transition-colors text-base relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-medical-accent after:bottom-[-4px] after:right-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-stone-300 mx-2"></div>

            {/* Social Icons Mini */}
            <div className="flex gap-3">
              <a href={CLINIC_INFO.facebook} target="_blank" rel="noreferrer" className="text-stone-600 hover:text-[#1877F2] transition-colors">
                <Facebook size={20} />
              </a>
              <a href={CLINIC_INFO.instagram} target="_blank" rel="noreferrer" className="text-stone-600 hover:text-[#E1306C] transition-colors">
                <Instagram size={20} />
              </a>
              <a href={CLINIC_INFO.tiktok} target="_blank" rel="noreferrer" className="text-stone-600 hover:text-black transition-colors">
                <TikTokIcon size={19} />
              </a>
              <a href={CLINIC_INFO.vezeeta} target="_blank" rel="noreferrer" className="text-stone-600 hover:text-[#0070CD] transition-colors" title="Vezeeta">
                <Stethoscope size={20} />
              </a>
            </div>

            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-2 bg-medical-primary text-white px-6 py-2.5 rounded-full hover:bg-medical-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-bold text-sm"
            >
              <Phone size={18} />
              <span>احجز دلوقتي</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-medical-primary focus:outline-none p-2 hover:bg-stone-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 animate-fade-in-up">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-stone-800 text-lg font-medium p-3 hover:bg-stone-50 rounded-lg transition-colors text-right"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center gap-6 py-4 border-t border-stone-100 mt-2">
               <a href={CLINIC_INFO.facebook} className="text-stone-600 hover:text-[#1877F2]"><Facebook size={24} /></a>
               <a href={CLINIC_INFO.instagram} className="text-stone-600 hover:text-[#E1306C]"><Instagram size={24} /></a>
               <a href={CLINIC_INFO.tiktok} className="text-stone-600 hover:text-black"><TikTokIcon size={22} /></a>
               <a href={CLINIC_INFO.vezeeta} className="text-stone-600 hover:text-[#0070CD]"><Stethoscope size={24} /></a>
            </div>
            <a 
              href="#contact" 
              className="bg-medical-accent text-white py-3.5 rounded-lg text-center font-bold shadow-md"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              اتصل بينا دلوقتي
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;