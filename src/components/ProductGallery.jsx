import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import prod1 from "../assets/cow1.jpeg";
import prod2 from "../assets/greenpeppe.jpeg";
import prod3 from "../assets/cow5.jpeg";
import prod4 from "../assets/pawpaw.jpeg";
import prod5 from "../assets/peppe.jpeg";
import prod6 from "../assets/poultry.jpeg";
import prod7 from "../assets/pawpaw2.jpeg";
import prod8 from "../assets/peppe2.jpeg";
import prod9 from "../assets/cow3.jpeg";
import prod10 from "../assets/cow5.jpeg";
import prod11 from "../assets/greenpeppe.jpeg";
import prod12 from "../assets/cow6.jpeg";
import prod13 from "../assets/poultry.jpeg";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ProductGallery = () => {
  const catalogues = [
    { image: prod1, name: "Cow" },
    { image: prod2, name: " Green pepper" },
    { image: prod3, name: "Cow" },
    { image: prod4, name: "Pawpaw" },
    { image: prod5, name: "Fresh Pepper" },
    { image: prod6, name: "Farm Eggs" },
    { image: prod7, name: "Pawpaw" },
    { image: prod8, name: "Pepper" },
    { image: prod9, name: "Cow" },
    { image: prod10, name: "Cow" },
    { image: prod11, name: "Green Pepper" },
    { image: prod12, name: "Cow" },
    { image: prod13, name: "Fresh Eggs" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="px-6 md:px-12 pt-24 pb-16 bg-white text-[#2B7810]"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">Varieties</h1>

        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-sm md:text-base">
          Explore our range of fresh and sustainable farm products cultivated
          with care.
        </p>

        <Swiper
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{ delay: 2500 }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: -30,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: -60,
            },
          }}
        >
          {catalogues.map((catalogue, i) => (
            <SwiperSlide key={i}>
              <div className="h-96 flex items-end justify-center">
                <div
                  className={`relative transition-all duration-500 ease-in-out rounded-xl overflow-hidden shadow-xl w-64 md:w-72 ${
                    activeIndex === i ? "h-96" : "h-64"
                  }`}
                >
                  <img
                    src={catalogue.image}
                    alt={`Product ${i}`}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 text-sm font-semibold">
                    {catalogue.name}
                  </div>
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
