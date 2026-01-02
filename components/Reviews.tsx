import React from 'react';
import { MOCK_REVIEWS } from '../constants';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Review } from '../types';

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <Star 
      key={i} 
      size={14} 
      className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-stone-500/50"} 
    />
  ));
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div 
      className="w-[320px] md:w-[400px] bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 flex-shrink-0 flex flex-col relative"
      dir="rtl"
  >
      <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
             {review.avatarUrl ? (
               <img 
                 src={review.avatarUrl} 
                 alt={review.patientName} 
                 className="w-12 h-12 rounded-full object-cover border-2 border-medical-accent/30"
                 loading="lazy"
               />
             ) : (
               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-medical-accent/20 to-medical-accent/5 flex items-center justify-center text-medical-accent font-bold text-lg">
                 {review.patientName.charAt(0)}
               </div>
             )}
             
             <div>
               <div className="flex items-center gap-2">
                 <h4 className="font-bold text-white text-base md:text-lg leading-none">{review.patientName}</h4>
                 {review.verified && (
                   <div className="flex items-center gap-1 bg-[#1A73E8]/20 px-2 py-0.5 rounded-full border border-[#1A73E8]/30" title="تقييم موثوق">
                     <CheckCircle size={10} className="text-[#1A73E8]" />
                     <span className="text-[10px] font-bold text-[#1A73E8]">موثوق</span>
                   </div>
                 )}
               </div>
               <div className="flex gap-1 mt-1">{renderStars(review.rating)}</div>
             </div>
          </div>
          <Quote className="text-medical-accent/20 w-8 h-8 transform rotate-180" />
      </div>
      
      <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-6 line-clamp-4 flex-grow">
        "{review.text}"
      </p>
      
      <div className="flex justify-between items-center text-xs text-stone-500 pt-4 border-t border-white/5">
          <span>{review.date}</span>
          <div className="flex items-center gap-1 opacity-60">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-3 h-3 grayscale" />
             <span>Google Review</span>
          </div>
      </div>
  </div>
);

const Reviews: React.FC = () => {
  // Seamless loop strategy: Render the list multiple times within a flex container
  // that is animated by CSS to move 50% of its total width.

  return (
    <section id="reviews" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-medical-accent/10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">الناس بتقول عنا إيه؟</h2>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
                    <span className="text-3xl font-bold text-medical-accent">4.9</span>
                    <div className="flex flex-col items-start">
                        <div className="flex gap-1 mb-1">
                            {renderStars(5)}
                        </div>
                        <span className="text-xs text-stone-300">تقييم ممتاز على Google Maps</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Seamless Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
         {/* Gradient Masks for fading edges */}
         <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-stone-900 to-transparent z-20 pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-stone-900 to-transparent z-20 pointer-events-none"></div>

         {/* Container for the strip - pause on hover 
             Adjusting animation duration to 100s to match the visual speed of the BeforeAfter section
             since this list is much longer (more items).
         */}
         <div className="flex animate-scroll hover-pause w-max" style={{ animationDuration: '100s' }}>
            {/* Set 1 */}
            <div className="flex gap-6 px-3">
                {MOCK_REVIEWS.map((review, index) => (
                    <ReviewCard key={`r1-${review.id}-${index}`} review={review} />
                ))}
            </div>
            {/* Set 2 - Duplicate for loop */}
            <div className="flex gap-6 px-3">
                {MOCK_REVIEWS.map((review, index) => (
                    <ReviewCard key={`r2-${review.id}-${index}`} review={review} />
                ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default Reviews;