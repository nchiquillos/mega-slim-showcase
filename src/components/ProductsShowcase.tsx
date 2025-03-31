
import React from 'react';
import { Link } from 'react-router-dom';
import { productImages } from '@/assets/productImages';
import { useLanguage } from '@/context/LanguageContext';

const ProductsShowcase: React.FC = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      name: 'Aqua Plus',
      image: productImages.aquaPlus,
      description: t('product.aqua_plus.short_description'),
      path: '/products/aqua-plus'
    },
    {
      name: 'Glucose Life Plus',
      image: productImages.glucoseLifePlus,
      description: t('product.glucose_life.short_description'),
      path: '/products/glucose-life-plus'
    },
    {
      name: 'Digest Plus',
      image: productImages.digestPlus,
      description: t('product.digest_plus.short_description'),
      path: '/products/digest-plus'
    },
    {
      name: 'Mega Slim Plus',
      image: productImages.megaSlimPlus,
      description: t('product.mega_slim.short_description'),
      path: '/products/mega-slim-plus'
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Productos</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Descubre nuestra línea de suplementos naturales diseñados para mejorar tu bienestar
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link 
              to={product.path} 
              key={product.name} 
              className="group transition-transform hover:scale-105 duration-300"
            >
              <div className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
