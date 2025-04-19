
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { formSchema, FormValues, SERVICE_ID, TEMPLATE_ID } from './contactFormSchema';

export const useContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Enviando formulario", data);
      
      // Prepare the template parameters for EmailJS
      const templateParams = {
        name: data.name,
        phone: data.phone,
        to_email: 'nelsonf@gncnaturalplus.com',
        website: 'https://www.gncnaturalplus.com/',
      };

      console.log("Template params:", templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        toast.success("Formulario enviado con éxito. ¡Gracias por su interés!");
        form.reset();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hubo un problema al enviar el formulario. Por favor intente nuevamente.");
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting
  };
};
