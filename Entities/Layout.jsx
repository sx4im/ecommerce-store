import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../src/utils";
import { ShoppingBag, Home, Package, Phone } from "lucide-react";

const navigationItems = [
{
  title: "HOME",
  url: createPageUrl("Home"),
  icon: Home
},
{
  title: "PRODUCTS",
  url: createPageUrl("Products"),
  icon: Package
},
{
  title: "CONTACT",
  url: "https://wa.me/+923251462621",
  icon: Phone,
  external: true
}];


export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-yellow-100">
      <style>
        {`
          * {
            box-shadow: none !important;
          }
          .brutalist-shadow {
            box-shadow: 6px 6px 0px #000000 !important;
          }
          .brutalist-shadow-sm {
            box-shadow: 4px 4px 0px #000000 !important;
          }
          .brutalist-text-shadow {
            text-shadow: 3px 3px 0px #000000;
          }
          .font-brutal {
            font-family: 'Arial Black', 'Helvetica', sans-serif;
            font-weight: 900;
            letter-spacing: -0.02em;
          }
        `}
      </style>

      {/* Header */}
      <header className="bg-red-500 border-b-4 border-black relative">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black border-3 sm:border-4 border-black brutalist-shadow-sm flex items-center justify-center transform -rotate-2">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              </div>
              <div className="transform rotate-1">
                <h1 className="font-brutal text-xl sm:text-2xl md:text-4xl text-yellow-400">AFS</h1>
                <p className="font-brutal text-xs sm:text-sm md:text-lg text-white">CENTRE</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {navigationItems.map((item) =>
              item.external ?
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-yellow-400 px-6 py-3 border-4 border-black brutalist-shadow font-brutal text-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200 transform hover:-translate-y-1">

                    {item.title}
                  </a> :

              <Link
                key={item.title}
                to={item.url}
                className={`px-6 py-3 border-4 border-black brutalist-shadow font-brutal text-lg transition-colors duration-200 transform hover:-translate-y-1 ${
                location.pathname === item.url ?
                'bg-yellow-400 text-black' :
                'bg-white text-black hover:bg-yellow-400'}`
                }>

                    {item.title}
                  </Link>

              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="bg-black text-yellow-400 px-3 py-2 sm:p-3 border-3 sm:border-4 border-black brutalist-shadow font-brutal text-sm sm:text-base">
                MENU
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 border-4 border-black transform rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-4 left-1/4 w-6 h-6 bg-black transform -rotate-12 hidden lg:block"></div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b-4 border-black">
        <div className="flex justify-around py-3 px-2">
          {navigationItems.map((item) =>
          item.external ?
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-black hover:text-red-500 min-w-0 flex-1">

                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-brutal text-xs truncate">{item.title}</span>
              </a> :

          <Link
            key={item.title}
            to={item.url}
            className={`flex flex-col items-center gap-1 min-w-0 flex-1 ${
            location.pathname === item.url ? 'text-red-500' : 'text-black'}`
            }>

                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-brutal text-xs truncate">{item.title}</span>
              </Link>

          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-yellow-400 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="transform -rotate-1">
              <h3 className="font-brutal text-xl mb-4">AFS CENTRE</h3>
              <p className="font-bold">YOUR PREMIUM ACCESSORIES DESTINATION</p>
            </div>
            <div className="transform rotate-1">
              <h4 className="font-brutal text-lg mb-4">QUICK ORDER</h4>
              <a
                href="https://wa.me/+923251462621?text=Hi! I want to order from AFS Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-black px-6 py-3 border-4 border-black brutalist-shadow font-brutal inline-block hover:bg-green-400 transition-colors">

                WHATSAPP US
              </a>
            </div>
            <div className="transform -rotate-1">
              <h4 className="font-brutal text-lg mb-4">FOLLOW US</h4>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-500 border-4 border-black brutalist-shadow flex items-center justify-center font-brutal">
                  IG
                </div>
                <div className="w-12 h-12 bg-blue-500 border-4 border-black brutalist-shadow flex items-center justify-center font-brutal">
                  FB
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-4 border-yellow-400 mt-8 pt-8 text-center">
            <p className="font-brutal">© 2024 AFS CENTRE - ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </div>);

}