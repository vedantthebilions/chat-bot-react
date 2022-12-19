import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleClientType = (value) => {
    const message = createClientMessage("I am a " + value.target.name);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    const botMessage = createChatBotMessage("Okay, what is your case type?", {
      widget: "getCaseType",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCaseType = (value) => {
    const message = createClientMessage(value.target.name);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    const botMessage = createChatBotMessage(
      "Are you currently outside the US?",
      {
        widget: "getInUSA",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLocation = (value) => {
    const message = createClientMessage(value.target.name);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    if (value.target.name == "Yes") {
      // let input = window.document.getElementsByClassName(
      //   "react-chatbot-kit-chat-input"
      // )[0];
      document.getElementsByClassName('react-chatbot-kit-chat-input').disabled = false;
      console.log(document.getElementsByClassName('react-chatbot-kit-chat-input'))
      const botMessage = createChatBotMessage("Where are you ?");
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      console.log("i");
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleClientType,
            handleCaseType,
            handleLocation,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
