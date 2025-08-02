// ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleDefault = (message) => {
    const reply = this.createChatBotMessage("I’ll get back to you on that.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, reply],
    }));
  };
}

export default ActionProvider;
