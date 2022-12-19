import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
import "../App.css";

const botName = "Contreras & Metelska,PA";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`, { delay: 1000 }),
    // createChatBotMessage(`Please help me with some answers.`, {
    //   delay: 1000,
    //   widget: "dogPicture",
    // }),
    createChatBotMessage(
      `Are you a New Client, Former Client, or Current client?`,
      {
        delay: 1000,
        widget: "getClientType",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "getClientType",
      widgetFunc: (props) => {
        let input = window.document.getElementsByClassName(
          "react-chatbot-kit-chat-input"
        )[0];
        let button = window.document.getElementsByClassName(
          "react-chatbot-kit-chat-btn-send"
        )[0];
        if (input && button) {
          window.document.getElementsByClassName(
            "react-chatbot-kit-chat-input"
          )[0].setAttribute('disabled',true)
          button.disabled = true;
        }
        const options = [
          {
            text: "New Client",
            handler: (e) => {
              props.actionProvider.handleClientType(e);
            },
            value: "newClient",
            id: 1,
          },
          {
            text: "Former Client",
            handler: () => {},
            id: 2,
            value: "formerClient",
          },
          {
            text: "Current Client",
            handler: () => {},
            id: 3,
            value: "currntClient",
          },
        ];
        const optionsMarkup = options.map((option, index) => (
          <button
            className="idBkdM"
            onClick={(e) => {
              option.handler(e);
            }}
            key={index}
            value={option.value}
            id={option.id}
            name={option.text}
          >
            {option.text}
          </button>
        ));
        return (
          <div className="learning-options-container">{optionsMarkup}</div>
        );
      },
    },{
      widgetName: "getCaseType",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Immigration",
            handler: (e) => {
              props.actionProvider.handleCaseType(e);
            },
            value: "immigrationCase",
            id: 1,
          },
          {
            text: "Criminal",
            handler: (e) => {
              props.actionProvider.handleCaseType(e);
            },
            id: 2,
            value: "criminalCase",
          },
          {
            text: "Family Case",
            handler: (e) => {
              props.actionProvider.handleCaseType(e);
            },
            id: 3,
            value: "familyCase",
          },
        ];
        const optionsMarkup = options.map((option, index) => (
          <button
            className="idBkdM"
            onClick={(e) => {
              option.handler(e);
            }}
            key={index}
            value={option.value}
            id={option.id}
            name={option.text}
          >
            {option.text}
          </button>
        ));
        return (
          <div className="learning-options-container">{optionsMarkup}</div>
        );
      },
    },{
      widgetName: "getCaseType",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            value: "yes",
            id: 1,
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 2,
            value: "no",
          }
        ];
        const optionsMarkup = options.map((option, index) => (
          <button
            className="idBkdM"
            onClick={(e) => {
              option.handler(e);
            }}
            key={index}
            value={option.value}
            id={option.id}
            name={option.text}
          >
            {option.text}
          </button>
        ));
        return (
          <div className="learning-options-container">{optionsMarkup}</div>
        );
      },
    },
  ],
};
export default config;
