import React from "react";
import { motion } from "framer-motion";
import { GiGrain, GiBarn, GiCow, GiWateringCan } from "react-icons/gi";
import { FaTractor, FaSeedling } from "react-icons/fa";

const services = [
  {
    icon: <FaSeedling size={20} />,
    title: "Crop Farming",
    description:
      "We specialize in greenhouse cultivation, fruit and vegetable farming, and sustainable cash crops.",
  },
  {
    icon: <GiCow size={20} />,
    title: "Livestock Farming",
    description:
      "We specialize in poultry farming, aqua farming, and modern ruminant farming with emphasis on zero-grazing systems.",
  },
  {
    icon: <GiGrain size={20} />,
    title: "Feedmill Production",
    description:
      "High-quality feed formulation and production for livestock and poultry with balanced nutrition.",
  },
  {
    icon: <GiWateringCan size={20} />,
    title: "Agricultural Recycling",
    description:
      "Innovative recycling of agricultural waste for organic fertilizers, energy, and soil health improvement.",
  },
  {
    icon: <FaTractor size={20} />,
    title: "Sales & Mechanization",
    description:
      "From farm produce to mechanized equipment, we provide access to quality tools and products.",
  },
  {
    icon: <GiBarn size={20} />,
    title: "Farm Support Services",
    description:
      "Expert advisory, training, soil testing, and resource planning to support farmers at every stage.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  const left = services.slice(0, 3);
  const right = services.slice(3);

  return (
    <section className="bg-[#f4f9f5] pb-20 pt-36 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[#2B7810] mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0}
      >
        What We Do
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16">
        {[left, right].map((group, colIndex) => (
          <div
            key={colIndex}
            className="relative lg:border-l-2 border-[#2B7810]"
          >
            {group.map((service, i) => (
              <motion.div
                key={i}
                className="relative mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i + colIndex * 3 + 1}
              >
                {/* Connector Circle */}
                <div className="absolute -left-[15px] top-1 w-6 h-6 bg-white border-2 border-[#2B7810] rounded-full flex items-center justify-center text-[#2B7810] shadow">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="pl-6">
                  <h3 className="text-xl font-bold text-[#2B7810] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
