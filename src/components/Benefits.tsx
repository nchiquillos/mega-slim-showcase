
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Flame, Battery, Leaf, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, className, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (cardRef.current) {
              setTimeout(() => {
                cardRef.current?.classList.add('visible');
              }, delay);
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
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col items-center md:items-start text-center md:text-left animated-element",
        className
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-gradient-to-br from-primary/20 to-primary/5">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
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
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 animated-element"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-brand-green/10 text-brand-green">
            {t('menu.benefits')}
          </span>
          <h2 className="section-title">{t('benefits.title')}</h2>
          <p className="section-subtitle">{t('benefits.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <BenefitCard
            icon={<Flame className="w-6 h-6 text-brand-orange" />}
            title={t('benefits.card1.title')}
            description={t('benefits.card1.description')}
            delay={100}
          />
          <BenefitCard
            icon={<Battery className="w-6 h-6 text-brand-blue" />}
            title={t('benefits.card2.title')}
            description={t('benefits.card2.description')}
            delay={200}
          />
          <BenefitCard
            icon={<Leaf className="w-6 h-6 text-brand-green" />}
            title={t('benefits.card3.title')}
            description={t('benefits.card3.description')}
            delay={300}
          />
          <BenefitCard
            icon={<Check className="w-6 h-6 text-primary" />}
            title={t('benefits.card4.title')}
            description={t('benefits.card4.description')}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
