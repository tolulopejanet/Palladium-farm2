import { stats } from "../data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Stats = () => {
  return (
    <motion.div
      className="w-full bg-[#F9FAFB] px-12 pt-24 pb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-[#2B7810] mb-4"
          variants={itemVariants}
        >
          Our Impact
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          We are committed to transforming agriculture by connecting farmers,
          improving yields, and supporting sustainable food production across
          our communities.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-12"
          variants={containerVariants}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <div className="text-[#2B7810] text-5xl font-extrabold border-4 border-[#2B7810] rounded-full w-32 h-32 flex items-center justify-center mb-4">
                {item.value}
              </div>
              <p className="text-lg text-gray-700 font-medium">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Stats;
