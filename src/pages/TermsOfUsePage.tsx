
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TermsOfUsePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('footer.terms')}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Última actualización: 16 de Abril, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos de Uso y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, está prohibido usar o acceder a este sitio.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso de la Licencia</h2>
            <p>Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Natural Plus para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Modificar o copiar los materiales</li>
              <li className="mb-2">Usar los materiales para cualquier propósito comercial</li>
              <li className="mb-2">Intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web</li>
              <li className="mb-2">Eliminar cualquier copyright u otras notaciones de propiedad de los materiales</li>
              <li className="mb-2">Transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Descargo de Responsabilidad</h2>
            <p>Los materiales en el sitio web de Natural Plus se proporcionan "tal cual". Natural Plus no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitaciones</h2>
            <p>En ningún caso Natural Plus o sus proveedores serán responsables por cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la incapacidad de usar los materiales en el sitio web de Natural Plus, incluso si Natural Plus o un representante autorizado ha sido notificado oralmente o por escrito de la posibilidad de tales daños.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Precisión de los Materiales</h2>
            <p>Los materiales que aparecen en el sitio web de Natural Plus podrían incluir errores técnicos, tipográficos o fotográficos. Natural Plus no garantiza que cualquiera de los materiales en su sitio web sea preciso, completo o actual. Natural Plus puede realizar cambios a los materiales contenidos en su sitio web en cualquier momento sin previo aviso.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Enlaces</h2>
            <p>Natural Plus no ha revisado todos los sitios enlazados a su sitio web y no es responsable por el contenido de dichos sitios enlazados. La inclusión de cualquier enlace no implica aprobación por parte de Natural Plus del sitio. El uso de cualquier sitio web enlazado es bajo el propio riesgo del usuario.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modificaciones</h2>
            <p>Natural Plus puede revisar estos Términos de Uso para su sitio web en cualquier momento sin previo aviso. Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos de Uso.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Ley Aplicable</h2>
            <p>Estos términos y condiciones se rigen y se interpretan de acuerdo con las leyes aplicables y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales de esa jurisdicción.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contáctenos</h2>
            <p>Si tiene alguna pregunta sobre estos Términos de Uso, puede contactarnos:</p>
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

export default TermsOfUsePage;
