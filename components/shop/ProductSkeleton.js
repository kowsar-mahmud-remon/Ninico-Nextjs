'use client'

export default function ProductSkeleton() {
  return (
    <div className="product-skeleton">
      <div className="animate-pulse">
        <div className="bg-gray-200 h-[300px] w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  )
}
