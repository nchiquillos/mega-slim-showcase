
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('es')}
        className={cn(
          "text-sm font-medium transition-colors",
          language === 'es' 
            ? "text-primary underline underline-offset-4" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        ES
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          "text-sm font-medium transition-colors",
          language === 'en' 
            ? "text-primary underline underline-offset-4" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
