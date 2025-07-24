import React from "react";
import { RiPlantFill } from "react-icons/ri";
import { GiGoat, GiPlantSeed } from "react-icons/gi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ProductCat = () => {
  return (
    <motion.div
      className="bg-[#2B7810] text-white px-6 md:px-12 pt-24 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Product Categories</h2>
        <p className="text-lg mt-2 text-white/80">
          Explore the range of quality produce we provide from farm to table.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {[
          {
            icon: <GiGoat />,
            title: "Animal Produce",
            description:
              "From fresh eggs and organic poultry to milk and dairy products, our animal produce meets high standards of hygiene and nutrition to ensure health and quality for our customers.",
          },
          {
            icon: <RiPlantFill />,
            title: "Farm Produce",
            description:
              "We grow and supply fresh fruits, vegetables, and grains using sustainable farming practices. Our produce is harvested at peak ripeness to retain flavor, nutrients, and freshness.",
          },
          {
            icon: <GiPlantSeed />,
            title: "Other Produce",
            description:
              "In addition to our core offerings, we supply processed products like cassava flakes, herbal produce, and natural farm-based ingredients, supporting local communities and healthy living.",
          },
        ].map((item, index) => (
          <motion.div
            className="h-full flex"
            key={item.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="bg-gradient-to-t from-white/20 to-[#2B7810] text-white rounded-xl p-6 w-full max-w-sm text-center flex flex-col items-center justify-center shadow-lg">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-white">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductCat;
