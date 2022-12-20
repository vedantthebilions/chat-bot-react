import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
import "../App.css";
import Contreras from "../image/logo.png";
import TableView from "../TableView";
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
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ef6c00",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <img src={Contreras} alt="Avatar" class="avatar" />,
  },
  state: {
    getInUSA: "",
    clientName: "",
    ClientDob: "",
    Afile: "",
    CountryOfBirth: "",
    StreetAddress: "",
    City: "",
    Zip: "",
    Phone: "",
    ImmigrationStatus: "",
    LegalProblem: "",
  },
  widgets: [
    {
      widgetName: "getClientType",
      widgetFunc: (props) => {
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
    },
    {
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
    },
    {
      widgetName: "getInUSA",
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
    },
    {
      widgetName: "getInUSALocation",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "getClientName",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["clientName"],
    },
    {
      widgetName: "getClientDOB",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["ClientDob"],
    },
    {
      widgetName: "getAfile",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["Afile"],
    },
    {
      widgetName: "getCountryOfBirth",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["CountryOfBirth"],
    },
    {
      widgetName: "getStreetAddress",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["StreetAddress"],
    },
    {
      widgetName: "getCity",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["City"],
    },
    {
      widgetName: "getZip",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["Zip"],
    },
    {
      widgetName: "getPhone",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["Phone"],
    },
    {
      widgetName: "getImmigrationStatus",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Recent Entry",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            value: "recentEntry",
            id: 1,
          },
          {
            text: "Asylum Seeker",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 2,
            value: "asylumSeeker",
          },
          {
            text: "No Status",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 3,
            value: "noStatus",
          },
          {
            text: "F-1",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 4,
            value: "f1",
          },
          {
            text: "J-1",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 5,
            value: "j1",
          },
          {
            text: "USC",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 6,
            value: "usc",
          },
          {
            text: "LPR",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 7,
            value: "lpr",
          },
          {
            text: "DACA",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 8,
            value: "daca",
          },
          {
            text: "I don't Know",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 9,
            value: "dontKnow",
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
      mapStateToProps: ["ImmigrationStatus"],
    },
    {
      widgetName: "getLegalProblem",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      // widgetFunc: (props) => {
      //   return (
      //     <div className="learning-options-container">
      //       <TableView state={props.state.state}/>
      //     </div>
      //   );
      // },
      mapStateToProps: ["LegalProblem"],
    },
  ],
  
};
export default config;
