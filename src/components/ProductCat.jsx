import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiPlantFill } from "react-icons/ri";
// Import Swiper styles
import "swiper/css";
import { GiPlantSeed } from "react-icons/gi";

const ProductCat = () => {
  return (
    <div>
      <div className="bg-[#2B7810] text-white px-12 pt-24 pb-8">
        <div className="max-w-7xl mx-auto">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="h-96 flex justify-center">
                <div
                  className={`card card-active to-[#2B7810]rounded-xl p-6 w-full max-w-sm text-center flex flex-col items-center justify-center`}
                >
                  <div className="logo">
                    <RiPlantFill />
                  </div>
                  <h2 className="text-3xl mt-2 font-semibold">
                    Animal Produce
                  </h2>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum aliquam beatae earum vero quam! Alias reiciendis,
                    quasi sint ipsam quia saepe excepturi.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-96 flex">
                <div
                  className={`card card-active to-[#2B7810]rounded-xl p-6 w-full max-w-sm text-center flex flex-col items-center justify-center`}
                >
                  <div className="logo">
                    <RiPlantFill />
                  </div>
                  <h2 className="text-3xl mt-2 font-semibold">Farm Produce</h2>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum aliquam beatae earum vero quam! Alias reiciendis,
                    quasi sint ipsam quia saepe excepturi.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-96 flex">
                <div
                  className={`card card-active to-[#2B7810]rounded-xl p-6 w-full max-w-sm text-center flex flex-col items-center justify-center`}
                >
                  <div className="logo">
                    <GiPlantSeed />
                  </div>
                  <h2 className="text-3xl mt-2 font-semibold">Other Produce</h2>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum aliquam beatae earum vero quam! Alias reiciendis,
                    quasi sint ipsam quia saepe excepturi.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductCat;
