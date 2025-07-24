import React from "react";
import { GiGrain, GiBarn, GiCow, GiWateringCan } from "react-icons/gi";
import { FaTractor, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaTractor size={40} />,
    title: "Mechanized Farming",
    description:
      "We offer mechanized farming solutions to increase efficiency and yield for farmers, using modern tools and sustainable practices.",
  },
  {
    icon: <GiBarn size={40} />,
    title: "Agro-Processing",
    description:
      "Our agro-processing service transforms raw farm produce into finished or semi-finished products, ensuring longer shelf life and higher value.",
  },
  {
    icon: <GiCow size={40} />,
    title: "Animal Husbandry",
    description:
      "We rear livestock such as cattle, poultry, and goats under expert care, providing high-quality animal products for the market.",
  },
  {
    icon: <GiWateringCan size={40} />,
    title: "Irrigation Systems",
    description:
      "From drip to sprinkler systems, our irrigation services help optimize water usage, especially in dry seasons, ensuring healthy crop growth.",
  },
  {
    icon: <GiGrain size={40} />,
    title: "Seed Supply",
    description:
      "We supply farmers with quality, disease-resistant seeds to promote better germination rates and increase food security.",
  },
  {
    icon: <FaSeedling size={40} />,
    title: "Training & Consultancy",
    description:
      "We provide expert guidance to farmers on sustainable agricultural practices, agribusiness, and farm management through training and mentorship.",
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
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white text-[#2B7810] pt-36 pb-16 px-6 lg:px-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-lg mt-2 text-gray-600">
          Providing end-to-end solutions for modern farming, agribusiness, and
          food sustainability.
        </p>
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
  );
};

export default Services;
