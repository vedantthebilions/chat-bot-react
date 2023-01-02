import { createChatBotMessage } from "react-chatbot-kit";
// import DogPicture from "./DogPicture";
import "../App.css";
import Contreras from "../image/logo.png";
import ContrerasBlack from "../image/logo_doc_black.jpg";
// import TableView from "../TableView";
import Review from '../Review';
import { steps } from "../steps";


const botName = "Contreras & Metelska,PA"; 


function disableOption(id) {
  console.log('id is : ', id);
  if( document.getElementById('clientType').value.length > 0 ) {
    console.log('here..');
    // document.getElementById('clientType').disabled = true;
  }
}

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
        // widget: "getClientName",
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
    clientType: '', // yes
    caseType: '', // yes
    inUSA: "", // yes
    inUSLocation: "", // yes
    clientName: "", // yes
    clientDob: "", // no
    aFile: "", // dont know
    countryOfBirth: "",
    streetAddress: "",
    city: "",
    state: '',
    zip: "",
    phone: "",
    immigrationStatus: "",
    legalProblem: "",
    hearingDate: "",
    hearingLocation: "",
    hearingType: "",
    immigrationPaperwork: "",
    immigrationSpouseStatus: "",
    marriedStatus:"",
    spouseName: "",
    spouseDOB:"",
    victimOfCrime:"",
    victimOfCrimeLocation:"",
    policeReport:"",
    contactWithPolice:"",
    contactReason:"",
    fearStatus:"",
    appiledImmigration:"",
    benefitStatus:""

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
              // disableOption(e.target.id);
            },
            value: "newClient",
            id:'clientType',
          },
          {
            text: "Former Client",
            handler: (e) => {
              props.actionProvider.handleClientType(e);
              // disableOption(e.target.id);
            },
            id:'clientType',
            value: "formerClient",
          },
          {
            text: "Current Client",
            handler: (e) => {
              props.actionProvider.handleClientType(e);
              // disableOption(e.target.id);
            },
            id:'clientType',
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
          <div id='getClientType' className="learning-options-container">{optionsMarkup}</div>
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
              // disableOption('clientType');
            },
            value: "immigrationCase",
            id: 'caseType',
          },
          {
            text: "Criminal",
            handler: (e) => {
              props.actionProvider.handleCaseType(e);
            },
            id: 'caseType',
            value: "criminalCase",
          },
          {
            text: "Family Case",
            handler: (e) => {
              props.actionProvider.handleCaseType(e);
            },
            id: 'caseType',
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
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleLocation(e);
            },
            id: 'inUSA',
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
            id: 'immigrationStatus',
          },
          {
            text: "Asylum Seeker",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 'immigrationStatus',
            value: "asylumSeeker",
          },
          {
            text: "No Status",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 'immigrationStatus',
            value: "noStatus",
          },
          {
            text: "F-1",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 'immigrationStatus',
            value: "f1",
          },
          {
            text: "J-1",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 'immigrationStatus',
            value: "j1",
          },
          {
            text: "USC",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 'immigrationStatus',
            value: "usc",
          },
          {
            text: "LPR",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 'immigrationStatus',
            value: "lpr",
          },
          {
            text: "DACA",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 'immigrationStatus',
            value: "daca",
          },
          {
            text: "I don't Know",
            handler: (e) => {
              props.actionProvider.handleImmigrationStatus(e);
            },
            id: 'immigrationStatus',
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
    },
    {
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
            id: 'hearingType',
          },
          {
            text: "IH",
            handler: (e) => {
              props.actionProvider.handleHearingType(e);
            },
            id: 'hearingType',
            value: "ig",
          },
          {
            text: "Don't Know",
            handler: (e) => {
              props.actionProvider.handleHearingType(e);
            },
            id: 'hearingType',
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
    },
    {
      widgetName: "getImmigrationPaperwork",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleImmigrationPaperwork(e);
            },
            value: "yes",
            id: 'immigrationPaperwork',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleImmigrationPaperwork(e);
            },
            id: 'immigrationPaperwork',
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
    },
    {
      widgetName: "getMarriedStatus",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleMarriedStatus(e);
            },
            value: "yes",
            id: 'marriedStatus',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleMarriedStatus(e);
            },
            id: 'marriedStatus',
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
      widgetName: "getSpouseDOB",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["HearingLocation"],
    },
    {
      widgetName: "getVictimOfCrime",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleVictimeStatus(e);
            },
            value: "yes",
            id: 'victimOfCrime',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleMarriedStatus(e);
            },
            id: 'victimOfCrime',
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
    },
    {
      widgetName: "getPoliceReport",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handlePoliceReportStatus(e);
            },
            value: "yes",
            id: 'policeReport',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handlePoliceReportStatus(e);
            },
            id: 'policeReport',
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
            id: 'policeContact',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handlePoliceContactStatus(e);
            },
            id: 'policeContact',
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
            id: 'fearStatus',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleFearStatus(e);
            },
            id: 'fearStatus',
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
    },
    {
      widgetName: "getBenefitStatus",
      widgetFunc: (props) => {
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["BenefitStatus"],
    },
    {
      widgetName: "end-message",
      widgetFunc: (props) => {
        return <div className="learning-options-container"><Review steps_2={props.state} /></div>;
      },
    },
  ],
};
export default config;
