// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import WebRoutes from './Routes'
import { CartProvider } from './CartContext';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <WebRoutes />
  </CartProvider>
);
