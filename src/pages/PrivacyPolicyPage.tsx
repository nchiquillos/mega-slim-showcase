
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('footer.privacy')}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Última actualización: 16 de Abril, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Información que Recopilamos</h2>
            <p>En Natural Plus, recopilamos diferentes tipos de información para proporcionar y mejorar nuestros servicios. Esta información incluye:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Información personal:</strong> Nombre, dirección de correo electrónico, dirección de envío, número de teléfono.</li>
              <li className="mb-2"><strong>Información de pago:</strong> Datos de tarjetas de crédito (procesados a través de un proveedor de pago seguro).</li>
              <li className="mb-2"><strong>Información de uso:</strong> Datos sobre cómo interactúa con nuestro sitio web y servicios.</li>
              <li className="mb-2"><strong>Información del dispositivo:</strong> Datos técnicos de su dispositivo y conexión a Internet.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cómo Utilizamos su Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Procesar y entregar sus pedidos</li>
              <li className="mb-2">Gestionar su cuenta y proporcionarle soporte al cliente</li>
              <li className="mb-2">Personalizar su experiencia y ofrecerle productos que puedan interesarle</li>
              <li className="mb-2">Mejorar nuestro sitio web y servicios</li>
              <li className="mb-2">Comunicarnos con usted sobre promociones, nuevos productos y actualizaciones</li>
              <li className="mb-2">Cumplir con nuestras obligaciones legales</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Compartición de Información</h2>
            <p>No vendemos, comerciamos ni transferimos de otra manera su información personal a terceros sin su consentimiento, excepto en las siguientes circunstancias:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Con proveedores de servicios que nos ayudan en nuestras operaciones comerciales</li>
              <li className="mb-2">Cuando creemos que la divulgación es necesaria para proteger nuestros derechos o cumplir con un proceso legal</li>
              <li className="mb-2">Si participamos en una fusión, adquisición o venta de activos</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Seguridad de los Datos</h2>
            <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso, uso o divulgación no autorizados.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sus Derechos</h2>
            <p>Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, que incluyen:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Acceder a la información personal que tenemos sobre usted</li>
              <li className="mb-2">Corregir información inexacta o incompleta</li>
              <li className="mb-2">Solicitar la eliminación de su información personal</li>
              <li className="mb-2">Oponerse al procesamiento de su información</li>
              <li className="mb-2">Solicitar la portabilidad de sus datos</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cambios a esta Política</h2>
            <p>Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contáctenos</h2>
            <p>Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Por correo electrónico: info@naturalplus.com</li>
              <li className="mb-2">Por teléfono: +1 (305) 215-8816</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicyPage;
