import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductById from './components/ProductById';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product-by-id" element={<ProductById />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
