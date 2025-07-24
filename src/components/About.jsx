import React from "react";
import { motion } from "framer-motion";
import img from "../assets/peppe2.jpeg";
import Values from "./Values";

const About = () => {
  return (
    <motion.section
      className="bg-white mt-36"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-20 pb-16 lg:px-12 px-6">
        {/* Left: Text Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#2B7810]">About Us</h2>
          <p className="text-green-600 font-semibold mb-3">
            Fresh. Local. Nutritious.
          </p>
          <p className="text-gray-600 mb-4">
            At Palladium Farm, we believe agriculture is more than cultivation,
            it is the foundation of life, community, and sustainability. Rooted
            in innovation and driven by impact, we are committed to providing
            high-quality, ethically sourced produce while empowering local
            farmers and preserving the environment.
          </p>
          <p className="text-gray-600 mb-6">
            <b>Our mission</b> is to become a one stop-shop for all agricultural
            produce.
            <br /> <b>Our vision</b> is to be a leading agribusiness,
            cultivating a sustainable future through innovative farming
            practices, quality products, and community engagement.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={img}
            alt="Our Farm"
            className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      <Values />
    </motion.section>
  );
};

export default About;
