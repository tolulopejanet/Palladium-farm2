import React from "react";
import { motion } from "framer-motion";
import {
  GiTomato,
  GiFruitBowl,
  GiGrain,
  GiChicken,
  GiCow,
  GiFishBucket
} from "react-icons/gi";
import { FaTractor } from "react-icons/fa";

const services = [
  {
    icon: <GiTomato size={20} />,
    title: "Vegetable Farming",
    description:
      "We cultivate a variety of vegetables using sustainable farming practices, including open-field and greenhouse systems.",
  },
  {
    icon: <GiFruitBowl size={20} />,
    title: "Fruit Farming",
    description:
      "We grow high-quality fruits such as oranges, mangoes, and pineapples with a focus on improved yield and quality.",
  },
  {
    icon: <GiGrain size={20} />,
    title: "Cash Crop",
    description:
      "We produce export-quality cash crops such as cocoa, oil palm, cotton, and groundnuts using best agronomic practices.",
  },
  {
    icon: <GiChicken size={20} />,
    title: "Poultry Farming",
    description:
      "We rear broilers and layers in hygienic environments, producing high-quality meat and eggs for consumption and sales.",
  },
  {
    icon: <GiCow size={20} />,
    title: "Land-Ruminant Farming",
    description:
      "Our ruminant farming focuses on cattle, goats, and sheep reared through semi-intensive and zero-grazing systems.",
  },
  {
    icon: <GiFishBucket size={20} />,
    title: "Aqua Farming",
    description:
      "We specialize in fish farming, offering fingerlings, pond management, and feed services for a thriving aquaculture system.",
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

const SubServices = () => {
  const left = services.slice(0, 3);
  const right = services.slice(3);

  return (
    <section className=" px-6 md:px-20">
      <div className="lg:grid hidden lg:grid-cols-2 lg:gap-16">
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

export default SubServices;
