
import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  product: z.string().min(1, { message: "Por favor seleccione un producto" }),
  phone: z.string().min(7, { message: "Ingrese un número de teléfono válido" }),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 18, {
    message: "Debe ser mayor de 18 años",
  }),
  email: z.string().email({ message: "Ingrese un correo electrónico válido" }),
  message: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar los términos y condiciones",
  }),
});

export type FormValues = z.infer<typeof formSchema>;

// EmailJS constants
export const SERVICE_ID = 'default_service'; // Replace with your EmailJS service ID
export const TEMPLATE_ID = 'template_contact_form'; // Replace with your EmailJS template ID
