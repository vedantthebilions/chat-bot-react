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
      const botMessage = createChatBotMessage("Where are you currently ?", {
        widget: "getInUSALocation",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Client’s Name", {
        widget: "getClientName",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleUsLocation = () => {
    const botMessage = createChatBotMessage("Very good ! here", {
      widget: "dogPicture",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUserMessage = () => {
    let ind;
    let lastInd;
    let botMessage;

    setState(
      (prev) => (
        (ind = prev.messages.length - 2),
        (lastInd = prev.messages.length - 1),
        prev.messages[ind]["widget"] === "getInUSALocation"
          ? ((botMessage = createChatBotMessage("Client’s Name", {
              widget: "getClientName",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              clientName: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getClientName"
          ? ((botMessage = createChatBotMessage("Date of Birth", {
              widget: "getAfile",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              ClientDob: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getAfile"
          ? ((botMessage = createChatBotMessage("A-File", {
              widget: "getCountryOfBirth",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              Afile: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCountryOfBirth"
          ? ((botMessage = createChatBotMessage("Country of Birth", {
              widget: "getStreetAddress",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              CountryOfBirth: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getStreetAddress"
          ? ((botMessage = createChatBotMessage("Street Address (within US)", {
              widget: "getCity",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              StreetAddress: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCity"
          ? ((botMessage = createChatBotMessage("City", {
              widget: "getState",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              City: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getState"
          ? ((botMessage = createChatBotMessage("State", {
              widget: "getZip",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              State: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getZip"
          ? ((botMessage = createChatBotMessage("Zip", {
              widget: "getPhone",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              Zip: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getPhone"
          ? ((botMessage = createChatBotMessage("Phone ", {
              widget: "getImmigrationStatus",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              Phone: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getImmigrationStatus"
          ? ((botMessage = createChatBotMessage("Current immigration status", {
              widget: "getLegalProblem",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              ImmigrationStatus: prev.messages[lastInd].message,
            })
          : null
      )
    );
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
            handleUsLocation,
            handleUserMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
