import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import BlogImg from "../assets/blog.jpg";
import CropImage from "../assets/crop_yield.jpg";
import WomenFarming from "../assets/women_farming.jpg";
import NewFarmer from "../assets/new_farmers.jpg";
import ClimateSmart from "../assets/climate_smart.jpg";
import Agribusiness from "../assets/agri_business.jpg";
import StartFarm from "../assets/start_farm.png";

const Blog = () => {
  const blogs = [
    {
      title: "Improving Crop Yield with Better Soil Practices",
      author: "Dr. Adesola Bakare",
      image: CropImage,
      preview:
        "Poor soil? No problem. Learn how to bring life back into your land using proven methods...",
      content:
        "Healthy soil is the foundation of successful farming. Techniques such as cover cropping, composting, and reducing chemical input can improve soil fertility. In this article, Dr. Bakare shares insights from years of working with rural farmers across Nigeria on how to restore depleted farmland.",
      link: "https://www.fao.org/soils-portal/soil-management/en/",
    },
    {
      title: "Empowering Women in Agriculture",
      author: "Ngozi Ezeobi",
      image: WomenFarming,
      preview:
        "Rural women produce most of our food — here's how we’re helping them thrive...",
      content:
        "Across Africa, women make up nearly 60% of the agricultural labor force, yet they face limited access to land, tools, and credit. Ngozi Ezeobi highlights initiatives providing women with training, tools, and land rights to level the playing field.",
      link: "https://www.un.org/africarenewal/magazine/february-2020/women-agriculture-breaking-barriers",
    },
    {
      title: "Top 5 Mistakes New Farmers Make (and How to Avoid Them)",
      author: "Tunde Ajayi",
      image: NewFarmer,
      preview:
        "Farming is rewarding — but avoid these common pitfalls to save time, money, and crops...",
      content:
        "New farmers often make avoidable errors like planting the wrong crops for their region, failing to test soil, or mismanaging pests. Tunde Ajayi shares tips on how to plan wisely, start small, and invest in training before expanding your farm operations.",
      link: "https://agrifarming.in/farming-tips-for-beginners",
    },
    {
      title: "Climate-Smart Farming for a Changing Africa",
      author: "Prof. Lydia Akande",
      image: ClimateSmart,
      preview:
        "Climate change is here — but so are smart solutions. Learn how to future-proof your farm...",
      content:
        "With rising temperatures and unpredictable rainfall, traditional methods are no longer enough. Prof. Lydia Akande explores how farmers can adapt using drought-resistant crops, water harvesting, and conservation agriculture.",
      link: "https://www.worldbank.org/en/topic/climate-smart-agriculture",
    },
    {
      title: "Farming as a Business: Turning Passion into Profit",
      author: "Samuel Okonkwo",
      image: Agribusiness,
      preview:
        "Successful farmers don’t just grow crops — they grow income. Here’s how to think like an agri-preneur...",
      content:
        "Many farmers struggle not because of poor harvests, but because they lack business skills. Samuel Okonkwo discusses record keeping, market research, and cost control — key practices that turn small farms into profitable enterprises.",
      link: "https://agrilinks.org/post/turning-farming-business-approach",
    },
    {
      title: "A Step-by-Step Guide to Starting Your Own Farm",
      author: "Blessing Olatunde",
      image: StartFarm,
      preview:
        "New to farming? This beginner-friendly guide walks you through setup to success...",
      content:
        "Starting a farm can feel overwhelming. Blessing Olatunde simplifies the process: from choosing your crop and acquiring land to managing pests and preparing for harvest. Whether it’s cassava, maize, or vegetables, this checklist will help you start strong.",
      link: "https://modernfarmer.com/2019/01/how-to-start-your-own-farm/",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="w-full bg-gray-50 pt-15 py-16 md:py-20">
      {/* Header Image Section */}
      <div className="relative aspect-image overflow-hidden">
        <img
          src={BlogImg}
          className="w-full lg:h-[70vh] h-[50vh] object-cover"
          alt="Blog header"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <motion.h2
            className="lg:text-7xl leading-snug font-bold mb-5 text-white text-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Our Blog
          </motion.h2>
          <motion.p
            className="text-white text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We offer everything you need to get started from helpful tips and
            tutorials
          </motion.p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="pt-8 pb-16 px-4 md:px-12 bg-white">
        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">By {blog.author}</p>
                <p className="text-gray-700 mb-4">{blog.preview}</p>
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Modal */}
        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white max-w-2xl w-full p-6 rounded-xl relative overflow-y-auto max-h-[90vh] shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="absolute top-3 right-3 text-green-700 hover:text-green-900 text-2xl"
                  onClick={() => setSelectedBlog(null)}
                >
                  <MdClose />
                </button>
                <h3 className="text-2xl font-bold text-green-800 mb-1">
                  {selectedBlog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  By {selectedBlog.author}
                </p>
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <p className="text-gray-700 whitespace-pre-line mb-4">
                  {selectedBlog.content}
                </p>
                <a
                  href={selectedBlog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-700 hover:underline font-medium"
                >
                  Learn more →
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blog;
