// Utility functions
export const createPageUrl = (pageName) => {
  // Handle query parameters in pageName
  if (pageName.includes('?')) {
    const [page, query] = pageName.split('?');
    const pageMap = {
      'Home': '/',
      'Products': '/products',
      'Product': '/product'
    };
    const basePath = pageMap[page] || '/';
    return `${basePath}?${query}`;
  }
  
  const pageMap = {
    'Home': '/',
    'Products': '/products',
    'Product': '/product'
  };
  
  return pageMap[pageName] || '/';
};

