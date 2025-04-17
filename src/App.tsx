
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AquaPlusPage from "./pages/products/AquaPlusPage";
import GlucoseLifePlusPage from "./pages/products/GlucoseLifePlusPage";
import DigestPlusPage from "./pages/products/DigestPlusPage";
import MegaSlimPlusPage from "./pages/products/MegaSlimPlusPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';
import { LanguageProvider } from "@/context/LanguageContext";

// Import translations
import translations from './translations';

const queryClient = new QueryClient();

// EmailJS public key (safe to expose in client-side code)
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // You need to replace this with your actual EmailJS public key

const App = () => {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider translations={translations}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products/aqua-plus" element={<AquaPlusPage />} />
              <Route path="/products/glucose-life-plus" element={<GlucoseLifePlusPage />} />
              <Route path="/products/digest-plus" element={<DigestPlusPage />} />
              <Route path="/products/mega-slim-plus" element={<MegaSlimPlusPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
