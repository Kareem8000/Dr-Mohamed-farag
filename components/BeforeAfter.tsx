import React from 'react';
import SectionTitle from './SectionTitle';
import { ArrowDown } from 'lucide-react';

const cases = [
  { id: 1, image: "https://b.top4top.io/p_3654cesyz1.jpg" },
  { id: 2, image: "https://f.top4top.io/p_3654a6klo1.jpg" },
  { id: 3, image: "https://d.top4top.io/p_36542uai51.jpg" },
  { id: 4, image: "https://g.top4top.io/p_3654445xn1.jpg" },
  { id: 5, image: "https://h.top4top.io/p_3654mfx6j1.jpg" },
];

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x450?text=Case+Image+(4:3)";
};

const CardItem: React.FC<{ item: typeof cases[0], index: number }> = ({ item, index }) => (
  <div className="w-[300px] md:w-[400px] aspect-[4/3] bg-medical-50 rounded-2xl overflow-hidden shadow-lg border border-stone-100 group relative flex-shrink-0 transition-all duration-300 hover:scale-110 hover:z-30 hover:shadow-2xl cursor-pointer">
    <div className="relative w-full h-full">
      <img 
        src={item.image} 
        alt={`Case ${item.id}`} 
        className="w-full h-full object-cover"
        onError={handleImageError}
      />
      
      {/* Decorative Labels */}
      <div className="absolute top-3 right-3 bg-stone-800/80 text-white text-xs px-2 py-1 rounded shadow-sm font-bold">
        قبل
      </div>
      <div className="absolute bottom-3 left-3 bg-medical-accent/90 text-white text-xs px-2 py-1 rounded shadow-sm font-bold">
        بعد
      </div>

      {/* Center Indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-white border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowDown size={24} />
      </div>
    </div>
  </div>
);

const BeforeAfter: React.FC = () => {
  // To create a seamless loop, we render two sets of the data side-by-side.
  // The CSS animation moves 50% of the total width (which equals one full set), 
  // creating the illusion of infinite scrolling.

  return (
    <section id="before-after" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="شوف الفرق بنفسك" 
          subtitle="صور حقيقية لحالات عالجناها، بتوضح الشكل قبل العلاج (فوق) والنتيجة النهائية (تحت)." 
        />
      </div>

       {/* Seamless Infinite Scroll Container */}
       <div className="relative w-full mt-8 group/track">
         {/* Gradient Masks for fading edges */}
         <div className="absolute top-0 left-0 w-8 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-8 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

         {/* 
            The wrapper needs to be wide enough. We use a flex container that moves.
            hover-pause class (defined in index.html) stops the animation.
         */}
         <div className="flex animate-scroll hover-pause w-max">
            {/* Set 1 */}
            <div className="flex gap-6 px-3">
              {cases.map((item, index) => (
                <CardItem key={`set1-${item.id}-${index}`} item={item} index={index} />
              ))}
            </div>
            {/* Set 2 (Duplicate for seamless loop) */}
            <div className="flex gap-6 px-3">
              {cases.map((item, index) => (
                <CardItem key={`set2-${item.id}-${index}`} item={item} index={index} />
              ))}
            </div>
             {/* Set 3 (Extra buffer for wide screens) */}
             <div className="flex gap-6 px-3">
              {cases.map((item, index) => (
                <CardItem key={`set3-${item.id}-${index}`} item={item} index={index} />
              ))}
            </div>
            {/* Set 4 (Extra buffer for wide screens) */}
             <div className="flex gap-6 px-3">
              {cases.map((item, index) => (
                <CardItem key={`set4-${item.id}-${index}`} item={item} index={index} />
              ))}
            </div>
         </div>
      </div>
      
      <div className="mt-12 text-center container mx-auto px-4">
           <p className="text-stone-500 text-sm italic">* الصور دي لنتائج حقيقية تمت داخل العيادة.</p>
      </div>
    </section>
  );
};

export default BeforeAfter;