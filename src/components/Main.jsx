import React from "react";
import { motion } from "framer-motion";
import Panel from "../assets/main.jpg";
import { FaArrowRight } from "react-icons/fa";

const Main = () => {
  return (
    <motion.div
      className="lg:px-12 px-6 pt-24 space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="font-bold text-5xl mb-4 text-[#2B7810] leading-tight">
            Creating a Greener Future for Global Agriculture
          </h1>
          <p className="text-gray-600 text-sm md:text-[16px] text-left">
            Palladium Farm is committed to sustainable and efficient farming. We
            combine modern agricultural practices with local expertise to
            produce high-quality, healthy crops. By working closely with farmers
            and using smart techniques, we ensure reliable food supply, improved
            livelihoods, and responsible land use.{" "}
            <a href="#gallery">
              <button className="mt-4 bg-[#2B7810] hover:text-green-300 text-white font-bold py-2 px-4 border-b-4 border-[#014130] rounded-lg flex items-center cursor-pointer">
                Explore Our Products <FaArrowRight className="ml-2" />
              </button>
            </a>
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src={Panel}
            alt="Palladium Farm"
            className="w-full h-[50vh] rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Main;
