'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import OptimizedImage from '../elements/OptimizedImage'
import Link from "next/link"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 25,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    1400: { slidesPerView: 5 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
  navigation: {
    nextEl: ".tprelated__nxt",
    prevEl: ".tprelated__prv",
  },
}

export default function ProductSlider() {
  return (
    <div className="swiper-container related-product-active">
      <Swiper {...swiperOptions}>
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide key={num}>
            <div className="tpproduct pb-15 mb-30">
              <div className="tpproduct__thumb p-relative">
                <Link href="/shop-details-2">
                  <OptimizedImage
                    src={`/assets/img/product/product-${num}.jpg`}
                    alt="product-thumb"
                    width={300}
                    height={400}
                    className="w-full"
                    priority={num <= 2}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
