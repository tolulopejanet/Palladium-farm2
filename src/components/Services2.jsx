import React from "react";
import { motion } from "framer-motion";
import SubServices from "./SubService"
import { FaTractor, FaShoppingBasket } from "react-icons/fa";
import {
 GiTomato,
 GiRecycle,
 GiCow,
 GiBarn,
 GiFarmer
} from "react-icons/gi";

const services = [
 {
  icon: <FaTractor size={40} />,
  title: "Feedmill Production",
  description:
   "We formulate and produce high-quality animal feeds to ensure optimal livestock health and performance.",
 },
 {
  icon: <GiTomato size={40} />,
  title: "Greenhouse Farming",
  description:
   "We grow vegetables and fruits using climate-controlled systems to maximize yield and reduce pest risk.",
 },
 {
  icon: <FaShoppingBasket size={40} />,
  title: "Produce Sales",
  description:
   "We offer freshly harvested vegetables, fruits, and livestock products directly from our farms to consumers.",
 },
 {
  icon: <GiFarmer size={40} />,
  title: "Farm Support Services",
  description:
   "We provide extension services, training, soil testing, and access to modern tools and advisory support.",
 },
 {
  icon: <GiRecycle size={40} />,
  title: "Agricultural Process Recycling",
  description:
   "We convert farm waste into organic fertilizers and energy sources, promoting sustainable agriculture.",
 },
 {
  icon: <GiCow size={40} />,
  title: "Zero Grazing and Consultation",
  description:
   "We support ruminant farming through zero-grazing systems and offer tailored consultation services.",
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

const Services2 = () => {
  return (
   <>
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white text-[#2B7810] pb-16 px-6 lg:px-12"
    >
      <div className="text-center mb-12">
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
   </>
  );
};

export default Services2;