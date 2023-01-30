import { createChatBotMessage } from "react-chatbot-kit";
import "../App.css";
import Contreras from "../image/logo.png";
import ContrerasBlack from "../image/logo_doc_black.jpg";
import Review from '../Review';


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
        // widget: "getClientType",
        // widget: "getYourWeight",
        widget: "getFearReason",
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
    fearReason: '',
    appiledImmigration:"",
    benefitStatus:"",
    isInValid : false,
    completeLegalName: '',
    otherNameUsed: '',
    currentMailingAddress: '',
    currentAddressYouLive: '',
    countryOfOrigin: '',
    birthDate: '',
    socialSecurityNumber: '',
    alienNumber: '',
    hadSecurityNumber: '',
    getSecurityNumber: '',
    arrivalIntoUS: '',
    i94CardNumber: '',
    cardCurrentStatus: '',
    cardExpirationDate: '',
    ctStateCountryOfBirth: '',
    passportNumOnArrival: '',
    passportExpirationDate: '',
    countryThatIssuedPassport: '',
    motherCompleteName: '',
    motherCity: '',
    motherCountryOfBirth: '',
    motherResidenceCity: '',
    motherResidenceCountry: '',
    fatherCompleteName: '',
    fatherCity: '',
    fatherCountryOfBirth: '',
    fatherResidenceCity: '',
    fatherResidenceCountry: '',
    inspectedImmigrationOficial: '',
    nonimmigrantVisaNumber: '',
    nameOnNonimmigrantVisa: '',
    dateOfApprovalNonImmigrant: '',
    sxStatus: '',
    maritalStatus: '',
    totalMarriages: '',
    currentSpouseFullname: '',
    currentSpouseAlienNum: '',
    currentSpouseDOB: '',
    currentSpouseDOMrg: '',
    currentSpouseCity: '',
    currentSpouseState: '',
    currentSpouseCountryOfBirth: '',
    priorSpouse1Fullname: '',
    priorSpouse1AlienNum: '',
    priorSpouse1DOB: '',
    priorSpouse1DOMrg: '',
    priorSpouse1City: '',
    priorSpouse1State: '',
    priorSpouse1CountryOfBirth: '',
    priorSpouse1DateMrgEnded: '',
    priorSpouse2Fullname: '',
    priorSpouse2AlienNum: '',
    priorSpouse2DOB: '',
    priorSpouse2DOMrg: '',
    priorSpouse2City: '',
    priorSpouse2State: '',
    priorSpouse2CountryOfBirth: '',
    priorSpouse2DateMrgEnded: '',
    appliedForPermenantResident: '',
    permenantResidentStatus: '',
    permenantResidentLocation: '',
    applicationResult: '',
    ethnicity: '',
    race: '',
    yourHeight: '',
    yourWeight: '',
    eyeColor: '',
    hairColor: '',
    spouseList: '',
    spouseFullnameInList: '',
    spouseDOBInList: '',
    spouseCOOrignInList: '',
    spouseRelationToUInList: '',
    spouseAlienNumberInList: '',
    spouseAppliyingForUInList: '',
    spouseAddMoreInList: '',
    addInSpouseList: [],
    orgsniationsList: '',
    addMoreInOrganizationList: '',
    arrestsList: '',
    addMoreInArrestsList: '',
    addressListOutsideUS: '',
    addMoreOustsideAddressInList: '',
    addressListInsideUS: '',
    addMoreInsideAddressInList: '',
    employementList: '',
    employementAddMoreInList: '',
    //// Page 7
    situationsThatDetainingPersons: '',
    expSituationsThatDetainingPersons: '',
    threatendedAnyPerson: '',
    expThreatendedAnyPerson: '',
    anyArmedGroup: '',
    expAnyArmedGroup: '',
    anyOtherTotalitarian: '',
    expAnyOtherTotalitarian: '',
    naziGovOfGermany: '',
    expNaziGovOfGermany: '',
    tortureOrGenocide: '',
    expTortureOrGenocide: '',
    killingAnyPerson: '',
    expKillingAnyPerson: '',
    intentionallyInjuredPerson: '',
    expIntentionallyInjuredPerson: '',
    beingForced: '',
    expBeingForced: '',
    religiousBeliefs: '',
    expReligiousBeliefs: '',
    armedForce: '',
    expArmedForce: '',
    peopleInCombat: '',
    expPeopleInCombat: '',
    // // Page 8
    haveYouReceivedPublicAssistance: '',
    expHaveYouReceivedPublicAssistance: '',
    areYouReceivePublicAssistance: '',
    expAreYouReceivePublicAssistance: '',
    removalProceedingFiledAgainstU: '',
    expRemovalProceedingFiledAgainstU: '',
    everSubmittedFraudulent: '',
    expEverSubmittedFraudulent: '',
    liedAboutMisrepresented: '',
    expLiedAboutMisrepresented: '',
    falselyClaimedToBeUS: '',
    expFalselyClaimedToBeUS: '',
    beenAStowaway: '',
    expBeenAStowaway: '',
    alienSmuggling: '',
    expAlienSmuggling: '',
    fraudulentDocuments: '',
    expFraudulentDocuments: '',
    removedFromTheUS: '',
    expRemovedFromTheUS: '',
    beingAdmittedOrParoled: '',
    expBeingAdmittedOrParoled: '',
    beenUnlawfullyPresentInUS: '',
    expBeenUnlawfullyPresentInUS: '',
    // // Page 9
    beenUnlawfullyPresentYearInUS: '',
    expBeenUnlawfullyPresentYearInUS: '',
    reenteredInUSInAggregate: '',
    expReenteredInUSInAggregate: '',
    removedFromUSBeforeReentered: '',
    expRemovedFromUSBeforeReentered: '',
    practicePolygamyInUS: '',
    expPracticePolygamyInUS: '',
    iNASection232C: '',
    expINASection232C: '',
    grantedCustodyOfChild: '',
    expGrantedCustodyOfChild: '',
    violationOfAnyFederal: '',
    expViolationOfAnyFederal: '',
    renouncedUSCitizenship: '',
    expRenouncedUSCitizenship: '',
    nationalSecurityTrainingCorps: '',
    expNationalSecurityTrainingCorps: '',
    dischargedFromSuchTraining: '',
    expDischargedFromSuchTraining: '',
    convictedOfDesertion: '',
    expConvictedOfDesertion: '',
    leftOrRemainedOutsideTheUS: '',
    expLeftOrRemainedOutsideTheUS: '',
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
      mapStateToProps: ["phone"],
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
    // // Page 1
    {
      widgetName: "getLegalName",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["completeLegalName"],
    },
    {
      widgetName: "getOtherNameUsed",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["otherNameUsed"],
    },
    {
      widgetName: "getCurrentMailingAddress",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentAddressYouLive"],
    },
    {
      widgetName: "getAddressYouLive",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentAddressYouLive"],
    },
    {
      widgetName: "getCountryOfOrigin",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["countryOfOrigin"],
    },
    {
      widgetName: "getBirthDate",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["birthDate"],
    },
    {
      widgetName: "getSocialSecurityNumber",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["socialSecurityNumber"],
    },
    {
      widgetName: "getAlienNumber",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["alienNumber"],
    },
    {
      widgetName: "getHadSecurityNumber",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleHadSecurityNumber(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleHadSecurityNumber(e);
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
      widgetName: "getSecurityNumber",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["getSecurityNumber"],
    },
    {
      widgetName: "getArrivalIntoUS",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["arrivalIntoUS"],
    },
    {
      widgetName: "getI94CardNumber",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["i94CardNumber"],
    },
    {
      widgetName: "getCardCurrentStatus",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["cardCurrentStatus"],
    },
    {
      widgetName: "getCardExpirationDate",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["cardExpirationDate"],
    },
    {
      widgetName: "getCtStateCountryOfBirth",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["ctStateCountryOfBirth"],
    },
    {
      widgetName: "getPassportNumOnArrival",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["passportNumOnArrival"],
    },
    {
      widgetName: "getPassportExpirationDate",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["passportExpirationDate"],
    },
    {
      widgetName: "getCountryThatIssuedPassport",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["countryThatIssuedPassport"],
    },
    {
      widgetName: "getMotherCompleteName",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["motherCompleteName"],
    },
    {
      widgetName: "getMotherCity",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["motherCity"],
    },
    {
      widgetName: "getMotherCountryOfBirth",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["motherCountryOfBirth"],
    },
    {
      widgetName: "getMotherResidenceCity",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["motherResidenceCity"],
    },
    {
      widgetName: "getMotherResidenceCountry",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["motherResidenceCountry"],
    },
    // // Page 2
    {
      widgetName: "getFatherCompleteName",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["fatherCompleteName"],
    },
    {
      widgetName: "getFatherCity",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["fatherCity"],
    },
    {
      widgetName: "getFatherCountryOfBirth",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["fatherCountryOfBirth"],
    },
    {
      widgetName: "getFatherResidenceCity",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["fatherResidenceCity"],
    },
    {
      widgetName: "getFatherResidenceCountry",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["fatherResidenceCountry"],
    },
    {
      widgetName: "getInspectedImmigrationOficial",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["inspectedImmigrationOficial"],
    },
    {
      widgetName: "getNonimmigrantVisaNumber",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["nonimmigrantVisaNumber"],
    },
    {
      widgetName: "getNameOnNonimmigrantVisa",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["nameOnNonimmigrantVisa"],
    },
    {
      widgetName: "getDateOfApprovalNonImmigrant",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["dateOfApprovalNonImmigrant"],
    },
    {
      widgetName: "getSxStatus",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Male",
            handler: (e) => {
              props.actionProvider.handleSxStatus(e);
            },
            value: "male",
            id: 'inUSA',
          },
          {
            text: "Female",
            handler: (e) => {
              props.actionProvider.handleSxStatus(e);
            },
            id: 'inUSA',
            value: "female",
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
      widgetName: "getMaritalStatus",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Married",
            handler: (e) => {
              props.actionProvider.handleMaritalStatus(e);
            },
            value: "married",
            id: 'marriedStatus',
          },
          {
            text: "Single",
            handler: (e) => {
              props.actionProvider.handleMaritalStatus(e);
            },
            id: 'marriedStatus',
            value: "single",
          },
          {
            text: "Divorced",
            handler: (e) => {
              props.actionProvider.handleMaritalStatus(e);
            },
            id: 'marriedStatus',
            value: "divorced",
          },
          {
            text: "Widowed",
            handler: (e) => {
              props.actionProvider.handleMaritalStatus(e);
            },
            id: 'marriedStatus',
            value: "widowed",
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
      widgetName: "getTotalMarriages",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["totalMarriages"],
    },
    {
      widgetName: "getCurrentSpouseFullname",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentSpouseFullname"],
    },
    {
      widgetName: "getCurrentSpouseAlienNum",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentSpouseAlienNum"],
    },
    {
      widgetName: "getCurrentSpouseDOB",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentSpouseDOB"],
    },
    {
      widgetName: "getCurrentSpouseDOMrg",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentSpouseDOMrg"],
    },
    {
      widgetName: "getCurrentSpouseCity",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentSpouseCity"],
    },
    {
      widgetName: "getCurrentSpouseState",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentSpouseState"],
    },
    {
      widgetName: "getCurrentSpouseCountryOfBirth",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["currentSpouseCountryOfBirth"],
    },
    {
      widgetName: "getPriorSpouse1Fullname",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse1Fullname"],
    },
    {
      widgetName: "getPriorSpouse1AlienNum",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse1AlienNum"],
    },
    {
      widgetName: "getPriorSpouse1DOB",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse1DOB"],
    },
    {
      widgetName: "getPriorSpouse1DOMrg",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse1DOMrg"],
    },
    {
      widgetName: "getPriorSpouse1City",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse1State"],
    },
    {
      widgetName: "getPriorSpouse1State",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse1State"],
    },
    {
      widgetName: "getPriorSpouse1CountryOfBirth",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse1CountryOfBirth"],
    },
    {
      widgetName: "getPriorSpouse1DateMrgEnded",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse1DateMrgEnded"],
    },
    {
      widgetName: "getPriorSpouse2Fullname",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse2Fullname"],
    },
    {
      widgetName: "getPriorSpouse2AlienNum",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse2AlienNum"],
    },
    {
      widgetName: "getPriorSpouse2DOB",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse2DOB"],
    },
    {
      widgetName: "getPriorSpouse2DOMrg",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse2DOMrg"],
    },
    {
      widgetName: "getPriorSpouse2City",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse2State"],
    },
    {
      widgetName: "getPriorSpouse2State",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse2State"],
    },
    {
      widgetName: "getPriorSpouse2CountryOfBirth",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse2CountryOfBirth"],
    },
    {
      widgetName: "getPriorSpouse2DateMrgEnded",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["priorSpouse2DateMrgEnded"],
    },
    {
      widgetName: "getAppliedForPermenantResident",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAppliedForPermenantResident(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAppliedForPermenantResident(e);
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
      widgetName: "getPermenantResidentStatus",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["permenantResidentStatus"],
    },
    {
      widgetName: "getPermenantResidentLocation",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["permenantResidentLocation"],
    },
    {
      widgetName: "getApplicationResult",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["applicationResult"],
    },
    // // Page 3
    {
      widgetName: "getEthnicity",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["ethnicity"],
    },
    {
      widgetName: "getRace",
      widgetFunc: (props) => {
        const options = [
          {
            text: "White",
            handler: (e) => {
              props.actionProvider.handleRace(e);
            },
            value: "white",
            id: 'inUSA',
          },
          {
            text: "Asian",
            handler: (e) => {
              props.actionProvider.handleRace(e);
            },
            id: 'inUSA',
            value: "asian",
          },
          {
            text: "Black",
            handler: (e) => {
              props.actionProvider.handleRace(e);
            },
            value: "black",
            id: 'inUSA',
          },
          {
            text: "African American",
            handler: (e) => {
              props.actionProvider.handleRace(e);
            },
            id: 'inUSA',
            value: "africanAmerican",
          },
          {
            text: "American Indian",
            handler: (e) => {
              props.actionProvider.handleRace(e);
            },
            value: "americanIndian",
            id: 'inUSA',
          },
          {
            text: "Alaskan Native",
            handler: (e) => {
              props.actionProvider.handleRace(e);
            },
            id: 'inUSA',
            value: "alaskanNative",
          },
          {
            text: "Native Hawaiian",
            handler: (e) => {
              props.actionProvider.handleRace(e);
            },
            value: "nativeHawaiian",
            id: 'inUSA',
          },
          {
            text: "Other Pacific Islander",
            handler: (e) => {
              props.actionProvider.handleRace(e);
            },
            id: 'inUSA',
            value: "otherPacificIslander",
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
      widgetName: "getYourHeight",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["yourHeight"],
    },
    {
      widgetName: "getYourWeight",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["yourWeight"],
    },
    {
      widgetName: "getEyeColor",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["eyeColor"],
    },
    {
      widgetName: "getHairColor",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["hairColor"],
    },
    // // Spouse List
    {
      widgetName: "getSpouseList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleToAddYourSpouseList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleToAddYourSpouseList(e);
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
      widgetName: "getSpouseFullnameInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getSpouseDOBInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseDOBInList"],
    },
    {
      widgetName: "getSpouseCOOrignInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseCOOrignInList"],
    },
    {
      widgetName: "getSpouseRelationToUInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseRelationToUInList"],
    },
    {
      widgetName: "getSpouseAlienNumberInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseAlienNumberInList"],
    },
    {
      widgetName: "getSpouseAppliyingForUInList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleSpouseAppliyingForUInList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleSpouseAppliyingForUInList(e);
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
      widgetName: "getSpouseAddMoreInList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleSpouseAddMoreInList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleSpouseAddMoreInList(e);
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
    // // Organizations List
    {
      widgetName: "getOrgsniationsList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleToAddYourOrgsniationsList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleToAddYourOrgsniationsList(e);
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
      widgetName: "getNameInOrgList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getLocationAndPurposeInOrgList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getFromInOrgList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getToInOrgList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getAddMoreInOrganizationList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAddMoreInOrganizationList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAddMoreInOrganizationList(e);
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
    // // Arrests List
    {
      widgetName: "getArrestsList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleArrestsList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleArrestsList(e);
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
      widgetName: "getDateInArrestsList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getLocationInArrestsList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getReasonInArrestsList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getResultInArrestsList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getAddMoreInArrestsList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAddMoreInArrestsList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAddMoreInArrestsList(e);
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
    // // Address List Outside US
    {
      widgetName: "getAddressListOutsideUS",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAddressListOutsideUS(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAddressListOutsideUS(e);
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
      widgetName: "getOutsideAddressDateInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getOutsideAddressPlaceInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getAddMoreOustsideAddressInList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAddMoreOustsideAddressInList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAddMoreOustsideAddressInList(e);
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
    // // Address List Inside US
    {
      widgetName: "getAddressListInsideUS",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAddressListInsideUS(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAddressListInsideUS(e);
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
      widgetName: "getInsideAddressDateInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getInsideAddressPlaceInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getAddMoreInsideAddressInList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAddMoreInsideAddressInList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAddMoreInsideAddressInList(e);
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
    // // Employement List
    {
      widgetName: "getEmployementList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleToAddYourEmployementList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleToAddYourEmployementList(e);
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
      widgetName: "getEmployeeNameInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getJobLocationInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getJobTitleInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getDateInList",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["spouseFullnameInList"],
    },
    {
      widgetName: "getEmployemnetAddMoreInList",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleEmployemnetAddMoreInList(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleEmployemnetAddMoreInList(e);
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
      widgetName: "getSituationsThatDetainingPersons",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleSituationsThatDetainingPersons(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleSituationsThatDetainingPersons(e);
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
      widgetName: "getExpSituationsThatDetainingPersons",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expSituationsThatDetainingPersons"],
    },
    {
      widgetName: "getThreatendedAnyPerson",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleThreatendedAnyPerson(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleThreatendedAnyPerson(e);
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
      widgetName: "getExpThreatendedAnyPerson",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expThreatendedAnyPerson"],
    },
    {
      widgetName: "getAnyArmedGroup",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAnyArmedGroup(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAnyArmedGroup(e);
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
      widgetName: "getExpAnyArmedGroup",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expAnyArmedGroup"],
    },
    {
      widgetName: "getAnyOtherTotalitarian",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAnyOtherTotalitarian(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAnyOtherTotalitarian(e);
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
      widgetName: "getExpAnyOtherTotalitarian",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expAnyOtherTotalitarian"],
    },
    {
      widgetName: "getNaziGovOfGermany",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleNaziGovOfGermany(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleNaziGovOfGermany(e);
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
      widgetName: "getExpNaziGovOfGermany",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expNaziGovOfGermany"],
    },
    {
      widgetName: "getTortureOrGenocide",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleTortureOrGenocide(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleTortureOrGenocide(e);
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
      widgetName: "getExpTortureOrGenocide",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expTortureOrGenocide"],
    },
    {
      widgetName: "getKillingAnyPerson",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleKillingAnyPerson(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleKillingAnyPerson(e);
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
      widgetName: "getExpKillingAnyPerson",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expKillingAnyPerson"],
    },
    {
      widgetName: "getIntentionallyInjuredPerson",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleIntentionallyInjuredPerson(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleIntentionallyInjuredPerson(e);
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
      widgetName: "getExpIntentionallyInjuredPerson",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expIntentionallyInjuredPerson"],
    },
    {
      widgetName: "getBeingForced",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleBeingForced(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleBeingForced(e);
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
      widgetName: "getExpBeingForced",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expBeingForced"],
    },
    {
      widgetName: "getReligiousBeliefs",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleReligiousBeliefs(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleReligiousBeliefs(e);
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
      widgetName: "getExpReligiousBeliefs",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expReligiousBeliefs"],
    },
    {
      widgetName: "getArmedForce",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleArmedForce(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleArmedForce(e);
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
      widgetName: "getExpArmedForce",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expArmedForce"],
    },
    {
      widgetName: "getPeopleInCombat",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handlePeopleInCombat(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handlePeopleInCombat(e);
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
      widgetName: "getExpPeopleInCombat",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expPeopleInCombat"],
    },
    {
      widgetName: "getHaveYouReceivedPublicAssistance",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleHaveYouReceivedPublicAssistance(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleHaveYouReceivedPublicAssistance(e);
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
      widgetName: "getExpHaveYouReceivedPublicAssistance",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expHaveYouReceivedPublicAssistance"],
    },
    {
      widgetName: "getAreYouReceivePublicAssistance",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAreYouReceivePublicAssistance(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAreYouReceivePublicAssistance(e);
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
      widgetName: "getExpAreYouReceivePublicAssistance",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expAreYouReceivePublicAssistance"],
    },
    {
      widgetName: "getRemovalProceedingFiledAgainstU",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleRemovalProceedingFiledAgainstU(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleRemovalProceedingFiledAgainstU(e);
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
      widgetName: "getExpRemovalProceedingFiledAgainstU",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expRemovalProceedingFiledAgainstU"],
    },
    {
      widgetName: "getEverSubmittedFraudulent",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleEverSubmittedFraudulent(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleEverSubmittedFraudulent(e);
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
      widgetName: "getExpEverSubmittedFraudulent",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expEverSubmittedFraudulent"],
    },
    {
      widgetName: "getLiedAboutMisrepresented",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleLiedAboutMisrepresented(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleLiedAboutMisrepresented(e);
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
      widgetName: "getExpLiedAboutMisrepresented",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expLiedAboutMisrepresented"],
    },
    {
      widgetName: "getFalselyClaimedToBeUS",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleFalselyClaimedToBeUS(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleFalselyClaimedToBeUS(e);
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
      widgetName: "getExpFalselyClaimedToBeUS",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expFalselyClaimedToBeUS"],
    },
    {
      widgetName: "getBeenAStowaway",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleBeenAStowaway(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleBeenAStowaway(e);
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
      widgetName: "getExpBeenAStowaway",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expBeenAStowaway"],
    },
    {
      widgetName: "getAlienSmuggling",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleAlienSmuggling(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleAlienSmuggling(e);
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
      widgetName: "getExpAlienSmuggling",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expAlienSmuggling"],
    },
    {
      widgetName: "getFraudulentDocuments",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleFraudulentDocuments(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleFraudulentDocuments(e);
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
      widgetName: "getExpFraudulentDocuments",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expFraudulentDocuments"],
    },
    {
      widgetName: "getRemovedFromTheUS",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleRemovedFromTheUS(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleRemovedFromTheUS(e);
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
      widgetName: "getExpRemovedFromTheUS",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expRemovedFromTheUS"],
    },
    {
      widgetName: "getBeingAdmittedOrParoled",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleBeingAdmittedOrParoled(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleBeingAdmittedOrParoled(e);
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
      widgetName: "getExpBeingAdmittedOrParoled",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expBeingAdmittedOrParoled"],
    },
    {
      widgetName: "getBeenUnlawfullyPresentInUS",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleBeenUnlawfullyPresentInUS(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleBeenUnlawfullyPresentInUS(e);
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
      widgetName: "getExpBeenUnlawfullyPresentInUS",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expBeenUnlawfullyPresentInUS"],
    },
    {
      widgetName: "getBeenUnlawfullyPresentYearInUS",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleBeenUnlawfullyPresentYearInUS(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleBeenUnlawfullyPresentYearInUS(e);
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
      widgetName: "getExpBeenUnlawfullyPresentYearInUS",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expBeenUnlawfullyPresentYearInUS"],
    },
    {
      widgetName: "getReenteredInUSInAggregate",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleReenteredInUSInAggregate(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleReenteredInUSInAggregate(e);
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
      widgetName: "getExpReenteredInUSInAggregate",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expReenteredInUSInAggregate"],
    },
    {
      widgetName: "getRemovedFromUSBeforeReentered",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleRemovedFromUSBeforeReentered(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleRemovedFromUSBeforeReentered(e);
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
      widgetName: "getExpRemovedFromUSBeforeReentered",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expRemovedFromUSBeforeReentered"],
    },
    {
      widgetName: "getPracticePolygamyInUS",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handlePracticePolygamyInUS(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handlePracticePolygamyInUS(e);
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
      widgetName: "getExpPracticePolygamyInUS",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expPracticePolygamyInUS"],
    },
    {
      widgetName: "getINASection232C",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleINASection232C(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleINASection232C(e);
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
      widgetName: "getExpINASection232C",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expINASection232C"],
    },
    {
      widgetName: "getGrantedCustodyOfChild",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleGrantedCustodyOfChild(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleGrantedCustodyOfChild(e);
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
      widgetName: "getExpGrantedCustodyOfChild",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expGrantedCustodyOfChild"],
    },
    {
      widgetName: "getViolationOfAnyFederal",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleViolationOfAnyFederal(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleViolationOfAnyFederal(e);
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
      widgetName: "getExpViolationOfAnyFederal",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expViolationOfAnyFederal"],
    },
    {
      widgetName: "getRenouncedUSCitizenship",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleRenouncedUSCitizenship(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleRenouncedUSCitizenship(e);
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
      widgetName: "getExpRenouncedUSCitizenship",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expRenouncedUSCitizenship"],
    },
    {
      widgetName: "getNationalSecurityTrainingCorps",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleNationalSecurityTrainingCorps(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleNationalSecurityTrainingCorps(e);
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
      widgetName: "getExpNationalSecurityTrainingCorps",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expNationalSecurityTrainingCorps"],
    },
    {
      widgetName: "getDischargedFromSuchTraining",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleDischargedFromSuchTraining(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleDischargedFromSuchTraining(e);
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
      widgetName: "getExpDischargedFromSuchTraining",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expDischargedFromSuchTraining"],
    },
    {
      widgetName: "getConvictedOfDesertion",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleConvictedOfDesertion(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleConvictedOfDesertion(e);
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
      widgetName: "getExpConvictedOfDesertion",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expConvictedOfDesertion"],
    },
    {
      widgetName: "getLeftOrRemainedOutsideTheUS",
      widgetFunc: (props) => {
        const options = [
          {
            text: "Yes",
            handler: (e) => {
              props.actionProvider.handleLeftOrRemainedOutsideTheUS(e);
            },
            value: "yes",
            id: 'inUSA',
          },
          {
            text: "No",
            handler: (e) => {
              props.actionProvider.handleLeftOrRemainedOutsideTheUS(e);
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
      widgetName: "getExpLeftOrRemainedOutsideTheUS",
      widgetFunc: (props) => {        
        return <div className="learning-options-container"></div>;
      },
      mapStateToProps: ["expLeftOrRemainedOutsideTheUS"],
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
