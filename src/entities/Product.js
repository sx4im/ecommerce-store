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
  new Product(3, "Designer Bag", "Elegant leather handbag", 19900, "bags", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", true, true, ["bag", "leather", "designer"]),
  new Product(4, "Pearl Necklace", "Beautiful white pearl necklace with elegant clasp", 14900, "jewelry", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", false, true, ["pearl", "elegant", "white"]),
  new Product(5, "Sunglasses", "Stylish UV protection sunglasses", 8900, "sunglasses", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", false, true, ["sunglasses", "uv", "style"]),
  new Product(6, "Leather Belt", "Genuine leather belt", 5900, "belts", "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500", false, true, ["belt", "leather", "genuine"]),
  new Product(7, "Diamond Ring", "Stunning diamond engagement ring", 59900, "jewelry", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500", false, true, ["diamond", "ring", "engagement"]),
  new Product(8, "Luxury Wallet", "Premium leather wallet with multiple compartments", 7900, "wallets", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", false, true, ["wallet", "leather", "luxury"]),
];
