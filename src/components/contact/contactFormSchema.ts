
import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  phone: z.string().min(7, { message: "Ingrese un número de teléfono válido" }),
});

export type FormValues = z.infer<typeof formSchema>;

// EmailJS constants
export const SERVICE_ID = 'service_i64osbu';
export const TEMPLATE_ID = 'template_40jq33f';
