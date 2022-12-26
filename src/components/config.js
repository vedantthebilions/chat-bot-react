import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
import "../App.css";
import Contreras from "../image/logo.png";
import ContrerasBlack from "../image/logo_doc_black.jpg";
import TableView from "../TableView";
import Review from '../Review';
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
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <img src={Contreras} alt="Avatar" class="avatar" />,
    header: () => (
      <span className="react-chatbot-kit-chat-header">
        <img
          src={ContrerasBlack}
          alt="Avatar"
          style={{
            width: "50px",
          }}
        />
        <span className="header-support">
          <h4 className="header-main">Support Chatbot</h4>
          <p></p>
        </span>
      </span>
    ),
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
    HearingDate: "",
    HearingLocation: "",
    HearingType: "",
    ImmigrationPaperwork: "",
    MarriedStatus:"",
    SpouseName: "",
    SpouseDOB:"",
    CrimeLocation:"",
    PoliceContact:"",
    ContactReason:"",
    FearStatus:"",
    BenefitStatus:""
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
            isClicked: 'false',
            optionId: '',
          },
          {
            text: "Former Client",
            handler: (e) => {
              props.actionProvider.handleClientType(e);
            },
            id: 2,
            value: "formerClient",
            isClicked: 'false',
          },
          {
            text: "Current Client",
            handler: (e) => {
              props.actionProvider.handleClientType(e);
            },
            id: 3,
            value: "currntClient",
            isClicked: 'false',
            
          },
        ];
        const optionsMarkup = options.map((option, index) => (
          
          <button
            className="idBkdM"
            onClick={(e) => {
              console.log(option.id, index);
              if(option.id === index + 1)
              {
                console.log('available...');
                option.isClicked = true;
                option.optionId = option.id;
                option.handler(e);
                console.log('id value : ', option.id);
                console.log('is clicked value : ', option.isClicked);
              }
              
            }}
            key={index}
            value={option.value}
            id={option.id}
            name={option.text}
            disabled={ (option.id === index) ? console.log('option id : ', option.optionId) : false  }
            
            
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
              props.actionProvider.handleImmigrationStatus(e);
            },
            value: "recentEntry",
            id: 1,
          },
          {
            text: "Asylum Seeker",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 2,
            value: "asylumSeeker",
          },
          {
            text: "No Status",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 3,
            value: "noStatus",
          },
          {
            text: "F-1",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 4,
            value: "f1",
          },
          {
            text: "J-1",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 5,
            value: "j1",
          },
          {
            text: "USC",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 6,
            value: "usc",
          },
          {
            text: "LPR",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 7,
            value: "lpr",
          },
          {
            text: "DACA",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 8,
            value: "daca",
          },
          {
            text: "I don't Know",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
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
      mapStateToProps: ["LegalProblem"],
    },
    {
      widgetName: "getRemovalProceedingStatus",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
    },
    {
      widgetName: "getHearingDate",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["HearingDate"],
    },{
      widgetName: "getHearingLocation",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["HearingLocation"],
    },
    {
      widgetName: "getHearingType",
      widgetFunc: (props) => {
        const options = [
          {
            text: "MCH",
            handler: (e) => {
              props.actionProvider.handleHearingType(e);
            },
            value: "mch",
            id: 1,
          },
          {
            text: "IH",
            handler: (e) => {
              props.actionProvider.handleHearingType(e);
            },
            id: 2,
            value: "ig",
          },
          {
            text: "Don't Know",
            handler: (e) => {
              props.actionProvider.handleHearingType(e);
            },
            id: 3,
            value: "dontknow",
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
      mapStateToProps: ["HearingType"],
    },{
      widgetName: "getImmigrationPaperwork",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleImmigrationPaperwork(e);
            },
            value: "yes",
            id: 1,
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleImmigrationPaperwork(e);
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
      mapStateToProps: ["ImmigrationPaperwork"],
    },{
      widgetName: "getMarriedStatus",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleMarriedStatus(e);
            },
            value: "yes",
            id: 1,
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleMarriedStatus(e);
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
      mapStateToProps: ["MarriedStatus"],
    },{
      widgetName: "getSpouseDOB",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["HearingLocation"],
    },{
      widgetName: "getVictimOfCrime",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleVictimeStatus(e);
            },
            value: "yes",
            id: 1,
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleMarriedStatus(e);
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
      widgetName: "getCrimeLocation",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["CrimeLocation"],
    },{
      widgetName: "getPoliceReport",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handlePoliceReportStatus(e);
            },
            value: "yes",
            id: 1,
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handlePoliceReportStatus(e);
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
      mapStateToProps: ["MarriedStatus"],
    },
    {
      widgetName: "getPoliceContact",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handlePoliceContactStatus(e);
            },
            value: "yes",
            id: 1,
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handlePoliceContactStatus(e);
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
      mapStateToProps: ["PoliceContact"],
    },
    {
      widgetName: "getContactReason",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["ContactReason"],
    },
    {
      widgetName: "getFearStatus",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleFearStatus(e);
            },
            value: "yes",
            id: 1,
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleFearStatus(e);
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
      mapStateToProps: ["FearStatus"],
    },{
      widgetName: "getBenefitStatus",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["BenefitStatus"],
    },{
      widgetName: "end-message",
      widgetFunc: (props) => {
        return <div className="learning-options-container"><Review/></div>;
      },
    },
  ],
};
export default config;
