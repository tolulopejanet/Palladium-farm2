import React from "react";
import img from "../assets/value.jpg";
import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Sustainability",
    desc: "We are committed to environmentally responsible farming that conserves natural resources and ensures long-term food security.",
  },
  {
    number: "02",
    title: "Accountability",
    desc: "We take full responsibility for our actions, maintaining strong relationships with farmers, partners, and consumers through trust and transparency.",
  },
  {
    number: "03",
    title: "Teamwork",
    desc: "We believe in the power of collaboration — working closely with local communities, staff, and partners to achieve shared goals.",
  },
  {
    number: "04",
    title: "Transparency",
    desc: "We provide clear, open communication from farm practices to product delivery, so our customers know exactly where their food comes from.",
  },
  {
    number: "05",
    title: "Integrity",
    desc: "We operate with honesty and strong moral principles, ensuring every decision we make aligns with our values and commitment to quality.",
  },
  {
    number: "06",
    title: "Excellence",
    desc: "We strive for the highest standards in agricultural practices, product quality, and customer satisfaction across every part of our business.",
  },
  {
    number: "07",
    title: "Innovation",
    desc: "We embrace modern technology and research-based methods to improve yield, efficiency, and sustainability in our farming operations.",
  },
  {
    number: "08",
    title: "Collaboration",
    desc: "We foster strong networks with farmers, experts, and organizations to co-create impactful agricultural solutions that benefit all.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Values = () => {
  return (
    <motion.section
      className="bg-green-50 py-20 px-6 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-5xl font-bold text-center text-[#2B7810] mb-4"
        variants={fadeUp}
        custom={0}
      >
        Our Core Values
      </motion.h2>
      <motion.p
        className="text-center max-w-3xl mx-auto text-gray-700 mb-12"
        variants={fadeUp}
        custom={0.3}
      >
        At Palladium Farm, our values shape every decision and action. They
        reflect our commitment to the land, our people, and the future of food.
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left image */}
        <motion.div className="lg:w-1/2" variants={fadeUp} custom={0.5}>
          <img
            src={img}
            alt="values"
            className="w-full h-[50vh] lg:h-[90vh] object-cover rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Right values */}
        <motion.div
          className="lg:w-1/2 grid md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white-400 p-5 rounded-xl shadow-black shadow-md"
              variants={fadeUp}
              custom={index * 0.2 + 1}
            >
              <div className="text-[#2B7810] text-xl font-bold mb-1">
                {value.number}
              </div>
              <h3 className="text-lg font-semibold text-[#2B7810]">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Values;
