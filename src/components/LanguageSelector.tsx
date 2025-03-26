
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Flag } from 'lucide-react';

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
          "text-sm font-medium transition-colors flex items-center gap-1.5",
          language === 'es' 
            ? "text-primary underline underline-offset-4" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Flag size={16} className="text-red-500" />
        ES
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          "text-sm font-medium transition-colors flex items-center gap-1.5",
          language === 'en' 
            ? "text-primary underline underline-offset-4" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Flag size={16} className="text-blue-500" />
        EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
