
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import SmoothScrollLink from './ui/SmoothScrollLink';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <a href="/" className="flex items-center">
              <a href="/" className="flex items-center">
            <img src={logo}width={200} />
          </a>
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              Natural health supplements for a better life. Our mission is to help you achieve your health goals naturally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <SmoothScrollLink 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('menu.home')}
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink 
                  href="#benefits" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('menu.benefits')}
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink 
                  href="#ingredients" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('menu.ingredients')}
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink 
                  href="#testimonials" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('menu.testimonials')}
                </SmoothScrollLink>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">{t('footer.phone')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">{t('footer.email')}</span>
              </li>
            </ul>
          </div>
          
          {/* Legal & Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
            <div>
              <h4 className="text-sm font-medium mb-2">Language</h4>
              <LanguageSelector className="justify-start" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
