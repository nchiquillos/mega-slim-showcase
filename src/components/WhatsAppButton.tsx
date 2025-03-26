
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    window.open('https://wa.me/1234567890', '_blank');
  };
  
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label={t('contact.whatsapp') || "Contact us via WhatsApp"}
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
