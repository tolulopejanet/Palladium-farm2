// SuggestionButtons.jsx
import React from "react";

const suggestions = [
  "How can we locate you?",
  "How can we reach you on WhatsApp?",
  "What produce is currently available on the farm?",
];

const SuggestionButtons = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelect(suggestion)}
          className="bg-green-200 hover:bg-green-300 text-green-900 text-xs px-3 py-1 rounded-full transition"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default SuggestionButtons;
