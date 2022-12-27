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

    disableOption('idBkdM', 'caseType');

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

  const handleMarriedStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'immigrationPaperwork');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
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
    }));

    const botMessage = createChatBotMessage("2	Are you married ?", {
      widget: "getMarriedStatus",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleVictimeStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'marriedStatus');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
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
      }));
    }
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
          ? ((botMessage = createChatBotMessage("Phone", {
              widget: "getnextImmigration",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              Phone: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getnextImmigration"
          ? ((botMessage = createChatBotMessage("Current immigration status", {
              widget: "getImmigrationStatus",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              ImmigrationStatus: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getRemovalProceedingStatus"
          ? ((botMessage = createChatBotMessage(
              "1.	Are you in removal proceedings now?",
              {
                widget: "getHearingDate",
              }
            )),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
            })
          : prev.messages[ind]["widget"] === "getHearingDate"
          ? ((botMessage = createChatBotMessage(
              "1.	Are you in removal proceedings now?\n 	-Upcoming Hearing date",
              {
                widget: "getHearingLocation",
              }
            )),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingDate: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getHearingLocation"
          ? ((botMessage = createChatBotMessage("Upcoming Hearing location", {
              widget: "getNextHearingType",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingLocation: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getNextHearingType"
          ? ((botMessage = createChatBotMessage("b.	Type of hearing", {
              widget: "getHearingType",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingType: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getImmigrationPaperWork"
          ? ((botMessage = createChatBotMessage("Are", {
              widget: "getSpouseStatus",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingType: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getSpouseStatus"
          ? ((botMessage = createChatBotMessage("Spouse Name", {
              widget: "getSpouseDOB",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              SpouseName: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getMarriedStatus"
          ? ((botMessage = createChatBotMessage("Are you married", {
              widget: "getSpouseDOB",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              SpouseName: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getSpouseDOB"
          ? ((botMessage = createChatBotMessage("Spouse date of birth", {
              widget: "getnextVictim",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingLocation: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getnextVictim"
          ? ((botMessage = createChatBotMessage(
              "3.	Have you ever been the victim of a crime",
              {
                widget: "getVictimOfCrime",
              }
            )),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingType: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCrimeLocation"
          ? ((botMessage = createChatBotMessage(
              "Do you have a police report?",
              {
                widget: "getPoliceReport",
              }
            )),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingType: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getContactReason"
          ? ((botMessage = createChatBotMessage(
              "5.	Do you have any reason to fear going back to your country?",
              {
                widget: "getFearStatus",
              }
            )),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingType: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getFearReason"
          ? ((botMessage = createChatBotMessage(
              "6.	Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply:",
              {
                widget: "getBenefitStatus",
              }
            )),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              HearingType: prev.messages[lastInd].message,
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
