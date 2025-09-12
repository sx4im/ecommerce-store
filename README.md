# 🛍️ E-Commerce Template

> **Open Source React E-Commerce Template with Bold Neo-Brutalism Design**

A modern, fully-featured e-commerce template built with **React** and **Neo-Brutalism** design philosophy. Perfect for creating bold, unapologetic online stores that stand out from the crowd.

**Created by [Saim Shafique](https://saimshafique.com) | [GitHub](https://github.com/sx4im)**

---

## 🎨 **Design Philosophy**

**Neo-Brutalism at its Finest**
- ✨ Bold, high-contrast colors
- 🔲 Thick black borders (3-4px)
- 🎯 Harsh drop shadows
- 📐 Intentionally "undesigned" aesthetic
- 🎭 Raw typography with asymmetrical layouts
- 🚫 No gradients or subtle elements

---

## 🚀 **Template Features**

### 🛒 **E-Commerce Functionality**
- **Product Catalog** - Complete product management system
- **Featured Products** - Highlight bestsellers and promotions
- **Search & Filter** - Advanced filtering by category, name, or description
- **WhatsApp Integration** - Direct customer communication
- **Responsive Design** - Mobile-first approach for all devices
- **Ready-to-Deploy** - Production-ready code structure

### 🎯 **Demo Categories** (Easily Customizable)
- 💍 **Jewelry** - Necklaces, bracelets, rings, earrings
- ⌚ **Watches** - Premium, sports, and smart watches
- 👜 **Bags** - Designer, crossbody, and evening clutches
- 👓 **Sunglasses** - Aviator, vintage, and stylish frames
- 👒 **Hats** - Winter hats and baseball caps
- 🧣 **Scarves** - Luxury silk scarves
- 📱 **Phone Cases** - Premium leather cases
- 🔑 **Keychains** - Stylish brand accessories
- 👔 **Belts** - Genuine and designer leather belts
- 💳 **Wallets** - Luxury and minimalist designs

### 📱 **Template Features**
- 🔗 **Social Media Integration** - Instagram, Facebook, Email links
- 💬 **WhatsApp Integration** - Direct customer communication
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🎨 **Customizable Branding** - Easy to modify colors, fonts, and content

---

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | ^18.0.0 |
| **React Router** | Navigation | ^6.0.0 |
| **Tailwind CSS** | Styling Framework | ^3.0.0 |
| **Lucide React** | Icon Library | Latest |
| **Vite** | Build Tool | ^4.0.0 |

---

## 📦 **Installation**

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/sx4im/ecommerce-store

# Navigate to project directory
cd ecommerce-store

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Setup
```bash
# Development
npm run dev
# → http://localhost:5173

# Production Build
npm run build
npm run preview
```

---

## 📁 **Project Structure**

```
AFS/
├── Components/
│   ├── HeroSection.jsx     # Landing hero with featured product
│   └── ProductCard.jsx     # Reusable product display component
├── Entities/
│   ├── Layout.jsx          # Main layout with navigation & footer
│   └── Product.json        # Product data schema
├── Pages/
│   ├── Home.jsx           # Homepage with featured products
│   ├── Product.jsx        # Individual product details
│   └── Products.jsx       # Product catalog with filters
├── src/
│   ├── entities/
│   │   └── Product.js     # Product class & sample data
│   ├── utils/
│   │   └── index.js       # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── public/
│   └── favicon.png       # Brand favicon
└── dist/                 # Production build
```

---

## 🎯 **Key Components**

### **HeroSection.jsx**
- Bold landing section with featured product
- Call-to-action buttons for shopping and WhatsApp
- Neo-brutalism design with rotated elements

### **ProductCard.jsx**
- Reusable product display component
- WhatsApp ordering integration
- Hover effects and featured product badges

### **Layout.jsx**
- Navigation with mobile menu functionality
- Footer with social media links
- Consistent neo-brutalism styling

### **Product.js**
- Product entity class with methods
- 24 sample products across all categories
- Price formatting and product management

---

## 📱 **Responsive Design**

| Breakpoint | Design Focus |
|------------|--------------|
| **Mobile** (< 768px) | Touch-friendly navigation, stacked layouts |
| **Tablet** (768px - 1024px) | Grid layouts, optimized spacing |
| **Desktop** (> 1024px) | Full feature display, hover effects |

---

## 🎨 **Design System**

### **Colors**
```css
Primary: #EF4444 (Red-500)
Secondary: #FACC15 (Yellow-400)
Accent: #22C55E (Green-500)
Background: #FEF3C7 (Yellow-100)
Text: #000000 (Black)
Borders: #000000 (Black, 3-4px)
```

### **Typography**
```css
Font Family: 'Arial Black', 'Helvetica', sans-serif
Font Weight: 900 (Brutal)
Letter Spacing: -0.02em
```

### **Shadows**
```css
Brutalist Shadow: 6px 6px 0px #000000
Small Shadow: 4px 4px 0px #000000
```

---

## 🛒 **E-Commerce Features**

### **Product Management**
- **24 Products** across 10 categories
- **Featured Products** system
- **Availability** tracking
- **Price Formatting** (PKR currency)

### **Shopping Experience**
- **Search Functionality** - Find products instantly
- **Category Filtering** - Browse by product type
- **WhatsApp Ordering** - Direct contact for purchases
- **Product Details** - Comprehensive product pages

### **Mobile Commerce**
- **Touch-Optimized** interface
- **Mobile Menu** with smooth animations
- **Responsive** product grids
- **WhatsApp** integration for mobile orders

---

## 📞 **Contact & Ordering**

### **WhatsApp Integration**
- **Phone**: +923251462621
- **Direct Ordering** from product pages
- **Quick Contact** from hero section
- **Product Inquiries** with details

### **Template Configuration**
- **Easy Branding** - Modify brand name, colors, and content
- **Customizable Taglines** - Update messaging to fit your business
- **Contact Integration** - Easy email and social media setup
- **WhatsApp Business** - Direct customer communication

---

## 🚀 **Deployment**

### **Vite Build**
```bash
npm run build
# Generates optimized build in /dist
```

### **Deployment Options**
- **Vercel** - Recommended for React apps
- **Netlify** - Easy static site deployment
- **GitHub Pages** - Free hosting option
- **Custom Server** - Traditional hosting

---

## 🔧 **Development**

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### **Development Guidelines**
- Follow **Neo-Brutalism** design principles
- Use **Tailwind CSS** for styling
- Implement **mobile-first** approach
- Maintain **accessibility** standards

---

## 📈 **Performance**

### **Optimization Features**
- ⚡ **Vite** for fast builds
- 🎯 **Code Splitting** for efficient loading
- 📱 **Mobile Optimization** for all devices
- 🖼️ **Image Optimization** with proper sizing

### **SEO Features**
- 📝 **Meta Descriptions** for search engines
- 🔍 **Structured Data** for products
- 📱 **Mobile-Friendly** design
- ⚡ **Fast Loading** times

---

## 🤝 **Contributing**

Contributions are welcome! This template is open source and free to use. Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch
3. **Follow** neo-brutalism design principles
4. **Test** on multiple devices
5. **Submit** a pull request

### **Ways to Contribute**
- 🐛 **Bug Fixes** - Help improve the template
- ✨ **New Features** - Add functionality for e-commerce
- 🎨 **Design Improvements** - Enhance the neo-brutalism aesthetic
- 📚 **Documentation** - Improve guides and examples
- 🌍 **Translations** - Multi-language support

---

## 📄 **License**

**MIT License** - Free to use for personal and commercial projects

```
MIT License

Copyright (c) 2024 Saim Shafique

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


