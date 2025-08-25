// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const heroGradient = document.getElementById('heroGradient');
const hero = document.getElementById('hero');
const categoryGrid = document.getElementById('categoryGrid');
const productsGrid = document.getElementById('productsGrid');

// State
let currentView = 'home';
let currentProduct = null;
let quantity = 1;
let cart = [];

// Cart functionality
function addToCart(product, qty = 1) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty
    });
  }
  
  updateCartCount();
  showNotification(`${product.name} added to cart! 🛒`);
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  if (totalItems > 0) {
    cartCount.style.display = 'flex';
  } else {
    cartCount.style.display = 'none';
  }
}

// Mobile menu functionality
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.style.display = 'block';
  } else {
    setTimeout(() => {
      if (!mobileMenu.classList.contains('active')) {
        mobileMenu.style.display = 'none';
      }
    }, 400);
  }
});

// Mobile menu close button
const mobileMenuClose = document.getElementById('mobileMenuClose');
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    setTimeout(() => {
      if (!mobileMenu.classList.contains('active')) {
        mobileMenu.style.display = 'none';
      }
    }, 400);
  });
}

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    setTimeout(() => {
      if (!mobileMenu.classList.contains('active')) {
        mobileMenu.style.display = 'none';
      }
    }, 400);
  });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove('active');
    setTimeout(() => {
      if (!mobileMenu.classList.contains('active')) {
        mobileMenu.style.display = 'none';
      }
    }, 400);
  }
});

// Hero gradient effect - REMOVED to fix visibility issues

// Initialize the app
function init() {
  renderCategories();
  renderFeaturedProducts();
  handleRouting();
  initScrollAnimations();
  initNavbarScroll();
  initImageLoading();
  initSearch();
  initImageGallery();
  
  // Debug: Add click listener to New Items button
  const newItemsBtn = document.querySelector('a[href="#featured"]');
  if (newItemsBtn) {
    console.log('New Items button found:', newItemsBtn);
    newItemsBtn.addEventListener('click', (e) => {
      console.log('New Items button clicked!');
      e.preventDefault();
      const featuredSection = document.getElementById('featured');
      if (featuredSection) {
        console.log('Featured section found, scrolling to it');
        featuredSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Featured section not found');
      }
    });
  } else {
    console.log('New Items button not found');
  }
}

// Image loading with skeleton
function initImageLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  images.forEach(img => {
    const parent = img.parentElement;
    parent.classList.add('loading');
    
    img.addEventListener('load', () => {
      parent.classList.remove('loading');
    });
    
    img.addEventListener('error', () => {
      parent.classList.remove('loading');
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPgo=';
    });
  });
}

// Render categories
function renderCategories() {
  categoryGrid.innerHTML = categories.map(category => `
    <a href="${category.link}" class="category-card hover-scale" data-category="${category.key}">
      <div class="category-image-container">
        <img src="${category.image}" alt="${category.title} category" class="category-image" loading="lazy">
        <div class="category-overlay"></div>
        <div class="category-icon">${category.icon}</div>
      </div>
      <div class="category-content">
        <h3 class="category-title">${category.title}</h3>
        <p class="category-subtitle">${category.subtitle}</p>
        <div class="category-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </div>
      </div>
    </a>
  `).join('');

  // Add click handlers for categories
  document.querySelectorAll('[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = e.currentTarget.dataset.category;
      showCategoryPage(category);
    });
  });
}

// Render featured products (only featured products)
function renderFeaturedProducts() {
  const featuredProducts = products.filter(product => product.featured);
  productsGrid.innerHTML = featuredProducts.map(product => `
    <a href="#product/${product.id}" class="product-card hover-scale" data-product="${product.id}">
      <div class="product-badge">Featured</div>
      <img src="${product.image}" alt="${product.name} product image" class="product-image" loading="lazy">
      <div class="product-info">
        <div>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">₨${product.price.toFixed(2)}</p>
        </div>
        <span class="product-view">View</span>
      </div>
    </a>
  `).join('');

  // Add click handlers for products
  document.querySelectorAll('[data-product]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = e.currentTarget.dataset.product;
      showProductModal(productId);
    });
  });
}

