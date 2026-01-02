import React from 'react';
import SectionTitle from './SectionTitle';
import RevealOnScroll from './RevealOnScroll';
import { Plus } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    // Image 1: Reception Area
    { src: "https://c.top4top.io/p_3654d9dmw1.jpg", title: "منطقة الاستقبال" },
    
    // Image 2: Clinic Room
    { src: "https://a.top4top.io/p_36540i0871.jpg", title: "غرفة الكشف" },
    
    // Image 3: Clinic Facade - Updated URL
    { src: "https://l.top4top.io/p_365493z041.jpg", title: "واجهة العيادة" },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Basic fallback to placeholder if local image is missing
    const target = e.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="خد جولة في العيادة" 
          subtitle="شوف التجهيزات الحديثة، التعقيم، والمكان المريح اللي يفتح النفس." 
        />
        
        {/* Grid adjusted for exactly 3 images to look balanced */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              {/* Changed height to aspect-[4/3] */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer bg-stone-100 border border-stone-200">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={handleImageError}
                />
                
                {/* Dark Overlay with Title */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-medical-primary">
                     <Plus size={24} />
                   </div>
                   <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                     {item.title}
                   </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;