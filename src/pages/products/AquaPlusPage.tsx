
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { productImages } from '@/assets/productImages';

const AquaPlusPage: React.FC = () => {
  return (
    <ProductLayout
      name="Aqua Plus"
      imageUrl={productImages.default}
      benefits={[
        'Regula los niveles de azúcar en la sangre',
        'Ayuda a normalizar y regenerar el tejido pancreático',
        'Combate síntomas asociados con azúcar alta como mala visión, fatiga y hormigueo en manos y pies',
        'Fortalece el sistema inmunológico',
        'Genera más energía, reduce la fatiga y los antojos de comida',
        'Proporciona estados de ánimo más uniformes y mejor concentración'
      ]}
      ingredients={[
        {
          name: 'Spirulina (Aphanizomenon flos–aquae)',
          description: 'Microalga azul verdosa que vive en aguas dulces y salobres de todo el mundo, incluidos los Grandes Lagos y el Mar Báltico, Canadá, Alemania y China. Contiene más de 300 moléculas de aminoácidos en un solo gramo, esenciales para el funcionamiento de nuestro organismo.'
        },
        {
          name: 'Complejo de Aminoácidos',
          description: 'Este conjunto de aminoácidos desempeña un papel crucial en el hígado, tiene propiedades antiestrés, desintoxicantes e inmunitarias y ayuda a reducir el colesterol. Aportan vitalidad y energía, pero también permiten una mejor comunicación entre las neuronas y el cerebro.'
        }
      ]}
      dosage="Se recomienda tomar 2 cápsulas al día."
    >
      <p>
        Aqua Plus es un suplemento natural diseñado para ayudar a regular los niveles de azúcar en la sangre. 
        Formulado con Spirulina de la más alta calidad, este producto ofrece un enfoque natural para combatir 
        los síntomas asociados con la azúcar alta mientras fortalece el sistema inmunológico.
      </p>
      <p>
        La microalga azul verdosa (Aphanizomenon flos–aquae) contenida en nuestra fórmula es rica en aminoácidos 
        esenciales que contribuyen al bienestar general, aportando vitalidad, energía y mejor concentración.
      </p>
    </ProductLayout>
  );
};

export default AquaPlusPage;
