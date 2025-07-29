'use client'
import { addCart, addQty } from "@/features/shopSlice"
import products from "@/data/products"
import OptimizedImage from '../elements/OptimizedImage'
import Link from "next/link"
import { memo } from 'react'

function ProductGrid({ activeIndex, setActiveIndex, dispatch }) {
  const handleOnClick = (index) => setActiveIndex(index)

  const addToCart = (id) => {
    dispatch(addCart(id))
  }

  const qtyHandler = (id, qty) => {
    dispatch(addQty({ id, qty }))
  }

  return (
    <div className="product-grid">
      {products.slice(0, 8).map((product, index) => (
        <div key={product.id} className="product-item">
          <div className="product-thumb">
            <Link href={`/shop-details/${product.id}`}>
              <OptimizedImage
                src={product.image}
                alt={product.title}
                width={300}
                height={400}
                className="w-full"
                priority={index < 4} // Prioritize first 4 products
              />
            </Link>
          </div>
          <div className="product-content">
            <h3>{product.title}</h3>
            <div className="price">${product.price}</div>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(ProductGrid)
