
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck } from 'lucide-react';

const Ingredients: React.FC = () => {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="ingredients" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {t('menu.ingredients')}
          </span>
          <h2 className="section-title">{t('ingredients.title')}</h2>
          <p className="section-subtitle">{t('ingredients.subtitle')}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div 
            ref={imageRef}
            className="lg:w-1/2 animated-element order-2 lg:order-1"
          >
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center aspect-square">
                        <div className="w-12 h-12 mb-2 rounded-full bg-brand-blue/10 flex items-center justify-center">
                          <Leaf className="w-6 h-6 text-brand-blue" />
                        </div>
                        <span className="text-xs font-medium text-center">Ingredient {item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-xl max-h-xl bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="lg:w-1/2 animated-element order-1 lg:order-2"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                {t('ingredients.description')}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <ShieldCheck className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('ingredients.safety')}</h3>
                    <p className="text-muted-foreground">
                      {t('ingredients.safety.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-green/5 p-4 rounded-xl flex flex-col items-center text-center">
                  <div className="text-3xl font-bold text-brand-green mb-1">99%</div>
                  <p className="text-sm text-muted-foreground">Natural Ingredients</p>
                </div>
                <div className="bg-brand-blue/5 p-4 rounded-xl flex flex-col items-center text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-1">84%</div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Leaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 20A7 7 0 0 1 4 13c0-3.4 2.2-6.2 5.6-7.6A7 7 0 0 1 21 11c0 3.4-2.2 6.2-5.6 7.6"></path>
    <path d="M11 20a3.5 3.5 0 0 0 7 0c0-1.7-1.2-3.2-2.8-3.8A5 5 0 0 1 11 12"></path>
    <path d="M14 13a3.5 3.5 0 0 0-7 0c0 1.7 1.2 3.2 2.8 3.8A5 5 0 0 1 14 21"></path>
  </svg>
);

export default Ingredients;
