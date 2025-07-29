// Preload product images
const imagePreloader = (imagePath) => {
  if (typeof window !== 'undefined') {
    const img = new Image()
    img.src = imagePath
  }
}

// Pre-calculate and memoize product data
const prepareProducts = (products) => {
  return products.map(product => ({
    ...product,
    priceFormatted: `$${product.price.toFixed(2)}`,
    // Add any other computed properties here
  }))
}

export { imagePreloader, prepareProducts }
