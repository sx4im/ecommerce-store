import React, { useState, useEffect } from "react";
import { Product, sampleProducts } from "../src/entities/Product";
import HeroSection from "../Components/HeroSection";
import ProductCard from "../Components/ProductCard";
import { ArrowRight, Sparkles, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    setIsLoading(true);
    try {
      // Filter featured products from sample data
      const products = sampleProducts.filter(product => product.featured).slice(0, 6);
      setFeaturedProducts(products);
    } catch (error) {
      console.error("Error loading featured products:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-yellow-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-8 bg-red-500 border-4 border-black transform rotate-45"></div>
            <h2 className="font-brutal text-2xl sm:text-3xl md:text-5xl text-black transform -rotate-1">
              FEATURED ITEMS
            </h2>
              <div className="w-8 h-8 bg-red-500 border-4 border-black transform -rotate-45"></div>
            </div>
            <p className="font-black text-lg max-w-2xl mx-auto">
              HANDPICKED ACCESSORIES THAT EVERYONE'S TALKING ABOUT!
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className={`bg-white border-4 border-black brutalist-shadow h-80 flex items-center justify-center transform ${i % 3 === 0 ? 'rotate-1' : i % 3 === 1 ? '-rotate-1' : ''}`}>
                  <div className="font-brutal text-lg sm:text-2xl">LOADING...</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 max-w-7xl mx-auto">
              {featuredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  className={`transform ${index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : ''} hover:rotate-0`}
                />
              ))}
            </div>
          )}
          
          <div className="text-center">
            <Link
              to={createPageUrl("Products")}
              className="bg-black text-yellow-400 px-8 py-4 border-4 border-black brutalist-shadow font-brutal text-xl hover:bg-gray-800 transition-colors duration-200 inline-flex items-center gap-3 transform hover:-translate-y-2"
            >
              VIEW ALL PRODUCTS
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-brutal text-3xl md:text-5xl text-black mb-6 transform rotate-1">
              WHY AFS CENTRE?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="bg-red-500 w-20 h-20 border-4 border-black brutalist-shadow mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-brutal text-xl mb-4">PREMIUM QUALITY</h3>
              <p className="font-bold text-gray-700">
                ONLY THE FINEST MATERIALS AND CRAFTSMANSHIP
              </p>
            </div>
            
            <div className="text-center transform rotate-2 hover:rotate-0 transition-transform">
              <div className="bg-green-500 w-20 h-20 border-4 border-black brutalist-shadow mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-brutal text-xl mb-4">FAST DELIVERY</h3>
              <p className="font-bold text-gray-700">
                QUICK WHATSAPP ORDERING & RAPID SHIPPING
              </p>
            </div>
            
            <div className="text-center transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-yellow-400 w-20 h-20 border-4 border-black brutalist-shadow mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-brutal text-xl mb-4">100% AUTHENTIC</h3>
              <p className="font-bold text-gray-700">
                GENUINE ACCESSORIES, NO COMPROMISES
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}