// Show category page
function showCategoryPage(categoryKey) {
  const category = categories.find(c => c.key === categoryKey);
  const categoryProducts = products.filter(p => p.category === categoryKey);
  
  document.querySelector('main').innerHTML = `
    <section class="category-page">
      <div class="container">
        <header class="section-header" style="padding-top: 2rem;">
          <div class="category-header-content">
            <h1 class="section-title">${category.title}</h1>
            <p class="hero-description">
              ${getCategoryDescription(categoryKey)}
            </p>
            <div style="display: flex; justify-content: center; margin-top: 2rem;">
              <a href="index.html" class="btn btn-primary">
                <span>Back to Home</span>
              </a>
            </div>
          </div>
        </header>
        
        <div class="products-grid">
          ${categoryProducts.length > 0 
            ? categoryProducts.map(product => `
                <a href="#product/${product.id}" class="product-card hover-scale" data-product="${product.id}">
                  <img src="${product.image}" alt="${product.name} product image" class="product-image" loading="lazy">
                  <div class="product-info">
                    <div>
                      <h3 class="product-name">${product.name}</h3>
                      <p class="product-price">₨${product.price.toFixed(2)}</p>
                    </div>
                    <span class="product-view">View</span>
                  </div>
                </a>
              `).join('')
            : '<div style="text-align: center; color: hsl(var(--muted-foreground)); grid-column: 1 / -1; padding: 3rem;"><h3>No products found</h3><p>We are working on adding more products to this category.</p><a href="index.html" class="btn btn-primary" style="margin-top: 1rem;">Back to Home</a></div>'
          }
        </div>
      </div>
    </section>
  `;

  // Add click handlers for products
  document.querySelectorAll('[data-product]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = e.currentTarget.dataset.product;
      showProductModal(productId);
    });
  });

  // Scroll to top of the page when showing category
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Re-initialize scroll animations and image loading
  setTimeout(() => {
    initScrollAnimations();
    initImageLoading();
  }, 100);

  currentView = 'category';
}

// Get category description
function getCategoryDescription(categoryKey) {
  const descriptions = {
    accessories: "Premium audio, power, and wearable essentials designed for daily performance.",
    clothing: "Modern AFS apparel and lifestyle gear — coming soon.",
    bags: "Sleek, durable backpacks and carry gear for your tech and daily essentials."
  };
  return descriptions[categoryKey] || "";
}

// Show product modal
function showProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentProduct = product;
  quantity = 1;

  // Show loading state
  const loadingHTML = `
    <div class="product-modal active" id="productModal">
      <div class="product-modal-content">
        <div class="product-modal-header">
          <div class="skeleton" style="width: 200px; height: 24px;"></div>
          <button class="product-modal-close" onclick="closeProductModal()">×</button>
        </div>
        <div class="product-modal-body">
          <div class="skeleton" style="width: 100%; height: 300px; margin-bottom: 1rem;"></div>
          <div class="skeleton" style="width: 60%; height: 32px; margin-bottom: 1rem;"></div>
          <div class="skeleton" style="width: 40%; height: 24px; margin-bottom: 1rem;"></div>
          <div class="skeleton" style="width: 100%; height: 80px;"></div>
        </div>
      </div>
    </div>
  `;

  // Remove existing modal
  const existingModal = document.getElementById('productModal');
  if (existingModal) {
    existingModal.remove();
  }

  // Add loading modal
  document.body.insertAdjacentHTML('beforeend', loadingHTML);

  // Simulate loading delay for better UX
  setTimeout(() => {
    showProductModalContent(product);
  }, 300);
}

