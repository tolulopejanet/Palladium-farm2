// ChatbotComponent.jsx
import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import SuggestionButtons from "./SuggestionButtons";
import chatbotConfig from "./config";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const chatbotResponses = {
  "How do I start farming?":
    "To start farming, identify a suitable location, test the soil, choose a profitable crop, and create a business plan.",
  "What crops grow best in Nigeria?":
    "Crops like cassava, maize, rice, yam, tomatoes, and vegetables thrive in Nigeria depending on the region.",
  "How do I access funding for my farm?":
    "You can access funding through agricultural banks, government grants, and private sector initiatives.",
};

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSuggestionClick = (question) => {
    const botResponse =
      chatbotResponses[question] ||
      "Let me check that for you. Please hold on...";

    setChatHistory((prev) => [
      ...prev,
      { sender: "user", message: question },
      { sender: "bot", message: botResponse },
    ]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={toggleChat}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none"
        >
          {isOpen ? <MdClose size={24} /> : <FaRobot size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 max-w-sm bg-white rounded-xl shadow-lg border border-gray-300 z-50 flex flex-col"
          >
            <div className="p-4 border-b text-green-700 font-semibold">
              Palladium Farm Assistant
            </div>

            <div className="p-4 h-64 overflow-y-auto space-y-3 flex flex-col">
              {chatHistory.length === 0 && (
                <div className="bg-gray-100 text-sm p-2 rounded-md text-center text-gray-700">
                  👋 Hi there! How can I assist you today?
                </div>
              )}
              {chatHistory.map((entry, index) => (
                <div
                  key={index}
                  className={`text-sm p-2 rounded-md max-w-[90%] ${
                    entry.sender === "user"
                      ? "bg-green-100 self-end text-right"
                      : "bg-gray-100 self-start"
                  }`}
                >
                  {entry.message}
                </div>
              ))}
            </div>

            <div className="p-2 border-t">
              <SuggestionButtons onSelect={handleSuggestionClick} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotComponent;
