
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Check } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface ProductLayoutProps {
  name: string;
  imageUrl: string;
  children: React.ReactNode;
  benefits: string[];
  ingredients: {name: string; description: string}[];
  dosage?: string;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ 
  name,
  imageUrl,
  children,
  benefits,
  ingredients,
  dosage
}) => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/13052158816', '_blank');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{name}</h1>
                <div className="prose prose-lg max-w-none mb-8">
                  {children}
                </div>
                <Button 
                  size="lg" 
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 group"
                  onClick={handleWhatsAppClick}
                >
                  {t('cta.button')}
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Product image with decorative elements */}
                  <div className="relative z-10 animate-float">
                    <img 
                      src={imageUrl} 
                      alt={name} 
                      className="w-full max-w-sm mx-auto" 
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
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('benefits.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start p-6 bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mr-4 mt-1">
                    <div className="p-2 bg-brand-green/10 rounded-full">
                      <Check className="h-5 w-5 text-brand-green" />
                    </div>
                  </div>
                  <div>
                    <p className="text-base">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Ingredients Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('ingredients.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-3">{ingredient.name}</h3>
                  <p className="text-gray-700">{ingredient.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Dosage Section (if available) */}
        {dosage && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl font-bold text-center mb-8">Dosificación Recomendada</h2>
              <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
                <p className="text-lg text-center">{dosage}</p>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-brand-blue/5 to-brand-blue/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
            
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 group"
              onClick={handleWhatsAppClick}
            >
              {t('cta.button')}
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="mt-4 text-sm text-muted-foreground">{t('cta.note')}</p>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductLayout;
