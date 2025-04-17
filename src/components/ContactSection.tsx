
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-brand-blue/5 to-brand-green/5">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef} 
          className="text-center mb-12 animated-element"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-brand-blue/10 text-brand-blue">
            {t('menu.contact') || 'Contáctanos'}
          </span>
          <h2 className="section-title">RECIBE UNA CONSULTA GRATIS CON UN ESPECIALISTA</h2>
          <p className="section-subtitle">
            Complete el siguiente formulario y nuestro equipo se pondrá en contacto con usted lo antes posible
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
