import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  title: string;
  subtitle?: string;
  alignment?: 'right' | 'center';
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <RevealOnScroll className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-right'}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-medical-primary mb-6 relative inline-block">
        {title}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-medical-accent rounded-full opacity-90"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-stone-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  );
};

export default SectionTitle;