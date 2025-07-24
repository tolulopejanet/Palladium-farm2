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
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Values = () => {
  return (
    <motion.section
      className="bg-green-50 py-16 lg:px-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* img section  */}
        <motion.div className="lg:w-1/2" variants={fadeUp} custom={0}>
          <img
            src={img}
            alt="our value"
            className="w-full h-[80vh] rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* content section  */}
        <motion.div className="lg:w-1/2" variants={fadeUp} custom={0.5}>
          <h2 className="text-4xl font-bold text-[#2B7810] mb-8">Our Values</h2>

          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5"
                variants={fadeUp}
                custom={index * 0.2 + 1}
              >
                <div className="text-[#2B7810] text-3xl font-bold">
                  {value.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Values;
