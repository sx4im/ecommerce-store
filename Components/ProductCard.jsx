import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../src/utils";

export default function ProductCard({ product, className = "" }) {
  const whatsappMessage = `Hi! I'm interested in ${product.name}. Please send me more details and pricing.`;
  const whatsappUrl = `https://wa.me/+923251462621?text=${encodeURIComponent(whatsappMessage)}`;
  const productUrl = createPageUrl(`Product?id=${product.id}`);

  return (
    <div className={`bg-white border-4 border-black brutalist-shadow transform hover:-translate-y-2 hover:rotate-0 transition-all duration-300 relative ${className}`}>
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover border-b-4 border-black"
        />
        {product.featured && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 border-3 border-black brutalist-shadow-sm font-brutal text-xs transform rotate-12">
            HOT!
          </div>
        )}
        {!product.available && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <span className="bg-yellow-400 text-black px-4 py-2 border-3 border-black font-brutal transform -rotate-6">
              SOLD OUT
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        {/* Add decorative elements */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 border-2 border-black transform rotate-45"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 border-2 border-black transform -rotate-12"></div>
        
        <div className="mb-3">
          <span className="bg-yellow-400 text-black px-2 py-1 border-2 border-black font-brutal text-xs inline-block transform -rotate-1">
            {product.category.toUpperCase().replace('_', ' ')}
          </span>
        </div>
        
        <h3 className="font-brutal text-base sm:text-lg mb-3 leading-tight">
          {product.name.toUpperCase()}
        </h3>
        
        <p className="text-gray-700 mb-4 font-medium text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>
        
        <div className="space-y-3">
          <div className="text-left">
            <span className="font-brutal text-xl sm:text-2xl text-red-500 inline-block">
              PKR {product.price.toLocaleString('en-PK')}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={productUrl}
              className="bg-blue-500 text-white px-3 py-2.5 border-3 border-black font-brutal text-xs sm:text-sm hover:bg-blue-400 transition-colors text-center"
            >
              VIEW
            </Link>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-3 py-2.5 border-3 border-black font-brutal text-xs sm:text-sm hover:bg-green-400 transition-colors text-center"
            >
              ORDER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}