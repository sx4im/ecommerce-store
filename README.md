# AFS Centre - Bold Accessories Store

A modern, responsive e-commerce website for AFS Centre, featuring a bold brutalist design and WhatsApp-based ordering system.

## 🚀 Features

- **Modern UI/UX**: Bold brutalist design with vibrant colors and sharp edges
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **WhatsApp Integration**: Direct ordering through WhatsApp messaging
- **Product Catalog**: Browse and filter products by category
- **Product Details**: Detailed product pages with image galleries
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.8.0
- **Styling**: Tailwind CSS 3.2.7
- **Icons**: Lucide React 0.263.1
- **Build Tool**: Vite 4.1.0
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
AFS/
├── favicon.png                 # Site favicon
├── index.html                  # Main HTML template
├── package.json               # Dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── src/
    ├── App.jsx                # Main app component with routing
    ├── main.jsx               # React app entry point
    ├── index.css              # Global styles and Tailwind imports
    ├── components/            # Reusable UI components
    │   ├── HeroSection.jsx    # Homepage hero section
    │   └── ProductCard.jsx    # Product card component
    ├── entities/              # Business logic and data models
    │   ├── Layout.jsx         # Main layout wrapper
    │   └── Product.js         # Product model and sample data
    ├── pages/                 # Page components
    │   ├── Home.jsx           # Homepage
    │   ├── Product.jsx        # Individual product page
    │   └── Products.jsx       # Products listing page
    └── utils/                 # Utility functions
        └── index.js           # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AFS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start development server (alias for dev)

## 🎨 Design System

### Color Palette
- **Primary Red**: `#EF4444` (red-500)
- **Accent Yellow**: `#EAB308` (yellow-400)
- **Background**: `#FEF3C7` (yellow-100)
- **Text**: `#000000` (black)
- **White**: `#FFFFFF`

### Typography
- **Font Family**: Arial Black, Helvetica, sans-serif
- **Style**: Bold, brutalist design with sharp edges
- **Effects**: Text shadows and transforms for depth

### Components
- **Brutalist Shadow**: 6px offset black shadow
- **Border Style**: 4px solid black borders
- **Transform Effects**: Subtle rotations and hover animations

## 📱 Pages

### Homepage (`/`)
- Hero section with call-to-action
- Featured products showcase
- Why choose us section
- Direct WhatsApp ordering

### Products (`/products`)
- Product grid with filtering
- Category-based filtering
- Search functionality
- Responsive grid layout

### Product Detail (`/product?id={id}`)
- Large product images
- Detailed product information
- Quantity selector
- WhatsApp ordering integration
- Share functionality

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### PostCSS
PostCSS configuration is in `postcss.config.js` for CSS processing.

### Vite
Build configuration is handled by Vite. The main entry point is `src/main.jsx`.

## 📞 Contact Integration

- **WhatsApp**: +92 325 1462621
- **Email**: afs.centre04@gmail.com
- **Instagram**: @afs.centre
- **Facebook**: AFS Centre

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**
   The build output will be in the `dist` directory, ready for deployment to any static hosting service.

## 📄 License

This project is licensed under the MIT License - see the package.json file for details.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🐛 Issues

If you encounter any issues, please create an issue in the repository or contact the development team.

---
