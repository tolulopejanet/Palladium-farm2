import { motion } from "framer-motion";
import Map from "../assets/world-map.png";

const Order = () => {
  return (
    <div className="container my-36 px-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* Form Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-[#2B7810] opacity-70">
            Buy our products from anywhere
          </h1>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
            />
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
            />
          </div>

          <a
            href="https://wa.me/2348100589346"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <button className="primary-btn w-full">Order Now</button>
          </a>
        </motion.div>

        {/* Map Image Section */}
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={Map}
            alt="world map"
            className="w-full sm:w-[500px] mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Order;
