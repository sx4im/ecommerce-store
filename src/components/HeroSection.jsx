import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Star, MessageCircle, ShoppingBag } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-red-500 to-red-600 border-b-4 border-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 border-4 border-black transform rotate-45"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-black transform -rotate-12"></div>
        <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-yellow-400 border-4 border-black transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-white border-4 border-black transform -rotate-45"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-400 border-4 border-black brutalist-shadow p-2 transform -rotate-6">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <span className="bg-white text-black px-4 py-2 border-3 border-black font-brutal text-sm transform rotate-2">
                  PREMIUM QUALITY
                </span>
              </div>
              
              <h1 className="font-brutal text-3xl sm:text-4xl md:text-6xl text-white leading-tight transform -rotate-1">
                BOLD
                <br />
                ACCESSORIES
                <br />
                <span className="text-yellow-400">FOR YOU</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-black text-white max-w-lg transform rotate-0.5">
                DISCOVER UNIQUE ACCESSORIES THAT MAKE A STATEMENT. ORDER DIRECTLY VIA WHATSAPP!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={createPageUrl("Products")}
                className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 border-4 border-black brutalist-shadow font-brutal text-base sm:text-lg hover:bg-yellow-300 transition-colors duration-200 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                SHOP NOW
              </Link>
              
              <a
                href="https://wa.me/+923251462621?text=Hi! I want to see your latest collection"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-black px-6 sm:px-8 py-3 sm:py-4 border-4 border-black brutalist-shadow font-brutal text-base sm:text-lg hover:bg-green-400 transition-colors duration-200 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WHATSAPP
              </a>
            </div>
          </div>
          
          {/* Right Content - Featured Product */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-white border-4 border-black brutalist-shadow transform rotate-0 hover:rotate-3 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1665398921338-949789aa4db2?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Premium Watch"
                className="w-full h-80 object-cover border-b-4 border-black"
              />
              <div className="p-6">
                <div className="bg-red-500 text-white px-3 py-1 border-3 border-black brutalist-shadow-sm font-brutal text-sm inline-block transform -rotate-6 mb-4">
                  BESTSELLER
                </div>
                <h3 className="font-brutal text-xl mb-2">PREMIUM WATCH</h3>
                <p className="font-bold text-2xl text-red-500">PKR 29,900</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 border-4 border-black brutalist-shadow font-brutal transform rotate-12">
              NEW!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}