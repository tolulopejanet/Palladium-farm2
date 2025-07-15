import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import prod1 from "../assets/hero2.jpg";
import prod2 from "../assets/hero3.jpg";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ProductGallery = () => {
  const catalogues = [
    { image: prod1 },
    { image: prod2 },
    { image: prod1 },
    { image: prod2 },
    { image: prod1 },
    { image: prod2 },
    { image: prod1 },
    { image: prod2 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-12 pt-24 pb-16 bg-white text-[#2B7810]">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-bold text-4xl mb-4">Product Catalogue</h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore our range of fresh and sustainable farm products cultivated
          with care.
        </p>

        <Swiper
          spaceBetween={-60}
          slidesPerView={3.5}
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{ delay: 2500 }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {catalogues.map((catalogue, i) => (
            <SwiperSlide key={i}>
              {/* Full height container with bottom alignment */}
              <div className="h-96 flex items-end justify-center">
                <div
                  className={`transition-all duration-500 ease-in-out rounded-xl overflow-hidden shadow-xl w-72 ${
                    activeIndex === i ? "h-96" : "h-64"
                  }`}
                >
                  <img
                    src={catalogue.image}
                    alt={`Product ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;
