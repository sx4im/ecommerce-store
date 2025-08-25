// Store configuration
const STORE = {
  name: "AFS Store",
  whatsappNumber: "923251462621",
  currency: "PKR",
  currencySymbol: "₨",
  social: {
    instagram: "https://www.instagram.com/afs.centre?igsh=cG5vMm11ejE4Nzdl&utm_source=qr",
    facebook: "https://www.instagram.com/afs.centre?igsh=cG5vMm11ejE4Nzdl&utm_source=qr",
  },
};

// Products data
const products = [
  {
    id: "aura-watch",
    name: "Arabic Aura-Watch",
    price: 1099,
    image: "https://collectionbyrehan.shop/cdn/shop/files/EE18BBB1-868E-4460-9F81-AA4985E149F0.jpg?v=1752134427&width=1946",
    description: "Features precise quartz movement and water resistance, perfect for any occasion. With its sleek black design, this 1-piece watch combines functionality and modern fashion effortlessly. Whether you’re at the office or a casual outing, this timepiece is your ultimate accessory.",
    category: "accessories",
    featured: true
  },
  {
    id: "transparent powerbank",
    name: "Transparent PowerBank",
    price: 299.99,
    image: "https://ae01.alicdn.com/kf/Sf543a807393f4fd4a81c504b8fce809em.jpg?width=800&height=800&hash=1600",
    description: "Transparent 20000mAh Power Bank 66W Fast Charging Portable Charger External Battery Pack Powerbank For iPhone Android and all Devices",
    category: "accessories",
    featured: true
  },
  {
    id: "flux-wireless-charger",
    name: "Flux Wireless Charger",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1594736797933-d0b22d3f8db7?w=400&h=300&fit=crop",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    category: "accessories",
    featured: true
  },
  {
    id: "nova-bluetooth-speaker",
    name: "Nova Bluetooth Speaker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    description: "Portable speaker with 360-degree sound and waterproof design.",
    category: "accessories",
    featured: true
  },
  {
    id: "zen-earbuds",
    name: "Zen True Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
    description: "Ultra-compact earbuds with premium sound quality and quick charge case.",
    category: "accessories",
    featured: true
  },
  {
    id: "arc-phone-stand",
    name: "Arc Adjustable Phone Stand",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
    description: "Sleek aluminum stand with adjustable angles for optimal viewing.",
    category: "accessories",
    featured: true
  },
  {
    id: "afs-core-hoodie",
    name: "AFS Core Hoodie",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
    description: "Premium cotton blend hoodie with minimalist AFS branding.",
    category: "clothing",
    featured: true
  },
  {
    id: "tech-crew-tee",
    name: "Tech Crew Tee",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    description: "Comfortable crew neck t-shirt made from sustainable materials.",
    category: "clothing",
    featured: true
  },
  {
    id: "elite-gaming-mouse",
    name: "Elite Gaming Mouse",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
    category: "accessories",
    featured: true
  },
  {
    id: "urban-cap",
    name: "Urban Snapback Cap",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop",
    description: "Classic snapback cap with embroidered logo and adjustable fit.",
    category: "clothing",
    featured: false
  },
  {
    id: "bolt-backpack",
    name: "Bolt Tech Backpack",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    description: "Modern backpack with laptop compartment and USB charging port.",
    category: "bags",
    featured: false
  },
  {
    id: "swift-messenger",
    name: "Swift Messenger Bag",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1553735027-8d8d5b0d3b60?w=400&h=300&fit=crop",
    description: "Compact messenger bag perfect for daily commutes and travel.",
    category: "bags",
    featured: false
  },
  {
    id: "peak-duffel",
    name: "Peak Travel Duffel",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    description: "Spacious duffel bag with multiple compartments for extended trips.",
    category: "bags",
    featured: false
  },
  {
    id: "micro-wallet",
    name: "Micro Minimalist Wallet",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop",
    description: "Ultra-slim wallet with RFID blocking and premium leather construction.",
    category: "accessories",
    featured: false
  },
  {
    id: "quantum-laptop-sleeve",
    name: "Quantum Laptop Sleeve",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    description: "Premium neoprene laptop sleeve with extra padding and water resistance.",
    category: "accessories",
    featured: false
  },
  {
    id: "crystal-desk-lamp",
    name: "Crystal Desk Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
    description: "Modern LED desk lamp with adjustable brightness and color temperature.",
    category: "accessories",
    featured: false
  },
  {
    id: "velocity-running-shoes",
    name: "Velocity Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    description: "Lightweight running shoes with superior comfort and performance.",
    category: "clothing",
    featured: false
  }
];

// Categories data
const categories = [
  {
    key: "accessories",
    title: "Tech Accessories",
    subtitle: "Premium Audio & Power",
    image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#accessories",
    icon: ""
  },
  {
    key: "clothing",
    title: "Lifestyle Clothing",
    subtitle: "Comfort & Style",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#clothing",
    icon: ""
  },
  {
    key: "bags",
    title: "Travel Bags",
    subtitle: "Function & Fashion",
    image: "https://plus.unsplash.com/premium_photo-1726804838143-50f503d75743?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#bags",
    icon: ""
  }
];

// WhatsApp link builder
function buildWhatsAppOrderLink(productName, productId, price, quantity = 1) {
  const urlPath = `#product/${productId}`;
  const lines = [
    `Hello ${STORE.name},`,
    `I'm interested in: ${productName}.`,
    price ? `Price listed: ${STORE.currencySymbol}${price.toFixed(2)}.` : undefined,
    quantity ? `Quantity: ${quantity}` : undefined,
    `Product link: ${urlPath}`,
    `Please share availability and next steps.`,
  ].filter(Boolean);

  const message = lines.join("\n");
  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
