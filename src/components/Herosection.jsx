import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero1 from "../assets/grow-1.jpg";
import Hero2 from "../assets/harvest-1.jpg";
import Hero3 from "../assets/soww.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    image: Hero1,
    title: "Grow with Nature",
    description:
      "Experience sustainable farming powered by innovation and tradition.",
  },
  {
    image: Hero2,
    title: "Harvest the Future",
    description:
      "Modern solutions for farmers, growers, and agricultural entrepreneurs.",
  },
  {
    image: Hero3,
    title: "Sow. Nurture. Thrive.",
    description:
      "Empowering communities through smart farming and green practices.",
  },
];

const Herosection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full lg:h-screen h-[70vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[current].image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[current].image}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center px-12">
        <motion.div
          className="bg-white opacity-80 p-4 lg:p-8 rounded-lg shadow-lg w-full max-w-md md:w-2/3 mt-50 md:mt-40"
          key={slides[current].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="lg:text-4xl text-2xl font-bold text-[#2B7810] lg:mb-4 mb-2">
            {slides[current].title}
          </h1>
          <p className="text-gray-800 lg:text-lg text-[14px]">
            {slides[current].description}
          </p>
          <Link to="/aboutus">
            <button className="lg:mt-6 mt-3 px-6 py-2 bg-[#2B7810] text-white rounded-full hover:bg-green-800 transition cursor-pointer">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Dots */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-green-700" : "bg-gray-400"
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Herosection;
