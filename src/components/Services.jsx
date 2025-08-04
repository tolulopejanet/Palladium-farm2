import React from "react";
import { motion } from "framer-motion";
import SubServices from "./SubService"
import Services2 from "./Services2"

import { GiTomato, GiCow } from "react-icons/gi";

const services = [
  {
    icon: <GiTomato size={40} />,
    title: "Crop Farming",
    description:
      "We offer expert crop production services including vegetable farming, fruit farming, and cash crop farming to ensure year-round food supply and profitability.",
  },
  {
    icon: <GiCow size={40} />,
    title: "Livestock Farming",
    description:
      "We focus on land-ruminant farming, poultry farming, and aquaculture, maintaining high standards in animal care and farm productivity.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
   <>
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white text-[#2B7810] pt-36 lg:pb-16 px-6 lg:px-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-lg mt-2 text-gray-600">
          Providing end-to-end solutions for modern farming, agribusiness, and
          food sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-[#F7FDF4] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4 text-[#2B7810] flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-700 text-center text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <SubServices/>

    <Services2/>
   </>
  );
};

export default Services;