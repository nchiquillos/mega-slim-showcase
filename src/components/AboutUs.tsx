
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-brand-green/5 to-brand-blue/5">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="animated-element">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-brand-green/10 text-brand-green">
              Conócenos
            </span>
            <h2 className="section-title">Quienes Somos</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Somos uno de los laboratorios líderes en la industria naturista con gran cobertura a nivel mundial, 
              contamos con personal con más de 20 años de experiencia llevando bienestar, salud, belleza de gran 
              calidad mejorando la estilo de vida de muchas personas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">MISIÓN</h3>
              <p className="text-gray-700">
                Brindar soluciones saludables, efectivas y de alta calidad a todos nuestros clientes, 
                por medio de nuestros productos naturales.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-brand-green mb-4">VISIÓN</h3>
              <p className="text-gray-700">
                Ser una referencia del sector salud a nivel nacional e internacional, innovando y 
                desarrollando con los mas altos estándares tecnológicos y de calidad nuevas lineas 
                de productos naturales que brinden soluciones efectivas a todos nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
