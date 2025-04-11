
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import SmoothScrollLink from './ui/SmoothScrollLink';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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
          <Link to="/" className="flex items-center">
            <img src={logo} width={200} alt="Natural Plus Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium hover:text-primary btn-hover-effect"
            onClick={closeMobileMenu}
          >
            {t('menu.home')}
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium hover:text-primary btn-hover-effect bg-transparent p-0">
                  {t('menu.products')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <Link
                        to="/products/aqua-plus"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-blue/20 to-brand-blue/10 p-4 no-underline outline-none focus:shadow-md hover:bg-brand-blue/10"
                        onClick={closeMobileMenu}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Aqua Plus</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {t('product.aqua_plus.short_description')}
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/glucose-life-plus"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={closeMobileMenu}
                      >
                        <div className="text-sm font-medium leading-none">Glucose Life Plus</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('product.glucose_life.short_description')}
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/digest-plus"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={closeMobileMenu}
                      >
                        <div className="text-sm font-medium leading-none">Digest Plus</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('product.digest_plus.short_description')}
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/mega-slim-plus"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={closeMobileMenu}
                      >
                        <div className="text-sm font-medium leading-none">Mega Slim Plus</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('product.mega_slim.short_description')}
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://wa.me/13052158816', '_blank')}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            {t('menu.store')}
          </Button>
        </div>

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
            <Link 
              to="/" 
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={closeMobileMenu}
            >
              {t('menu.home')}
            </Link>
            
            {/* Mobile Products Menu */}
            <div className="py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t('menu.products')}</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  to="/products/aqua-plus"
                  className="block text-sm py-1 hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  Aqua Plus
                </Link>
                <Link 
                  to="/products/glucose-life-plus"
                  className="block text-sm py-1 hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  Glucose Life Plus
                </Link>
                <Link 
                  to="/products/digest-plus"
                  className="block text-sm py-1 hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  Digest Plus
                </Link>
                <Link 
                  to="/products/mega-slim-plus"
                  className="block text-sm py-1 hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  Mega Slim Plus
                </Link>
              </div>
            </div>
            
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
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white" onClick={() => window.open('https://wa.me/13052158816', '_blank')}>
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
