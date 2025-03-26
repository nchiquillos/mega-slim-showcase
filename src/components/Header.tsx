
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import SmoothScrollLink from './ui/SmoothScrollLink';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={logo}width={200} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <SmoothScrollLink 
            href="#home" 
            className="text-sm font-medium hover:text-primary btn-hover-effect"
          >
            {t('menu.home')}
          </SmoothScrollLink>
          <SmoothScrollLink 
            href="#benefits" 
            className="text-sm font-medium hover:text-primary btn-hover-effect"
          >
            {t('menu.benefits')}
          </SmoothScrollLink>
          <SmoothScrollLink 
            href="#ingredients" 
            className="text-sm font-medium hover:text-primary btn-hover-effect"
          >
            {t('menu.ingredients')}
          </SmoothScrollLink>
          <SmoothScrollLink 
            href="#testimonials" 
            className="text-sm font-medium hover:text-primary btn-hover-effect"
          >
            {t('menu.testimonials')}
          </SmoothScrollLink>
          <SmoothScrollLink 
            href="#contact" 
            className="text-sm font-medium hover:text-primary btn-hover-effect"
          >
            {t('menu.contact')}
          </SmoothScrollLink>
        </nav>
{/* 
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white transition-all duration-300 transform hover:scale-105">
            <ShoppingCart className="w-4 h-4 mr-2" />
            {t('menu.store')}
          </Button>
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <SmoothScrollLink 
              href="#home" 
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={closeMobileMenu}
            >
              {t('menu.home')}
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#benefits" 
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={closeMobileMenu}
            >
              {t('menu.benefits')}
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#ingredients" 
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={closeMobileMenu}
            >
              {t('menu.ingredients')}
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#testimonials" 
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={closeMobileMenu}
            >
              {t('menu.testimonials')}
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#contact" 
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={closeMobileMenu}
            >
              {t('menu.contact')}
            </SmoothScrollLink>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <LanguageSelector />
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t('menu.store')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
