import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20b858] transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 animate-pulse"
      aria-label="تواصل معانا واتساب"
    >
      <MessageCircle className="w-9 h-9 text-white" />
    </a>
  );
};

export default WhatsAppButton;