
// Centralized location for product images
import defaultProductImage from '@/assets/Natural-PostCuadrado.png';

// For uploaded images in Vite, we need to use relative paths
const aquaPlusImage = new URL('/lovable-uploads/11d0013e-fb29-42a4-944d-6eadf139d03b.png', import.meta.url).href;
const digestPlusImage = new URL('/lovable-uploads/d2412e7b-02ce-498d-b5b0-1b3a22f97d64.png', import.meta.url).href;
const glucoseLifePlusImage = new URL('/lovable-uploads/12254cd1-d2c7-45ce-965c-2b5dac6b6a98.png', import.meta.url).href;
const megaSlimPlusImage = new URL('/lovable-uploads/1cd7dc17-429e-430e-b4c7-808e52cb5b8e.png', import.meta.url).href;

export const productImages = {
  default: defaultProductImage,
  aquaPlus: aquaPlusImage,
  digestPlus: digestPlusImage,
  glucoseLifePlus: glucoseLifePlusImage,
  megaSlimPlus: megaSlimPlusImage,
};

export default productImages;
