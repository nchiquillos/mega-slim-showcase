
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { productImages } from '@/assets/productImages';
import { LanguageProvider } from '@/context/LanguageContext';
import { translations } from '@/assets/data';

const MegaSlimPlusPage: React.FC = () => {
  return (
    <LanguageProvider translations={translations}>
      <ProductLayout
        name="Mega Slim Plus"
        imageUrl={productImages.default}
        benefits={[
          'Ayuda a controlar el apetito de forma natural',
          'Potencia el metabolismo para una quema de calorías más eficiente',
          'Contribuye al equilibrio de los niveles de azúcar en sangre',
          'Favorece la digestión y el bienestar general'
        ]}
        ingredients={[
          {
            name: 'Cromo metionina',
            description: 'Ayuda a regular los niveles de azúcar y reduce los antojos, contribuyendo a un mejor control del apetito y mantenimiento de niveles estables de energía durante el día.'
          },
          {
            name: 'Inositol',
            description: 'Mejora la sensibilidad a la insulina y apoya el metabolismo de las grasas, facilitando su utilización como fuente de energía en lugar de su acumulación.'
          },
          {
            name: 'Vitartrato de colina',
            description: 'Favorece el metabolismo de las grasas, actuando como un componente esencial para el transporte y procesamiento de lípidos en el cuerpo.'
          },
          {
            name: 'Betaína',
            description: 'Optimiza la digestión y el procesamiento de nutrientes, mejorando la eficiencia con la que el cuerpo absorbe vitaminas y minerales esenciales.'
          },
          {
            name: 'Lecitina',
            description: 'Contribuye a la emulsión de las grasas para su mejor aprovechamiento, ayudando a descomponer las grasas para facilitar su digestión y metabolismo.'
          }
        ]}
      >
        <p>
          Mega Slim Plus es un suplemento dietético avanzado diseñado para ayudarte a alcanzar tus objetivos 
          de control de peso de manera natural y efectiva. Nuestra fórmula exclusiva combina ingredientes 
          cuidadosamente seleccionados que trabajan en sinergia para potenciar tu metabolismo, controlar 
          el apetito y promover un bienestar general.
        </p>
        <p>
          A diferencia de otros productos, Mega Slim Plus no contiene estimulantes agresivos ni ingredientes 
          artificiales. Su combinación de componentes naturales como el cromo metionina, inositol y lecitina 
          está formulada para apoyar los procesos naturales de tu cuerpo, ayudándote a sentirte mejor mientras 
          alcanzas tus metas de salud y bienestar.
        </p>
      </ProductLayout>
    </LanguageProvider>
  );
};

export default MegaSlimPlusPage;
