
import React from 'react';
import { Button } from '@/components/ui/button';
import { SendIcon } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          Enviando...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          Enviar consulta
          <SendIcon className="h-4 w-4" />
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
