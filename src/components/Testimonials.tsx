
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (cardRef.current) {
              setTimeout(() => {
                cardRef.current?.classList.add('visible');
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg p-6 animated-element"
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-brand-blue flex items-center justify-center text-white font-medium">
          {name.charAt(0)}
        </div>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
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
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 animated-element"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-brand-orange/10 text-brand-orange">
            {t('menu.testimonials')}
          </span>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TestimonialCard 
            name={t('testimonials.client1.name')} 
            text={t('testimonials.client1.text')} 
            index={0}
          />
          <TestimonialCard 
            name={t('testimonials.client2.name')} 
            text={t('testimonials.client2.text')} 
            index={1}
          />
          <TestimonialCard 
            name={t('testimonials.client3.name')} 
            text={t('testimonials.client3.text')} 
            index={2}
          />
          <TestimonialCard 
            name={t("Maria S.")} 
            text={t('"Después de probar Mega Slim Plus por 2 meses, he notado una diferencia increíble. Mi metabolismo es mejor que nunca y tengo más energía durante todo el día."')} 
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
