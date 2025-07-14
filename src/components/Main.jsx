import React from "react";
import Panel from "../assets/feature.jpg";
import { FaArrowRight } from "react-icons/fa";
// import Features from "./Feature";

const Main = () => {
  return (
    <div className="px-12 pt-24 pb-8 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-5xl mb-6 text-[#2B7810]">
            We Are Re-imagining Global Agriculture
          </h1>
          <p className="text-gray-600 text-sm md:text-[16px] text-left">
            Greenpawaa is a forward-thinking organization committed to
            transforming lives through sustainable energy solutions. We
            specialize in solar technology, from installations to product
            innovation, with one goal: to make everyday life easier and greener
            for all.
            <button className="mt-4 bg-[#2B7810] hover:text-green-300 text-white font-bold py-2 px-4 border-b-4 border-[#014130] rounded-lg flex items-center">
              Explore Our Products
              <FaArrowRight className="ml-2" />
            </button>
          </p>
        </div>

        <div className="w-full">
          <img
            src={Panel}
            alt=""
            className="w-full h-[50vh] rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="text-center space-y-5">
        <p className="md:w-1/2 mx-auto">
          We design solutions that not only serve today but also shape a better
          tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Main;
