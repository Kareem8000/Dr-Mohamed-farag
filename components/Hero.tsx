import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../constants';
import { Calendar, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  
  const slides = [
    {
      // Image 1: Modern Dental Office
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
      title: "ضحكتك ثقة،",
      highlight: "وحياتك أحلى",
      desc: "بنجمع بين الخبرة وأحدث التقنيات عشان ترجعلك الابتسامة اللي تستاهلها."
    },
    {
      // Image 2: Close up of dental work/smile
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop",
      title: "رعاية أسنان",
      highlight: "بلمسة فنية",
      desc: "مش مجرد علاج، دي خدمات تجميلية وعلاجية بنظام تعقيم عالمي."
    },
    {
      // Image 3: Dental Tools/Professional setting
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      title: "سنين خبرة",
      highlight: "عشان راحتك",
      desc: "في عيادة د. محمد فرج، بنهتم بكل تفصيلة عشان تكون مرتاح ومطمئن."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Animation for the experience counter
  useEffect(() => {
    let start = 0;
    const end = 9; // Years of experience
    const duration = 1500;
    const incrementTime = duration / (end * 2); 

    const counterTimer = setInterval(() => {
      start += 1;
      setExperienceCount(start);
      if (start === end) clearInterval(counterTimer);
    }, 150);

    return () => clearInterval(counterTimer);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900" dir="rtl">
      
      {/* Dynamic Background Slideshow */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-50' : 'opacity-0'}`}
        >
          <img 
            src={slide.image} 
            alt="Clinic Background" 
            className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/30"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Animated Badge */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <div className="inline-flex items-center gap-3 py-3 px-8 border-2 border-medical-accent rounded-full text-medical-accent text-base md:text-lg tracking-wider font-bold bg-stone-900/80 backdrop-blur-xl shadow-2xl animate-pulse-ring relative overflow-hidden group">
            {/* Subtle Shine effect on hover/load */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>

            <span className="text-stone-300">أكثر من</span>
            
            <div className="flex items-center gap-1 relative">
               <span className="text-3xl md:text-5xl font-black text-white drop-shadow-md">{experienceCount}</span>
               {/* Plus sign with repeating float/pulse animation */}
               <span className="text-3xl md:text-5xl font-black text-medical-accent animate-float drop-shadow-lg inline-block">+</span>
            </div>
            
            <span className="text-stone-300">سنين خبرة</span>
          </div>
        </div>
        
        {/* Animated Text Content */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
            {slides[currentSlide].title} <br className="md:hidden" />
            <span className="text-medical-accent relative inline-block">
               {slides[currentSlide].highlight}
               <svg className="absolute w-full h-3 -bottom-1 right-0 text-medical-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
               </svg>
            </span>
          </h1>
        </div>
        
        <p className="text-stone-200 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          {slides[currentSlide].desc}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <a 
            href="#contact"
            onClick={handleScrollToContact}
            className="flex items-center justify-center gap-3 bg-medical-accent hover:bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto min-w-[220px] shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1"
          >
            <Calendar size={22} />
            احجز ميعادك
          </a>
          <a 
            href="#contact"
            onClick={handleScrollToContact}
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto min-w-[220px] hover:border-white/50"
          >
            <Phone size={22} />
            كلمنـا
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-medical-accent w-8' : 'bg-white/30 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;