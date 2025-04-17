
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FormValues } from './contactFormSchema';

interface NameFieldProps {
  form: UseFormReturn<FormValues>;
}

export const NameField: React.FC<NameFieldProps> = ({ form }) => (
  <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Nombre completo</FormLabel>
        <FormControl>
          <Input placeholder="Su nombre" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export const ProductField: React.FC<NameFieldProps> = ({ form }) => (
  <FormField
    control={form.control}
    name="product"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Producto de interés</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione un producto" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="aquaPlus">Aqua Plus</SelectItem>
            <SelectItem value="digestPlus">Digest Plus</SelectItem>
            <SelectItem value="glucoseLifePlus">Glucose Life Plus</SelectItem>
            <SelectItem value="megaSlimPlus">Mega Slim Plus</SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);

export const PhoneField: React.FC<NameFieldProps> = ({ form }) => (
  <FormField
    control={form.control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Número de teléfono</FormLabel>
        <FormControl>
          <Input placeholder="Su teléfono" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export const AgeField: React.FC<NameFieldProps> = ({ form }) => (
  <FormField
    control={form.control}
    name="age"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Edad</FormLabel>
        <FormControl>
          <Input type="number" placeholder="Su edad" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export const EmailField: React.FC<NameFieldProps> = ({ form }) => (
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Correo electrónico</FormLabel>
        <FormControl>
          <Input type="email" placeholder="Su correo" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export const MessageField: React.FC<NameFieldProps> = ({ form }) => (
  <FormField
    control={form.control}
    name="message"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Mensaje (opcional)</FormLabel>
        <FormControl>
          <Textarea 
            placeholder="Escriba aquí su mensaje o pregunta" 
            className="resize-none" 
            {...field} 
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export const TermsField: React.FC<NameFieldProps> = ({ form }) => (
  <FormField
    control={form.control}
    name="acceptTerms"
    render={({ field }) => (
      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
        <FormControl>
          <Checkbox
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        </FormControl>
        <div className="space-y-1 leading-none">
          <FormLabel>
            Acepto los términos y condiciones y la política de privacidad
          </FormLabel>
          <FormMessage />
        </div>
      </FormItem>
    )}
  />
);
