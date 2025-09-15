import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './entities/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
