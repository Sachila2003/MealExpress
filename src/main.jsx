import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import HomePage from './components/pages/HomePage.jsx';
import MenuPage from './components/pages/MenuPage.jsx';
import CheckoutPage from './components/pages/CheckoutPage.jsx';
import RestaurantsPage from './components/pages/RestaurantsPage.jsx';
import MyOrdersPage from './components/pages/MyOrdersPage.jsx';

import { CartProvider } from './context/CardContext';
import { OrderProvider } from './context/OrderContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderProvider>
      <CartProvider>
        <BrowserRouter>
          <App> 
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/restaurant/:id" element={<MenuPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/my-orders" element={<MyOrdersPage />} />
            </Routes>
          </App>
        </BrowserRouter>
      </CartProvider>
    </OrderProvider>
  </React.StrictMode>
);