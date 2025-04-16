
import React from 'react';
import { Link } from 'react-router-dom';
import { productImages } from '@/assets/productImages';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const ProductsShowcase: React.FC = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      name: 'Aqua Plus',
      image: productImages.aquaPlus,
      description: t('product.aqua_plus.short_description'),
      path: '/products/aqua-plus',
      price: 215
    },
    {
      name: 'Glucose Life Plus',
      image: productImages.glucoseLifePlus,
      description: t('product.glucose_life.short_description'),
      path: '/products/glucose-life-plus',
      price: 215
    },
    {
      name: 'Digest Plus',
      image: productImages.digestPlus,
      description: t('product.digest_plus.short_description'),
      path: '/products/digest-plus',
      price: 215
    },
    {
      name: 'Mega Slim Plus',
      image: productImages.megaSlimPlus,
      description: t('product.mega_slim.short_description'),
      path: '/products/mega-slim-plus',
      price: 215
    }
  ];

  const handleBuyNow = () => {
    window.open('https://wa.me/13052158816', '_blank');
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Productos</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Descubre nuestra línea de suplementos naturales diseñados para mejorar tu bienestar
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.name} 
              className="group transition-transform hover:scale-105 duration-300"
            >
              <div className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Link to={product.path}>
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <Link to={product.path}>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-2xl font-bold text-brand-blue">${product.price} x3</p>
                    <p className="text-sm text-gray-600 -mt-1 mb-2">Tratamiento mínimo: 3 meses</p>
                    <Button 
                      onClick={handleBuyNow}
                      className="w-full bg-[#8B5CF6] hover:bg-[#7c4df3] text-white font-medium py-2 px-4 rounded-md transition-all shadow-md hover:shadow-lg"
                      size="lg"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" /> Comprar Ahora
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
