
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
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

