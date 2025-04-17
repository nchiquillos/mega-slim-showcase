
import React, { useRef, useEffect } from 'react';
import { Form } from '@/components/ui/form';
import { useContactForm } from './contact/useContactForm';
import { NameField, PhoneField } from './contact/FormFields';
import SubmitButton from './contact/SubmitButton';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const { form, onSubmit, isSubmitting } = useContactForm();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div 
      ref={formRef}
      className="bg-white rounded-xl shadow-xl p-6 md:p-8 animated-element"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NameField form={form} />
            <PhoneField form={form} />
          </div>
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

