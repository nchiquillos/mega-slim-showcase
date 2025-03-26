
import React from 'react';
import { cn } from '@/lib/utils';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  href,
  children,
  className,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      });
    }
    
    if (onClick) onClick();
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={cn("transition-all duration-300", className)}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;
