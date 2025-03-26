
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Truck } from 'lucide-react';

const CallToAction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue/5 to-brand-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-brand-orange/10 text-brand-orange">
            Mega Slim Plus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 group w-full sm:w-auto"
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-blue" />
              <span>{t('cta.note')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
