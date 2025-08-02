// ChatbotConfig.jsx
import { createChatBotMessage } from "react-chatbot-kit";
import SuggestionButtons from "./SuggestionButtons";

const chatbotConfig = {
  initialMessages: [
    createChatBotMessage("Welcome! How can I assist you today?", {
      widget: "suggestionButtons",
    }),
  ],
  widgets: [
    {
      widgetName: "suggestionButtons",
      widgetFunc: (props) => <SuggestionButtons {...props} />,
    },
  ],
};

export default chatbotConfig;
