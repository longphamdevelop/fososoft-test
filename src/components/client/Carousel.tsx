'use client';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

function Carousel() {
  return (
    <Swiper
      loop
      navigation
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={20}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        1536: { slidesPerView: 5 },
        1280: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        640: { slidesPerView: 2 },
      }}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <SwiperSlide key={index}>
          <div className="shadow-card-product rounded-lg bg-white">
            <ProductCard />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
