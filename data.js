// Store configuration
const STORE = {
  name: "AFS Centre",
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
    description: "Features precise quartz movement and water resistance, perfect for any occasion.",
    category: "accessories",
    featured: true
  },
  {
    id: "P9 Pro Max Wireless Headphones",
    name: "P9 Pro Max Headphones",
    price: 1499,
    image: "https://img4.dhresource.com/webp/m/260x260/f3/albu/km/n/18/98340e65-d53f-4bc6-bf06-de7b6b7448d9.jpg",
    description: "The P9 Wireless BT Headphones are designed to deliver a high-quality audio experience with advanced features and versatile functionality.",
    category: "accessories",
    featured: false
  },
  {
    id: "puma wallet",
    name: "PUMA Wallet",
    price: 549,
    image: "https://www.flipy.pk/cdn/shop/files/5_b14cdd82-1e24-4c46-9ba3-fb5f36f04baf.jpg?v=1737024556&width=533",
    description: "Discover the perfect blend of style and functionality with our unisex leather bi-fold wallet.",
    category: "accessories",
    featured: true
  },
  {
    id: "Tomi Watch",
    name: "Tomi Skeleton Face Watch",
    price: 3999,
    image: "https://pk-live-21.slatic.net/kf/Sca2eaf11eee2418faf760cd80ff58b27u.jpg",
    description: "TOMI T-102 Skelton Face Gear Dual Strap Watch",
    category: "accessories",
    featured: true
  },
  {
    id: "Women's Quartz Watch",
    name: "Raglan Women's Quartz Watch",
    price: 1299,
    image: "https://sc04.alicdn.com/kf/He0867be5ada2414aa2ba6430700843e9F.jpg",
    description: "Elegant Women's Watch Set - Rose Gold Diamond Dress Watches Stainless Steel ",
    category: "accessories",
    featured: true
  },
  {
    id: " Airpods Pro 2nd gen",
    name: " Airpods Pro 2nd Generation",
    price: 1499,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
    description: "Ultra-compact earbuds with premium sound quality and quick charge case.",
    category: "accessories",
    featured: true
  },
  {
    id: "Semi Formal Analogue Watch",
    name: "Semi Formal Analogue Watch",
    price: 4499,
    image: "https://cf.cjdropshipping.com/5718b312-b030-450d-98c5-a66a9cc29c93.png",
    description: "Rolex White Stainless Steel Yacht-Master. Automatic Men's Wristwatch 44 mm",
    category: "accessories",
    featured: true
  },
  {
    id: "t-10 smart watch",
    name: "T-10 Ultra Smart Watch",
    price: 2299,
    image: "https://cubeonline.pk/cdn/shop/files/02e28ef4bbc1f1ebbf2ee9579fd9c764_jpg_750x750_jpg_1024x1024.webp?v=1708941163",
    description: "T10 Ultra Bluetooth Calling Smart Watch 2.09inch.",
    category: "accessories",
    featured: true
  },
  {
    id: "Men's Leather Wallet",
    name: "Men's Leather Wallet",
    price: 749,
    image: "https://static-01.daraz.pk/p/2ca22099afa8eb7f02f405a2fe9197f7.jpg",
    description: "Slim and light weight Badenroo Leather Wallet for Men.",
    category: "accessories",
    featured: true
  },
  {
    id: "Stylish Women's Quartz Watch",
    name: "Stylish Women's Quartz Watch",
    price: 799,
    image: "https://images.olx.com.pk/thumbnails/561226403-400x300.jpeg",
    description: "This round, water-resistant watch features a sleek stainless steel plain strap, perfect for any occasion.",
    category: "accessories",
    featured: true
  },
  {
    id: "Men's Grey Jersey T-Shirt",
    name: "Men's Grey T-Shirt",
    price:699,
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPIzSfVmz-DN47okSmLe25JRilthP9r-6p163kvBaP8yW0U8Ap",
    description: "Elevate your casual wardrobe with this Premium Men's Grey Jersey T-Shirt.",
    category: "clothing",
    featured: false
  },
  {
    id: "Hp laptop bag",
    name: "Hp Laptop Bag",
    price: 899,
    image: "https://content.public.markaz.app/markazimagevideo/public/products/860-123-464533-product-1.jpg",
    description: "Modern backpack with laptop compartment and water resistance.",
    category: "bags",
    featured: false
  },
  {
    id: "Black Polyester Carrying Solution",
    name: "Black Polyester Carrying Bag",
    price: 1999,
    image: "https://content.public.markaz.app/markazimagevideo/public/products/974-270-496688-product-3.jpg",
    description: "Introducing the versatile Multipurpose Laptop Bag – designed to cater to all your carrying needs! ",
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
  // {
  //   id: "quantum-laptop-sleeve",
  //   name: "Quantum Laptop Sleeve",
  //   price: 45.99,
  //   image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
  //   description: "Premium neoprene laptop sleeve with extra padding and water resistance.",
  //   category: "accessories",
  //   featured: false
  // },
  // {
  //   id: "crystal-desk-lamp",
  //   name: "Crystal Desk Lamp",
  //   price: 89.99,
  //   image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
  //   description: "Modern LED desk lamp with adjustable brightness and color temperature.",
  //   category: "accessories",
  //   featured: false
  // },
  {
    id: "Men’s Unstitched Cotton Plain Suit",
    name: "Men’s Unstitched Cotton Suit",
    price: 1599,
    image: "https://dakaan.pk/product_images/mens-unstitched-cotton-plain-suit-fdbdb711b240d5ef.webp",
    description: "Men's Unstitched Cotton Plain Suit by Gul Ahmed,a premium quality fabric offering comfort, elegance, and timeless style.",
    category: "clothing",
    featured: false
  }
];

// Categories data
const categories = [
  {
    key: "accessories",
    title: "Accessories",
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
