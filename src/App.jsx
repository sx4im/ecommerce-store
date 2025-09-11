import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Entities/Layout';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Product from '../Pages/Product';
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