function showProductModalContent(product) {

  // Create modal HTML
  const modalHTML = `
    <div class="product-modal active" id="productModal">
      <div class="product-modal-content">
        <div class="product-modal-header">
          <h2 class="product-modal-title">AFS Store</h2>
          <button class="product-modal-close" onclick="closeProductModal()">×</button>
        </div>
        <div class="product-modal-body">
          <div class="product-detail-grid">
            <div>
              <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            </div>
            <div class="product-detail-info">
              <h2>${product.name}</h2>
              <p class="product-detail-price">₨${product.price.toFixed(2)}</p>
              <p class="product-detail-description">${product.description}</p>
              
              <div class="quantity-controls">
                <label for="quantity">Quantity</label>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <button class="btn btn-outline btn-icon" onclick="decreaseQuantity()">-</button>
                  <input 
                    type="number" 
                    id="quantity" 
                    class="quantity-input" 
                    min="1" 
                    value="1"
                    onchange="updateQuantity(this.value)"
                  >
                  <button class="btn btn-outline btn-icon" onclick="increaseQuantity()">+</button>
                </div>
              </div>
              
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button onclick="addToCart(currentProduct, quantity)" class="btn btn-primary">
                  Add to Cart
                </button>
                <a href="${buildWhatsAppOrderLink(product.name, product.id, product.price, quantity)}" 
                   class="whatsapp-btn" 
                   target="_blank" 
                   id="whatsappLink">
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Remove existing modal
  const existingModal = document.getElementById('productModal');
  if (existingModal) {
    existingModal.remove();
  }

  // Add modal to page
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Add click handler to close modal when clicking outside
  document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('product-modal')) {
      closeProductModal();
    }
  });
}

// Close product modal
function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.remove();
  }
}

// Quantity controls
function increaseQuantity() {
  quantity++;
  document.getElementById('quantity').value = quantity;
  updateWhatsAppLink();
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').value = quantity;
    updateWhatsAppLink();
  }
}

function updateQuantity(value) {
  quantity = Math.max(1, parseInt(value) || 1);
  document.getElementById('quantity').value = quantity;
  updateWhatsAppLink();
}

function updateWhatsAppLink() {
  if (currentProduct) {
    const link = document.getElementById('whatsappLink');
    if (link) {
      link.href = buildWhatsAppOrderLink(currentProduct.name, currentProduct.id, currentProduct.price, quantity);
    }
  }
}

// Show home page
function showHomePage() {
  document.querySelector('main').innerHTML = `
     <section class="hero" id="hero">
            <div class="hero-background"></div>
            <div class="hero-container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">
                            <span class="hero-subtitle">Every piece of</span>
                            <span class="hero-main-title">Technology tells a story</span>
                        </h1>
                        <p class="hero-description">
                            "A modern lifestyle demands accessories that blend innovation with timeless design." - AFS
                        </p>
                        <div class="hero-actions">
                            <a href="#categories" class="btn btn-primary">
                                Shop Now
                            </a>
                            <a href="#featured" class="btn btn-secondary">
                                New Items
                            </a>
                        </div>
                    </div>
                    <div class="hero-image-gallery">
                        <div class="gallery-container">
                            <div class="gallery-slide active" data-slide="1">
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" alt="Product 1" class="gallery-image">
                            </div>
                            <div class="gallery-slide" data-slide="2">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" alt="Product 2" class="gallery-image">
                            </div>
                            <div class="gallery-slide" data-slide="3">
                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" alt="Product 3" class="gallery-image">
                            </div>
                            <div class="gallery-slide" data-slide="4">
                                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop" alt="Product 4" class="gallery-image">
                            </div>
                        </div>
                        <div class="gallery-indicators">
                            <span class="indicator active" data-slide="1"></span>
                            <span class="indicator" data-slide="2"></span>
                            <span class="indicator" data-slide="3"></span>
                            <span class="indicator" data-slide="4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="categories" id="categories">
            <div class="container">
                <header class="section-header">
                    <h2 class="section-title">Shop by Category</h2>
                </header>
                <div class="category-grid" id="categoryGrid">
                    <!-- Categories will be populated by JavaScript -->
                </div>
            </div>
        </section>

        <section class="featured-products" id="featured">
            <div class="container">
                <header class="section-header">
                    <h2 class="section-title">Featured Products</h2>
                </header>
                <div class="products-grid" id="productsGrid">
                    <!-- Products will be populated by JavaScript -->
                </div>
            </div>
        </section>
  `;

  // Re-render components
  renderCategories();
  renderFeaturedProducts();
  
  // Scroll to top of the page when showing home
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Re-initialize scroll animations, image loading, and search
  setTimeout(() => {
    initScrollAnimations();
    initImageLoading();
    initSearch();
    initImageGallery();
  }, 100);
  
  currentView = 'home';
}

// Simple routing
function handleRouting() {
  const hash = window.location.hash;
  
  if (hash.startsWith('#product/')) {
    const productId = hash.replace('#product/', '');
    showProductModal(productId);
  } else if (hash === '#accessories' || hash === '#clothing' || hash === '#bags') {
    const category = hash.replace('#', '');
    showCategoryPage(category);
  }
}

// Handle hash changes
window.addEventListener('hashchange', handleRouting);

// Success notification system
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Newsletter subscription
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('newsletter-btn')) {
    const input = e.target.previousElementSibling;
    const email = input.value.trim();
    
    if (email && isValidEmail(email)) {
      showNotification('Thank you for subscribing to our newsletter! 🎉');
      input.value = '';
    } else {
      showNotification('Please enter a valid email address.', 'error');
    }
  }
});

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Escape key closes modal
  if (e.key === 'Escape') {
    closeProductModal();
  }
});

// Scroll animations (disabled for hero section stability)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.closest('.hero')) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all cards and sections (excluding hero)
  document.querySelectorAll('.category-card, .product-card, .section-header').forEach(el => {
    if (!el.closest('.hero')) {
      el.classList.add('scroll-animate');
      observer.observe(el);
    }
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
      backToTopBtn.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Back to top functionality
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Cart modal functionality
function showCartModal() {
  if (cart.length === 0) {
    showNotification('Your cart is empty!', 'error');
    return;
  }

  const cartHTML = `
    <div class="product-modal active" id="cartModal">
      <div class="product-modal-content">
        <div class="product-modal-header">
          <h2 class="product-modal-title">Shopping Cart (${cart.length} items)</h2>
          <button class="product-modal-close" onclick="closeCartModal()">×</button>
        </div>
        <div class="product-modal-body">
          <div class="cart-items">
            ${cart.map(item => `
              <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                  <h3>${item.name}</h3>
                  <p>₨${item.price.toFixed(2)} × ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                  <button onclick="removeFromCart('${item.id}')" class="btn btn-outline btn-icon">🗑️</button>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="cart-total">
            <h3>Total: ₨${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</h3>
            <button onclick="checkout()" class="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', cartHTML);
}

function closeCartModal() {
  const modal = document.getElementById('cartModal');
  if (modal) {
    modal.remove();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  showCartModal(); // Refresh cart modal
}

function checkout() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const message = `Hello ${STORE.name}, I'd like to checkout with the following items:\n\n${cart.map(item => 
    `${item.name} - ₨${item.price.toFixed(2)} × ${item.quantity} = ₨${(item.price * item.quantity).toFixed(2)}`
  ).join('\n')}\n\nTotal: ₨${total.toFixed(2)}\n\nPlease help me complete my order.`;
  
  window.open(`https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchResults = document.getElementById('searchResults');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  
  function showSearchDropdown(query) {
    if (!query.trim()) {
      searchDropdown.classList.remove('active');
      return;
    }
    
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Limit to 5 results
    
    if (filteredProducts.length === 0) {
      searchResults.innerHTML = `
        <div class="no-results">
          <p>No products found for "${query}"</p>
        </div>
      `;
    } else {
      searchResults.innerHTML = filteredProducts.map(product => `
        <a href="#product/${product.id}" class="search-result-item" data-product="${product.id}">
          <img src="${product.image}" alt="${product.name}" class="search-result-image">
          <div class="search-result-info">
            <div class="search-result-name">${product.name}</div>
            <div class="search-result-price">₨${product.price.toFixed(2)}</div>
            <div class="search-result-category">${product.category}</div>
          </div>
        </a>
      `).join('');
      
      // Add click handlers for search results
      document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const productId = e.currentTarget.dataset.product;
          showProductModal(productId);
          searchDropdown.classList.remove('active');
          searchInput.value = '';
        });
      });
    }
    
    searchDropdown.classList.add('active');
  }
  
  function hideSearchDropdown() {
    setTimeout(() => {
      searchDropdown.classList.remove('active');
    }, 200);
  }
  
  function performFullSearch(query = '') {
    const searchQuery = query || searchInput?.value?.trim().toLowerCase() || mobileSearchInput?.value?.trim().toLowerCase() || '';
    
    if (!searchQuery) {
      renderFeaturedProducts();
      return;
    }
    
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
    );
    
    if (filteredProducts.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: hsl(var(--muted-foreground));">
          <h3>No products found for "${searchQuery}"</h3>
          <p>Try searching with different keywords</p>
          <button onclick="clearSearch()" class="btn btn-primary" style="margin-top: 1rem;">Clear Search</button>
        </div>
      `;
    } else {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; margin-bottom: 1rem; text-align: center;">
          <h3>Search Results for "${searchQuery}" (${filteredProducts.length} products)</h3>
        </div>
        ${filteredProducts.map(product => `
          <a href="#product/${product.id}" class="product-card hover-scale" data-product="${product.id}">
            <img src="${product.image}" alt="${product.name} product image" class="product-image" loading="lazy">
            <div class="product-info">
              <div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">₨${product.price.toFixed(2)}</p>
              </div>
              <span class="product-view">View</span>
            </div>
          </a>
        `).join('')}
      `;
      
      // Re-add click handlers
      document.querySelectorAll('[data-product]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const productId = e.currentTarget.dataset.product;
          showProductModal(productId);
        });
      });
    }
    
    // Close mobile menu if search was performed from mobile
    if (mobileSearchInput?.value) {
      closeMobileMenu();
    }
  }
  
  // Desktop search
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => performFullSearch());
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performFullSearch();
        searchDropdown.classList.remove('active');
      }
    });
    // Real-time search dropdown
    searchInput.addEventListener('input', (e) => {
      showSearchDropdown(e.target.value);
    });
    searchInput.addEventListener('focus', (e) => {
      if (e.target.value.trim()) {
        showSearchDropdown(e.target.value);
      }
    });
    searchInput.addEventListener('blur', hideSearchDropdown);
  }
  
  // Mobile search
  if (mobileSearchBtn && mobileSearchInput) {
    mobileSearchBtn.addEventListener('click', () => performFullSearch());
    mobileSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performFullSearch();
      }
    });
    // Add real-time search for mobile
    mobileSearchInput.addEventListener('input', (e) => {
      if (e.target.value.trim() === '') {
        renderFeaturedProducts();
      }
    });
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput?.contains(e.target) && !searchDropdown?.contains(e.target)) {
      searchDropdown?.classList.remove('active');
    }
  });
}

function clearSearch() {
  const searchInput = document.getElementById('searchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  
  if (searchInput) searchInput.value = '';
  if (mobileSearchInput) mobileSearchInput.value = '';
  
  renderFeaturedProducts();
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
    setTimeout(() => {
      if (!mobileMenu.classList.contains('active')) {
        mobileMenu.style.display = 'none';
      }
    }, 400);
  }
}

// Add cart button click handler
document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', showCartModal);
  }
  
  initSearch();
});

// Initialize image gallery
function initImageGallery() {
  const slides = document.querySelectorAll('.gallery-slide');
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;
  
  function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // Auto-advance slides every 3 seconds
  setInterval(nextSlide, 3000);
  
  // Add click handlers for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

