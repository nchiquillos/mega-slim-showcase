
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { productImages } from '@/assets/productImages';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const productRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    if (productRef.current) observer.observe(productRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (productRef.current) observer.unobserve(productRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div 
            ref={textRef} 
            className="lg:w-1/2 text-center lg:text-left animated-element"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Natural Plus
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 group"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div 
            ref={productRef} 
            className="lg:w-1/2 animated-element"
          >
            <div className="relative">
              {/* Main product image */}
              <div className="relative z-10 animate-float">
                <img 
                  src={productImages.heroMain} 
                  alt="Natural Plus Products" 
                  className="w-full max-w-lg mx-auto"
                />
              </div>
              
              {/* Background decoration elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-brand-green/10 rounded-full blur-xl" />
              <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-brand-orange/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
