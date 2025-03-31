
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { productImages } from '@/assets/productImages';
import { LanguageProvider } from '@/context/LanguageContext';
import { translations } from '@/assets/data';

const DigestPlusPage: React.FC = () => {
  return (
    <LanguageProvider translations={translations}>
      <ProductLayout
        name="Digest Plus"
        imageUrl={productImages.digestPlus}
        benefits={[
          'Regularidad digestiva natural, sin dependencia',
          'Reducción de la hinchazón y gases',
          'Alivio del estreñimiento ocasional',
          'Mayor confort digestivo durante todo el día',
          'Mejora en la absorción de nutrientes',
          'Sensación de ligereza y bienestar general'
        ]}
        ingredients={[
          {
            name: 'Psyllium',
            description: 'Es la parte externa de la semilla de Plantago Ovata. Por la gran cantidad y calidad de fibra soluble que contiene, se utiliza de forma terapéutica para favorecer el tránsito intestinal, previniendo el estreñimiento y manteniendo la flora bacteriana sana y activa. Actúa como un "cepillo intestinal", limpiando suavemente el sistema digestivo y promoviendo movimientos intestinales regulares.'
          },
          {
            name: 'Aloe Vera',
            description: 'Para el estreñimiento es un remedio natural realmente muy eficaz para combatir todos los síntomas que provoca este trastorno gastrointestinal. Alivia los dolores abdominales tan molestos, reduce la hinchazón del vientre y deshace la sensación de pesadez. Ayuda a reducir la inflamación y alivia la irritación del tracto digestivo.'
          },
          {
            name: 'Cáscara Sagrada',
            description: 'Un ingrediente tradicional reconocido por su efectividad para estimular naturalmente el tránsito intestinal, sin los efectos agresivos de otros laxantes. Sus componentes sirven como purgante en los intestinos combatiendo el estreñimiento.'
          }
        ]}
        dosage="Su acción consiste en suavizar y regular las heces fecales, elimina los depósitos y toxinas de los intestinos. Digest Plus no crea hábito ni dependencia."
      >
        <p>
          Digest Plus es una combinación única de ingredientes naturales diseñada para mejorar tu digestión y promover un tránsito intestinal saludable. 
          A diferencia de otros productos del mercado, Digest Plus no causa dependencia y trabaja en armonía con tu cuerpo, no contra él.
        </p>
        <p>
          Lo que hace único a Digest Plus es su poderosa combinación de tres ingredientes naturales: Psyllium, Aloe Vera y Cáscara Sagrada, 
          cuidadosamente seleccionados para trabajar en sinergia y proporcionar una solución completa para el bienestar digestivo.
        </p>
      </ProductLayout>
    </LanguageProvider>
  );
};

export default DigestPlusPage;
