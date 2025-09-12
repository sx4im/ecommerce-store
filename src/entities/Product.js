// Product entity/model
export class Product {
  constructor(id, name, description, price, category, imageUrl, featured = false, available = true, tags = []) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.imageUrl = imageUrl;
    this.featured = featured;
    this.available = available;
    this.tags = tags;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Methods for product operations
  updateProduct(updates) {
    Object.assign(this, updates);
    this.updatedAt = new Date();
  }

  getFormattedPrice() {
    return `PKR ${this.price.toLocaleString('en-PK')}`;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      imageUrl: this.imageUrl,
      featured: this.featured,
      available: this.available,
      tags: this.tags,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

// Sample products data
export const sampleProducts = [
  new Product(1, "Premium Gold Chain Necklace", "Luxurious 18k gold plated chain necklace. Perfect for any occasion. Durable and elegant design.", 8999, "jewelry", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", true, true, ["gold", "chain", "luxury", "unisex"]),
  new Product(2, "Premium Watch", "Luxury timepiece with leather strap", 29900, "watches", "https://collectionbyrehan.shop/cdn/shop/files/EE18BBB1-868E-4460-9F81-AA4985E149F0.jpg?v=1752134427", true, true, ["watch", "luxury", "leather"]),
  new Product(3, "Designer Bag", "Elegant leather handbag", 19900, "bags", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", false, true, ["bag", "leather", "designer"]),
  new Product(4, "Pearl Necklace", "Beautiful white pearl necklace with elegant clasp", 14900, "jewelry", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", false, true, ["pearl", "elegant", "white"]),
  new Product(5, "Sunglasses", "Stylish UV protection sunglasses", 8900, "sunglasses", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", false, true, ["sunglasses", "uv", "style"]),
  new Product(6, "Leather Belt", "Genuine leather belt", 5900, "belts", "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500", false, true, ["belt", "leather", "genuine"]),
  new Product(7, "Diamond Ring", "Stunning diamond engagement ring", 59900, "jewelry", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", false, true, ["diamond", "ring", "engagement"]),
  new Product(8, "Luxury Wallet", "Premium leather wallet with multiple compartments", 7900, "wallets", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", false, true, ["wallet", "leather", "luxury"]),
  
  // Additional Products
  new Product(9, "Silver Bracelet", "Elegant sterling silver bracelet with intricate pattern design", 6499, "jewelry", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", false, true, ["silver", "bracelet", "sterling", "elegant"]),
  new Product(10, "Sports Watch", "Waterproof digital sports watch with GPS tracking", 15900, "watches", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", false, true, ["sports", "digital", "waterproof", "gps"]),
  new Product(11, "Crossbody Bag", "Compact crossbody bag perfect for daily use", 9900, "bags", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", false, true, ["crossbody", "compact", "daily", "casual"]),
  new Product(12, "Rose Gold Earrings", "Beautiful rose gold stud earrings with cubic zirconia", 4999, "jewelry", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", false, true, ["rose gold", "earrings", "stud", "zirconia"]),
  new Product(13, "Aviator Sunglasses", "Classic aviator sunglasses with polarized lenses", 12900, "sunglasses", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", false, true, ["aviator", "polarized", "classic", "pilot"]),
  new Product(14, "Designer Belt", "Italian leather designer belt with gold buckle", 8900, "belts", "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500", false, true, ["italian", "designer", "gold buckle", "leather"]),
  new Product(15, "Winter Hat", "Warm wool winter hat with stylish design", 3499, "hats", "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500", false, true, ["winter", "wool", "warm", "stylish"]),
  new Product(16, "Silk Scarf", "Luxurious silk scarf with floral pattern", 5499, "scarves", "https://images.unsplash.com/photo-1582142306909-195724d33de3?w=500", false, true, ["silk", "luxury", "floral", "pattern"]),
  new Product(17, "Phone Case", "Premium leather phone case with card slots", 2999, "phone_cases", "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500", false, true, ["leather", "phone", "cards", "premium"]),
  new Product(18, "Keychain", "Stylish metal keychain with brand logo", 1299, "keychains", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", false, true, ["metal", "logo", "stylish", "brand"]),
  new Product(19, "Card Wallet", "Minimalist card wallet with RFID protection", 4299, "wallets", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", false, true, ["minimalist", "rfid", "cards", "protection"]),
  new Product(20, "Statement Necklace", "Bold statement necklace perfect for special occasions", 11999, "jewelry", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", false, true, ["statement", "bold", "special", "occasion"]),
  new Product(21, "Smart Watch", "Latest smart watch with health monitoring features", 24900, "watches", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", true, true, ["smart", "health", "monitoring", "latest"]),
  new Product(22, "Evening Clutch", "Elegant evening clutch bag with gold chain", 13900, "bags", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", false, true, ["evening", "clutch", "gold chain", "elegant"]),
  new Product(23, "Vintage Sunglasses", "Retro vintage sunglasses with round frames", 7900, "sunglasses", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", false, true, ["vintage", "retro", "round", "frames"]),
  new Product(24, "Baseball Cap", "Adjustable baseball cap with embroidered logo", 2799, "hats", "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500", false, true, ["baseball", "adjustable", "embroidered", "logo"]),
];
