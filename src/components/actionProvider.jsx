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
      clientType: value.target.value,
    }));

    const botMessage = createChatBotMessage("Okay, what is your case type?", {
      widget: "getCaseType",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const disableOption = (name, buttonType) => {

    let button = document.getElementsByClassName(name);
    
    for(var i=0; i<button.length; i++){
      if(button[i].id === buttonType)
      {
        button[i].disabled = true;
      }
    }

  }

  const handleCaseType = (value) => {

    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'clientType');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      caseType: value.target.value,
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
    console.log('get in usa : ', value.target.value);

    disableOption('idBkdM', 'caseType');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      inUSA: value.target.value
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
        clientName: value.target.value
      }));
    }
  };

  const handleMarriedStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'immigrationPaperwork');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      marriedStatus: value.target.value,
    }));
    if (value.target.name == "Yes") {
      const botMessage = createChatBotMessage(
        "Immigration Status of spouse ?",
        {
          widget: "getSpouseStatus",
        }
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // immigrationSpouseStatus: value.target.value
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

  const handleImmigrationStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'inUSA');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      immigrationStatus: value.target.value,
    }));

    const botMessage = createChatBotMessage(
      "Briefly describe your legal problem or tell me why you need a lawyer?",
      {
        widget: "getHearingDate",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHearingType = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'immigrationStatus');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      hearingType: value.target.value,
    }));

    const botMessage = createChatBotMessage(
      "c.	Were you given immigration paperwork?",
      {
        widget: "getImmigrationPaperwork",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleImmigrationPaperwork = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'hearingType');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      immigrationPaperwork: value.target.value,
    }));

    const botMessage = createChatBotMessage("2	Are you married ?", {
      widget: "getMarriedStatus",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      // marriedStatus: value.target.value,
    }));
  };

  const handleVictimeStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'marriedStatus');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      victimOfCrime: value.target.value
    }));
    if (value.target.name == "Yes") {
      const botMessage = createChatBotMessage(
        "Where were you a victim of crime ?",
        {
          widget: "getCrimeLocation",
        }
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        victimOfCrimeLocation: value.target.value,
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

  const handlePoliceReportStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'victimOfCrime');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      policeReport: value.target.value,
    }));
    const botMessage = createChatBotMessage(
      "4.	Have you ever had contact with the police for any reason at all in the US?",
      {
        widget: "getPoliceContact",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePoliceContactStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'policeReport');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      contactWithPolice: value.target.value,
    }));
    if (value.target.name == "Yes") {
      const botMessage = createChatBotMessage(
        "Please describe why you had contact",
        {
          widget: "getContactReason",
        }
      );
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

  const handleFearStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      fearStatus: value.target.value,
    }));
    if (value.target.name == "Yes") {
      const botMessage = createChatBotMessage("a.	What do you fear and why", {
        widget: "getFearReason",
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
        clientName: value.target.value,
      }));
    }
  };

  const handleUserMessage = () => {
    let ind;
    let lastInd;
    let botMessage;

    disableOption('idBkdM', 'inUSA');

    setState(
      (prev) => (
        (ind = prev.messages.length - 2),
        (lastInd = prev.messages.length - 1),
        prev.messages[ind]["widget"] === "getInUSALocation"
          ? ((botMessage = createChatBotMessage("Client’s Name", {
              widget: "getClientName",
            }), console.log('in us location : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              inUSLocation: prev.messages[lastInd].message,
              
            })
          : prev.messages[ind]["widget"] === "getClientName"
          ? ((botMessage = createChatBotMessage("Date of Birth", {
              widget: "getAfile",
            }), console.log('client name : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              clientName: prev.messages[lastInd].message,
            })
          /* : prev.messages[ind]["widget"] === "getClientDOB"
          ? ((botMessage = createChatBotMessage("A-File", {
              widget: "getAfile",
            }), console.log('Date of Birth : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              clientDob: prev.messages[lastInd].message,
            }) */
          : prev.messages[ind]["widget"] === "getAfile"
          ? ((botMessage = createChatBotMessage("A-File", {
              widget: "getCountryOfBirth",
            }), console.log('a file : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              aFile: prev.messages[lastInd].message,
              // clientDob: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCountryOfBirth"
          ? ((botMessage = createChatBotMessage("Country of Birth", {
              widget: "getStreetAddress",
            }), console.log('country of birth : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              // aFile: prev.messages[lastInd].message,
              countryOfBirth: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getStreetAddress"
          ? ((botMessage = createChatBotMessage("Street Address (within US)", {
              widget: "getCity",
            }), console.log('Street Address : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              // countryOfBirth: prev.messages[lastInd].message,
              streetAddress: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCity"
          ? ((botMessage = createChatBotMessage("City", {
              widget: "getState",
            }), console.log('City : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              streetAddress: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getState"
          ? ((botMessage = createChatBotMessage("State", {
              widget: "getZip",
            }), console.log('state : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              city: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getZip"
          ? ((botMessage = createChatBotMessage("Zip", {
              widget: "getPhone",
            }), console.log('zip : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              state: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getPhone"
          ? ((botMessage = createChatBotMessage("Phone", {
              widget: "getLegalProblem",
            }), console.log('phone : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              zip: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getLegalProblem"
          ? ((botMessage = createChatBotMessage("Current immigration status", {
              widget: "getImmigrationStatus",
            }), console.log('Current immigration status : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              phone: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getRemovalProceedingStatus"
          ? ((botMessage = createChatBotMessage(
              "1.	Are you in removal proceedings now?",
              {
                widget: "getHearingDate",
              }
            ), console.log('Are you in removal : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
            })
          : prev.messages[ind]["widget"] === "getHearingDate"
          ? ((botMessage = createChatBotMessage(
              "1.	Are you in removal proceedings now?\n 	-Upcoming Hearing date",
              {
                widget: "getHearingLocation",
              },
              disableOption('idBkdM', 'immigrationStatus')
            ), console.log('Upcoming Hearing date : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              hearingDate: prev.messages[lastInd].message,
              // legalProblem: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getHearingLocation"
          ? ((botMessage = createChatBotMessage("Upcoming Hearing location", {
              widget: "getNextHearingType",
            }), console.log('Upcoming Hearing location', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              hearingLocation: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getNextHearingType"
          ? ((botMessage = createChatBotMessage("b.	Type of hearing", {
              widget: "getHearingType",
            }), console.log('Type of hearing', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
            })
          : prev.messages[ind]["widget"] === "getImmigrationPaperWork"
          ? ((botMessage = createChatBotMessage("Are", {
              widget: "getSpouseStatus",
            }), console.log('Are', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              immigrationPaperwork: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getSpouseStatus"
          ? ((botMessage = createChatBotMessage("Spouse Name", {
              widget: "getSpouseDOB",
            },
            disableOption('idBkdM', 'marriedStatus')), console.log('Spouse Name', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              immigrationSpouseStatus: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getMarriedStatus"
          ? ((botMessage = createChatBotMessage("Are you married", {
              widget: "getSpouseDOB",
            }), console.log('Are you married', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              marriedStatus: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getSpouseDOB"
          ? ((botMessage = createChatBotMessage("Spouse date of birth", {
              widget: "getnextVictim",
            }), console.log('Spouse date of birth', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              // spouseDOB: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getnextVictim"
          ? ((botMessage = createChatBotMessage(
              "3.	Have you ever been the victim of a crime",
              {
                widget: "getVictimOfCrime",
              }
            ), console.log('victim of a crime', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              victimOfCrime: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCrimeLocation"
          ? ((botMessage = createChatBotMessage(
              "Do you have a police report?",
              {
                widget: "getPoliceReport",
              },
              disableOption('idBkdM', 'victimOfCrime')
            ), console.log('police report', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              fearStatus: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getContactReason"
          ? ((botMessage = createChatBotMessage(
              "5.	Do you have any reason to fear going back to your country?",
              {
                widget: "getFearStatus",
              },
              disableOption('idBkdM', 'policeContact')
            ), console.log('reason to fear', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              contactReason: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getFearReason"
          ? ((botMessage = createChatBotMessage(
              "6.	Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply:",
              {
                widget: "getBenefitStatus",
              },
              disableOption('idBkdM', 'fearStatus')
            ), console.log('applied for', prev.messages[ind].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              fearReason: prev.messages[lastInd].message,
            })
          : ((botMessage = createChatBotMessage(
            "Thank you for you response",
            {
              widget: "end-message",
            }
          )),{
            ...prev,
            messages: [...prev.messages, botMessage],
          })
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
            handleImmigrationStatus,
            handleHearingType,
            handleImmigrationPaperwork,
            handleMarriedStatus,
            handleVictimeStatus,
            handlePoliceReportStatus,
            handlePoliceContactStatus,
            handleFearStatus,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
