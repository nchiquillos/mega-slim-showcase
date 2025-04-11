
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
import { useEffect } from "react";
import emailjs from '@emailjs/browser';

const queryClient = new QueryClient();

// Replace with your actual EmailJS public key
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const App = () => {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/aqua-plus" element={<AquaPlusPage />} />
            <Route path="/products/glucose-life-plus" element={<GlucoseLifePlusPage />} />
            <Route path="/products/digest-plus" element={<DigestPlusPage />} />
            <Route path="/products/mega-slim-plus" element={<MegaSlimPlusPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
