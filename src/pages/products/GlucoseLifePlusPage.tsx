
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { productImages } from '@/assets/productImages';
import { LanguageProvider } from '@/context/LanguageContext';
import { translations } from '@/assets/data';

const GlucoseLifePlusPage: React.FC = () => {
  return (
    <LanguageProvider translations={translations}>
      <ProductLayout
        name="Glucose Life Plus"
        imageUrl={productImages.glucoseLifePlus}
        benefits={[
          'Combate los síntomas de azúcar alta como visión borrosa y hormigueo en manos y pies',
          'Alivia la fatiga, el cansancio y la neuropatía diabética',
          'Reduce la sed constante asociada con niveles altos de azúcar',
          'Fortalece el sistema inmunológico',
          'Ayuda a reequilibrar los niveles de azúcar en la sangre',
          'Regenera los tejidos del páncreas'
        ]}
        ingredients={[
          {
            name: 'Polvo de raíz de Yacon',
            description: 'Yacon es un tubérculo cultivado en las montañas de los Andes. Es un alimento que proporciona pocas calorías. Su alto contenido de fibra, como la inulina, proporciona una sensación de saciedad y, por otro lado, regula el tránsito intestinal. Sus componentes antioxidantes previenen la formación de radicales libres y mejoran el uso de grasas para la energía.'
          }
        ]}
        dosage="Se recomienda tomar a partir de 2 cápsulas al día."
      >
        <p>
          Glucose Life Plus es un suplemento natural formulado específicamente para ayudar a regular los niveles 
          de azúcar en la sangre. Su ingrediente principal, el polvo de raíz de Yacon, es reconocido por sus 
          propiedades para controlar la glucemia y proporcionar sensación de saciedad.
        </p>
        <p>
          Este producto está diseñado para combatir los síntomas asociados con la azúcar alta mientras fortalece 
          el sistema inmunológico. A diferencia de otros productos, Glucose Life Plus contiene componentes 
          antioxidantes que previenen la formación de radicales libres y mejoran el uso de grasas para la energía.
        </p>
      </ProductLayout>
    </LanguageProvider>
  );
};

export default GlucoseLifePlusPage;
