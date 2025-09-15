
import React, { useState, useEffect } from "react";
import { sampleProducts } from "../entities/Product";
import ProductCard from "../components/ProductCard";
import { Search, Filter, X } from "lucide-react";

const categories = [
  { value: "all", label: "ALL ITEMS" },
  { value: "jewelry", label: "JEWELRY" },
  { value: "bags", label: "BAGS" },
  { value: "watches", label: "WATCHES" },
  { value: "belts", label: "BELTS" },
  { value: "sunglasses", label: "SUNGLASSES" },
  { value: "hats", label: "HATS" },
  { value: "scarves", label: "SCARVES" },
  { value: "phone_cases", label: "PHONE CASES" },
  { value: "keychains", label: "KEYCHAINS" },
  { value: "wallets", label: "WALLETS" }
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      // Load sample products
      setProducts(sampleProducts);
    } catch (error) {
      console.error("Error loading products:", error);
    }
    setIsLoading(false);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-yellow-100">
      {/* Header */}
      <section className="bg-red-500 border-b-4 border-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-brutal text-4xl md:text-6xl text-white brutalist-text-shadow mb-4 transform -rotate-1">
            ALL PRODUCTS
          </h1>
          <p className="font-black text-xl text-white">
            DISCOVER OUR COMPLETE COLLECTION OF PREMIUM ACCESSORIES
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b-4 border-black py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search - Mobile Only */}
            <div className="relative flex-1 max-w-lg lg:hidden">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-6 h-6" />
              <input
                type="text"
                placeholder="SEARCH PRODUCTS..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 border-4 border-black font-brutal text-lg sm:text-xl focus:outline-none focus:ring-0 bg-white brutalist-shadow-sm hover:bg-yellow-50 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-black text-yellow-400 px-6 py-3 border-4 border-black brutalist-shadow font-brutal flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              FILTERS
            </button>

            {/* Desktop Categories */}
            <div className="hidden lg:flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 border-3 border-black brutalist-shadow-sm font-brutal text-sm transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-black hover:bg-yellow-400'
                  }`}
                >
                  {category.label}
                </button>
              ))}
              {(selectedCategory !== "all" || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="bg-gray-500 text-white px-4 py-2 border-3 border-black brutalist-shadow-sm font-brutal text-sm hover:bg-gray-600 flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-yellow-100 border-4 border-black brutalist-shadow">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setSelectedCategory(category.value);
                      setShowFilters(false);
                    }}
                    className={`px-3 py-2 border-2 border-black font-brutal text-xs transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-black hover:bg-yellow-400'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={clearFilters}
                  className="bg-gray-500 text-white px-4 py-2 border-3 border-black font-brutal text-sm flex-1 flex items-center justify-center gap-1"
                >
                  <X className="w-4 h-4" />
                  CLEAR ALL
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search Results Info */}
      {(searchTerm || selectedCategory !== "all") && (
        <section className="bg-yellow-100 border-b-4 border-black py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="font-brutal text-lg">
                {filteredProducts.length} PRODUCT{filteredProducts.length !== 1 ? 'S' : ''} FOUND
                {searchTerm && (
                  <span className="text-red-500 ml-2">
                    FOR "{searchTerm.toUpperCase()}"
                  </span>
                )}
                {selectedCategory !== "all" && (
                  <span className="text-blue-500 ml-2">
                    IN {categories.find(c => c.value === selectedCategory)?.label}
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="bg-red-500 text-white px-4 py-2 border-3 border-black brutalist-shadow-sm font-brutal text-sm hover:bg-red-600 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                CLEAR FILTERS
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {Array(9).fill(0).map((_, i) => (
                <div key={i} className={`bg-white border-4 border-black brutalist-shadow h-80 flex items-center justify-center transform ${i % 3 === 0 ? 'rotate-1' : i % 3 === 1 ? '-rotate-1' : ''}`}>
                  <div className="font-brutal text-lg sm:text-xl">LOADING...</div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  className={`${index % 3 === 0 ? 'transform rotate-1' : index % 3 === 1 ? 'transform -rotate-1' : ''}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white border-4 border-black brutalist-shadow inline-block p-8 transform -rotate-2">
                <h3 className="font-brutal text-2xl mb-4">NO PRODUCTS FOUND</h3>
                <p className="font-bold text-gray-700 mb-6">
                  TRY DIFFERENT SEARCH TERMS OR CATEGORIES
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-red-500 text-white px-6 py-3 border-3 border-black brutalist-shadow font-brutal hover:bg-red-400"
                >
                  CLEAR FILTERS
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
