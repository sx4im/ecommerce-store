import React, { useState, useEffect } from "react";
import { Product, sampleProducts } from "../src/entities/Product";
import { ArrowLeft, Share2, Heart, ShoppingCart, Star } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { createPageUrl } from "../src/utils";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    loadProduct();
  }, [searchParams]);

  const loadProduct = async () => {
    setIsLoading(true);
    try {
      // Get product ID from URL search params
      const productId = searchParams.get('id');
      
      if (productId) {
        // Find product in sample data
        const productData = sampleProducts.find(p => p.id === parseInt(productId));
        setProduct(productData);
      } else {
        // Default to first product if no ID
        setProduct(sampleProducts[0]);
      }
    } catch (error) {
      console.error("Error loading product:", error);
    }
    setIsLoading(false);
  };

  const handleWhatsAppOrder = () => {
    if (!product) return;
    
    const message = `Hi! I want to order:
    
Product: ${product.name}
Price: PKR ${product.price.toLocaleString('en-PK')}
Quantity: ${quantity}
Total: PKR ${(product.price * quantity).toLocaleString('en-PK')}

Please confirm availability and shipping details.`;

    const whatsappUrl = `https://wa.me/+923251462621?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at AFS Centre`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <div className="bg-white border-4 border-black brutalist-shadow p-8 transform -rotate-2">
          <div className="font-brutal text-2xl">LOADING PRODUCT...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <div className="bg-white border-4 border-black brutalist-shadow p-8 text-center transform rotate-2">
          <h2 className="font-brutal text-2xl mb-4">PRODUCT NOT FOUND</h2>
          <Link
            to={createPageUrl("Products")}
            className="bg-red-500 text-white px-6 py-3 border-3 border-black brutalist-shadow font-brutal inline-block hover:bg-red-400"
          >
            BACK TO PRODUCTS
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.imageUrl]; // In real app, you'd have multiple images

  return (
    <div className="min-h-screen bg-yellow-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b-4 border-black py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to={createPageUrl("Products")}
            className="bg-black text-yellow-400 px-4 py-2 border-3 border-black brutalist-shadow font-brutal inline-flex items-center gap-2 hover:bg-gray-800 transform -rotate-1 hover:rotate-0 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
            BACK TO PRODUCTS
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 md:h-[500px] object-cover border-4 border-black brutalist-shadow transform rotate-1 hover:rotate-0 transition-transform"
              />
              {product.featured && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 border-3 border-black brutalist-shadow font-brutal transform rotate-12">
                  FEATURED!
                </div>
              )}
              {!product.available && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                  <span className="bg-yellow-400 text-black px-8 py-4 border-4 border-black brutalist-shadow font-brutal text-xl transform -rotate-6">
                    SOLD OUT
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 border-3 border-black brutalist-shadow font-brutal text-sm inline-block transform -rotate-2">
                  {product.category.toUpperCase().replace('_', ' ')}
                </span>
              </div>
              
              <h1 className="font-brutal text-3xl md:text-5xl mb-4 transform rotate-1">
                {product.name.toUpperCase()}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="font-brutal text-4xl text-red-500 brutalist-text-shadow">
                  PKR {product.price.toLocaleString('en-PK')}
                </span>
                <div className="flex items-center gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-brutal ml-2">(4.9/5)</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black brutalist-shadow p-6 transform -rotate-1">
              <p className="font-bold text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-3 py-1 border-2 border-black font-brutal text-xs transform rotate-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <label className="font-brutal text-lg">QUANTITY:</label>
                <div className="flex items-center border-4 border-black bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 font-brutal text-xl hover:bg-gray-100 border-r-4 border-black"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-brutal text-xl">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 font-brutal text-xl hover:bg-gray-100 border-l-4 border-black"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={!product.available}
                  className="w-full bg-green-500 text-black px-8 py-4 border-4 border-black brutalist-shadow font-brutal text-xl hover:bg-green-400 transition-colors duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-6 h-6" />
                  ORDER VIA WHATSAPP - PKR {(product.price * quantity).toLocaleString('en-PK')}
                </button>

                <div className="flex gap-4">
                  <button
                    onClick={handleShare}
                    className="flex-1 bg-blue-500 text-white px-6 py-3 border-3 border-black brutalist-shadow font-brutal hover:bg-blue-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    SHARE
                  </button>
                  
                  <button className="bg-red-500 text-white px-6 py-3 border-3 border-black brutalist-shadow hover:bg-red-400 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-black text-yellow-400 p-6 border-4 border-black brutalist-shadow transform rotate-1">
              <h3 className="font-brutal text-xl mb-4">PRODUCT FEATURES</h3>
              <ul className="space-y-2 font-bold">
                <li>✓ PREMIUM QUALITY MATERIALS</li>
                <li>✓ FAST WHATSAPP DELIVERY</li>
                <li>✓ 100% AUTHENTIC GUARANTEE</li>
                <li>✓ 30-DAY RETURN POLICY</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}