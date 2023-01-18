import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  let list = [];
  
  const getSpouseDetail = () => {
    let spouseDetail = localStorage.getItem('spouseDetail');
    if (!spouseDetail || spouseDetail.length <= 0) {
      spouseDetail = resetSpouseDetail();
    }
    return JSON.parse(spouseDetail);
  }

  const setSpouseDetail = (details) => {
    localStorage.setItem('spouseDetail', JSON.stringify(details));
  }

  const resetSpouseDetail = () => {
    //console.log('resetSpouseDetail');
    let spouseDetails = {name: '', dob: '', country: '', relation: '', number: '', isPerson: ''};
    setSpouseDetail(spouseDetails);
    return spouseDetails;
  }

  let spouseDetail = getSpouseDetail();

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
      clientType: value.target.name,
    }), console.log('client type ', value.target.name));

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
      caseType: value.target.name,
    }), console.log('case type ', value.target.name));

    const botMessage = createChatBotMessage(
      "Are you currently outside the US?",
      {
        widget: "getInUSA",
        // widget: "end-message",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLocation = (value) => {
    const message = createClientMessage(value.target.name);
    console.log('get in usa : ', value.target.name);

    disableOption('idBkdM', 'caseType');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      inUSA: value.target.name
    }));
    if (value.target.name === "Yes") {
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
        // id: 'clientName'
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        clientName: value.target.name
      }));
    }
  };

  const handleMarriedStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'immigrationPaperwork');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      marriedStatus: value.target.name,
    }), console.log('married status ', value.target.name));
    if (value.target.name === "Yes") {
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
      const botMessage = createChatBotMessage("3.	Have you ever been the victim of a crime", {
        widget: "getPoliceReport",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        victimOfCrime: value.target.name
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
      immigrationStatus: value.target.name,
    }), console.log('immigrationStatus : ', value.target.name));

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
      hearingType: value.target.name,
    }), console.log('hearing type : ', value.target.name));

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

  const handleSxStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'hearingType');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      sxStatus: value.target.name,
    }), console.log('Sex status ', value.target.name));

    const botMessage = createChatBotMessage("Marital Status", {
      widget: "getMaritalStatus",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      // marriedStatus: value.target.value,
    }));
  };

  const handleMaritalStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'hearingType');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      maritalStatus: value.target.name,
    }), console.log('Marital status ', value.target.name));

    const botMessage = createChatBotMessage("Total number of marriages", {
      widget: "getTotalMarriages",
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
      // victimOfCrime: value.target.name
    }), /* console.log('victim of crime ', value.target.name) */);
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage(
        "Where were you a victim of crime ?",
        {
          widget: "getCrimeLocation",
        }
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        victimOfCrimeLocation: value.target.name,
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
    //   policeReport: value.target.name,
    // }), console.log('police report ', value.target.name));
    victimOfCrime: value.target.name
    }), console.log('victim of crime ', value.target.name));
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
      contactWithPolice: value.target.name,
    }), console.log(' contact with police ', value.target.name));
    if (value.target.name === "Yes") {
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
      const botMessage = createChatBotMessage("5.	Do you have any reason to fear going back to your country?", {
        widget: "getLegalName",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // fearReason: value.target.value
      }));
    }
  };

  const handleFearStatus = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      fearStatus: value.target.name,
    }), console.log('reason to fear ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("a.	What do you fear and why", {
        // widget: "getFearReason",
        widget: "getLegalName",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("6.	Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply:", {
        widget: "getBenefitStatus",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), /* console.log('client name fear else.. ', value.target.name) */);
    }
  };

  const handleHadSecurityNumber = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      // fearStatus: value.target.name,
      hadSecurityNumber: value.target.name,
    }), console.log('if you had number : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("a.	What was the number", {
        // widget: "getFearReason",
        widget: "getArrivalIntoUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Date and city of last entry / arrival into the U.S.", {
        widget: "getArrivalIntoUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), /* console.log('client name fear else.. ', value.target.name) */);
    }
  };

  const handleAppliedForPermenantResident = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      appliedForPermenantResident: value.target.name,
    }), console.log('if applied for permanent resident : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("please indicate the date of the application", {
        widget: "getPermenantResidentStatus",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("6.	Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply:", {
        widget: "getBenefitStatus",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), /* console.log('client name fear else.. ', value.target.name) */);
    }
  };

  const handleRace = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'victimOfCrime');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      race: value.target.name
    }), console.log('Race : ', value.target.name));
    const botMessage = createChatBotMessage(
      "Height",
      {
        widget: "getYourHeight",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleToAddYourSpouseList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      spouseList: value.target.name,
    }), console.log('if add spouse list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Spouse Fullname", {
        widget: "getSpouseFullnameInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("6.	Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply:", {
        widget: "getBenefitStatus",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), /* console.log('client name fear else.. ', value.target.name) */);
    }
  };

  const handleSpouseAppliyingForUInList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      spouseAppliyingForUInList: value.target.name,
    }), updateSpouseDetail('isPerson', value.target.name), console.log('if Appliying spouse list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Want to Add More ?", {
        widget: "getSpouseAddMoreInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("6.	Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply:", {
        widget: "getBenefitStatus",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), /* console.log('client name fear else.. ', value.target.name) */);
    }
  };

  const handleSpouseAddMoreInList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      spouseAddMoreInList: value.target.name,
    }), console.log('if add more in spouse list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Spouse Fullname", {
        widget: "getSpouseFullnameInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("6.	Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply:", {
        widget: "getBenefitStatus",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), /* console.log('client name fear else.. ', value.target.name) */);
    }
  };

  const handleImmigrationPaperwork = (value) => {
    const message = createClientMessage(value.target.name);

    disableOption('idBkdM', 'hearingType');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      immigrationPaperwork: value.target.name,
    }), console.log('immigration paperwork ', value.target.name));

    const botMessage = createChatBotMessage("2	Are you married ?", {
      widget: "getMarriedStatus",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      // marriedStatus: value.target.value,
    }));
  };

  const handleSituationsThatDetainingPersons = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      situationsThatDetainingPersons: value.target.name,
    }), console.log('Situations : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpSituationsThatDetainingPersons",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("37.	Have you EVER been a member of, assisted, or participated in any group, unit, or organization of any kind in which you or other persons used any type of weapon against any person or threatened to do so?", {
        widget: "getThreatendedAnyPerson",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleThreatendedAnyPerson = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      threatendedAnyPerson: value.target.name,
    }), console.log('Threatended : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpThreatendedAnyPerson",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("38.	Have you EVER served in, been a member of, assisted, or participated in any military unit, paramilitary unit, police unit, self-defense unit, vigilante unit, rebel group, guerilla group, militia, insurgent organization, or any other armed group?", {
        widget: "getFearReason",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const addSpouseList = (value) => {

    console.log('list befoer: ', list);

    console.log('value in list ', value);

    let spList = [];
    
    spList.push([value]);
    console.log('list : ', spList);
    
    setState((prev) => ({
      ...prev,
      addInSpouseList: [spList],
    }));

    console.log('list after : ', spList);
  };

  const updateSpouseDetail = (key, value) => {
    //console.log(key, value, spouseDetail);
    Object.keys(spouseDetail).forEach((item) => {
      if(item == key) {
        spouseDetail[item] = value
      }
    })
    setSpouseDetail(spouseDetail);
    if (key == 'isPerson') {
      // add in array
      list.push(spouseDetail);
      console.log('list=>', list);
      //reset
      spouseDetail = resetSpouseDetail();
    }
    console.log('spouse detail : ', spouseDetail);
  }

  const setMessage = (widgetName, message, prev) => {
    console.log('set msg..', widgetName, '   msg...', message, '   prev value...', prev);

    let botMessage = createChatBotMessage(
      message, 
      {
        widget: widgetName,
      }
      );
      setState(() => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
  }

  const handleUserMessage = () => {
    // alert('here');
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
          ? (((/^[A-Za-z\s]*$/.test(prev.messages[lastInd].message))
              &&
              (prev.messages[lastInd].message.length != 3 || prev.messages[lastInd].message.length != 0))
            ? ((botMessage = createChatBotMessage("Date of Birth", {
                widget: "getClientDOB",
              }), console.log('client name if.. ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                clientName: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("Please enter valid name", {
                widget: "getClientName",
              }), console.log('client name else.. ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                clientName: prev.messages[lastInd].message,
              })
            )
          : prev.messages[ind]["widget"] === "getClientDOB"
          ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
              &&
              (prev.messages[lastInd].message.length != 0))
            ? ((botMessage = createChatBotMessage("A-File", {
                widget: "getAfile",
              }), console.log('clientDob : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                clientDob: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                widget: "getClientDOB",
              }), console.log('clientDob : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                clientDob: prev.messages[lastInd].message,
              })
            )
          : prev.messages[ind]["widget"] === "getAfile"
          ? ((botMessage = createChatBotMessage("Country of Birth", {
              widget: "getCountryOfBirth",
            }), console.log('a file : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              aFile: prev.messages[lastInd].message,
              // clientDob: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCountryOfBirth"
          ? ((botMessage = createChatBotMessage("Street Address (within US)", {
              widget: "getStreetAddress",
            }), console.log('country of birth : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              // aFile: prev.messages[lastInd].message,
              countryOfBirth: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getStreetAddress"
          ? ((botMessage = createChatBotMessage("City", {
              widget: "getCity",
            }), console.log('Street Address : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              // countryOfBirth: prev.messages[lastInd].message,
              streetAddress: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCity"
          ? ((botMessage = createChatBotMessage("State", {
              widget: "getState",
            }), console.log('City : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              city: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getState"
          ? ((botMessage = createChatBotMessage("Zip", {
              widget: "getZip",
            }), console.log('state : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              state: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getZip"
          ? (((/^[0-9]+$/.test(prev.messages[lastInd].message))
            &&
            (prev.messages[lastInd].message.length == 6 && prev.messages[lastInd].message.length != 0))
            ? ((botMessage = createChatBotMessage("Phone", {
                widget: "getPhone",
              }), console.log('zip : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                zip: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("enter valid zip code", {
                widget: "getZip",
              }), console.log('zip : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                zip: prev.messages[lastInd].message,
              })
            )
          : prev.messages[ind]["widget"] === "getPhone"
          ? (((/^[0-9]+$/.test(prev.messages[lastInd].message))
              &&
              (prev.messages[lastInd].message.length >= 10 && prev.messages[lastInd].message.length != 0))
            ? ((botMessage = createChatBotMessage("Current immigration status", {
                widget: "getImmigrationStatus",
              }), console.log('phone : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                phone: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("phone error", {
                widget: "getPhone",
              }), console.log('phone : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                phone: prev.messages[lastInd].message,
              })
            )
          : prev.messages[ind]["widget"] === "getImmigrationStatus"
          ? ((botMessage = createChatBotMessage("1.	Are you in removal proceedings now?", {
              widget: "getHearingDate",
            })),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              ImmigrationStatus: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getHearingDate"
          ? ((botMessage = createChatBotMessage(
              "1.	Are you in removal proceedings now?\n 	-Upcoming Hearing date",
              {
                widget: "getHearingLocation",
              },
              disableOption('idBkdM', 'immigrationStatus')
            ), console.log('legal problem : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              
              legalProblem: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getHearingLocation"
          ? ((botMessage = createChatBotMessage("Upcoming Hearing location", {
              widget: "getNextHearingType",
            }), console.log('Hearing date', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              hearingDate: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getNextHearingType"
          ? ((botMessage = createChatBotMessage("b.	Type of hearing", {
              widget: "getHearingType",
            }), console.log('hearing location', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              hearingLocation: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getSpouseStatus"
          ? ((botMessage = createChatBotMessage("Spouse Name", {
              widget: "getSpouseDOB",
            },
            disableOption('idBkdM', 'marriedStatus')), console.log('immigration status of spouse', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              immigrationSpouseStatus: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getSpouseDOB"
          ? ((botMessage = createChatBotMessage("Spouse date of birth", {
              widget: "getnextVictim",
            }), console.log('Spouse Name', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              spouseName: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getnextVictim"
          ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
              &&
              (prev.messages[lastInd].message.length !== 0))
            ? ((botMessage = createChatBotMessage("3.	Have you ever been the victim of a crime",
            {
              widget: "getVictimOfCrime",
            }), console.log('spouseDOB : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                spouseDOB: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                widget: "getnextVictim",
              }), console.log('spouseDOB : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                spouseDOB: prev.messages[lastInd].message,
              })
            )
          : prev.messages[ind]["widget"] === "getCrimeLocation"
          ? ((botMessage = createChatBotMessage(
              "Do you have a police report?",
              {
                widget: "getPoliceReport",
              },
              disableOption('idBkdM', 'victimOfCrime')
            ), console.log('Victim Crime Location', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              victimOfCrimeLocation: prev.messages[lastInd].message,
              // fearStatus: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getContactReason"
          ? ((botMessage = createChatBotMessage(
              "5.	Do you have any reason to fear going back to your country?",
              {
                widget: "getLegalName",
              },
              disableOption('idBkdM', 'policeContact')
            ), console.log('contact reason', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              contactReason: prev.messages[lastInd].message,
            })
          /* : prev.messages[ind]["widget"] === "getLegalName"
          ? (((/^[A-Za-z\s]*$/.test(prev.messages[lastInd].message))
              &&
              (prev.messages[lastInd].message.length != 3 || prev.messages[lastInd].message.length != 0))
            ? ((botMessage = createChatBotMessage("Complete legal name of the applicant (if married, married name)", {
                widget: "getFearReason",
              }), console.log('why to fear', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                // completeLegalName: prev.messages[lastInd].message,
                fearReason: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("Please enter valid name", {
                widget: "getLegalName",
              }), console.log('why to fear', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                // completeLegalName: prev.messages[lastInd].message,
                fearReason: prev.messages[lastInd].message,
              })
            ) */
          : prev.messages[ind]["widget"] === "getLegalName"
          ? ((botMessage = createChatBotMessage("Complete legal name of the applicant (if married, married name)", {
              widget: "getOtherNameUsed",
            }), console.log('why to fear :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              fearReason: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getOtherNameUsed"
          ? ((botMessage = createChatBotMessage("All other names used", {
              widget: "getCurrentMailingAddress",
            }), console.log('Legal name :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              completeLegalName: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCurrentMailingAddress"
          ? ((botMessage = createChatBotMessage("Current Mailing address", {
              widget: "getAddressYouLive",
            }), console.log('other names :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              otherNameUsed: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getAddressYouLive"
          ? ((botMessage = createChatBotMessage("Current Address where you live & how long you have lived there. ", {
              widget: "getCountryOfOrigin",
            }), console.log('Current Mail Address :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              currentMailingAddress: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCountryOfOrigin"
          ? ((botMessage = createChatBotMessage("Country of Origin", {
              widget: "getBirthDate",
            }), console.log('Current Address You Live :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              currentAddressYouLive: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getBirthDate"
          ? ((botMessage = createChatBotMessage("Birth date", {
              widget: "getSocialSecurityNumber",
            }), console.log('Country of origin :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              countryOfOrigin: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getSocialSecurityNumber"
          ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
              &&
              (prev.messages[lastInd].message.length != 0))
            ? ((botMessage = createChatBotMessage("Social Security Number (if any)", {
                widget: "getAlienNumber",
              }), console.log('Birth Date : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                birthDate: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                widget: "getSocialSecurityNumber",
              }), console.log('Birth Date : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                birthDate: prev.messages[lastInd].message,
              })
            )
          : prev.messages[ind]["widget"] === "getAlienNumber"
          ? ((botMessage = createChatBotMessage("Alien Number (if any)", {
              widget: "getNextHadSecurityNumber",
            }), console.log('Social security Number :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              socialSecurityNumber: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getNextHadSecurityNumber"
          ? ((botMessage = createChatBotMessage("Have you ever had a social security number?", {
              widget: "getHadSecurityNumber",
            }), console.log('Alien Number :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              alienNumber: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getArrivalIntoUS"
          ? ((botMessage = createChatBotMessage("Date and city of last entry / arrival into the U.S.", {
              widget: "getI94CardNumber",
            }), console.log('get security number :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              getSecurityNumber: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getI94CardNumber"
          ? ((botMessage = createChatBotMessage("I-94 Card Number", {
              widget: "getCardCurrentStatus",
            }), console.log('Last Arrival in US :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              arrivalIntoUS: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCardCurrentStatus"
          ? ((botMessage = createChatBotMessage("Current status", {
              widget: "getCardExpirationDate",
            }), console.log('I-94 card number :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              i94CardNumber: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCardExpirationDate"
          ? ((botMessage = createChatBotMessage("Expiration date of current status", {
              widget: "getCtStateCountryOfBirth",
            }), console.log('current status :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              cardCurrentStatus: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCtStateCountryOfBirth"
          ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
              &&
              (prev.messages[lastInd].message.length != 0))
            ? ((botMessage = createChatBotMessage("City, State, and Country of Birth", {
                widget: "getPassportNumOnArrival",
              }), console.log('Card Expiration Date : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                cardExpirationDate: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                widget: "getCtStateCountryOfBirth",
              }), console.log('Card Expiration Date : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                cardExpirationDate: prev.messages[lastInd].message,
              })
            )
          : prev.messages[ind]["widget"] === "getPassportNumOnArrival"
          ? ((botMessage = createChatBotMessage("Passport Number Used at Last Arrival", {
              widget: "getPassportExpirationDate",
            }), console.log('City State and Country of Birth :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              ctStateCountryOfBirth: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getPassportExpirationDate"
          ? ((botMessage = createChatBotMessage("Passport expiration date", {
              widget: "getCountryThatIssuedPassport",
            }), console.log('Passport Number on Last Arrival :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              passportNumOnArrival: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getCountryThatIssuedPassport"
          ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
              &&
              (prev.messages[lastInd].message.length != 0))
            ? ((botMessage = createChatBotMessage("Country that issued your passport", {
                widget: "getMotherCompleteName",
              }), console.log('Passport Expiration Date : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                passportExpirationDate: prev.messages[lastInd].message,
              })
            : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                widget: "getCountryThatIssuedPassport",
              }), console.log('Passport Expiration Date : ', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                passportExpirationDate: prev.messages[lastInd].message,
              })
            )
          : prev.messages[ind]["widget"] === "getMotherCompleteName"
          ? ((botMessage = createChatBotMessage("Mother’s complete name, City and country of birth, City and country of residence (if living)", {
              widget: "getMotherCity",
            }), console.log('Country That Issued Passport :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              countryThatIssuedPassport: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getMotherCity"
          ? ((botMessage = createChatBotMessage("Mother’s City name", {
              widget: "getMotherCountryOfBirth",
            }), console.log('Mother complete name :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              // countryThatIssuedPassport: prev.messages[lastInd].message,
              motherCompleteName: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getMotherCountryOfBirth"
          ? ((botMessage = createChatBotMessage("Mother’s Country of birth", {
              widget: "getMotherResidenceCity",
            }), console.log('Mother City name :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              motherCity: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getMotherResidenceCity"
          ? ((botMessage = createChatBotMessage("Mother’s Residence City", {
              widget: "getMotherResidenceCountry",
            }), console.log('Mother country of birth :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              motherCountryOfBirth: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getMotherResidenceCountry"
          ? ((botMessage = createChatBotMessage("Mother’s Residence Country", {
              widget: "getFatherCompleteName",
            }), console.log('Mother Residence city :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              motherResidenceCity: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getFatherCompleteName"
          ? ((botMessage = createChatBotMessage("Father’s complete name, City and country of birth, City and country of residence (if living)", {
              widget: "getFatherCity",
            }), console.log('Mother Residence country :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              motherResidenceCountry: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getFatherCity"
          ? ((botMessage = createChatBotMessage("Father’s City name", {
              widget: "getFatherCountryOfBirth",
            }), console.log('Father complete name :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              fatherCompleteName: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getFatherCountryOfBirth"
          ? ((botMessage = createChatBotMessage("Father’s Country of birth", {
              widget: "getFatherResidenceCity",
            }), console.log('Father City name :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              fatherCity: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getFatherResidenceCity"
          ? ((botMessage = createChatBotMessage("Father’s Residence City", {
              widget: "getFatherResidenceCountry",
            }), console.log('Father country of birth :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              fatherCountryOfBirth: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getFatherResidenceCountry"
          ? ((botMessage = createChatBotMessage("Father’s Residence Country", {
              widget: "getInspectedImmigrationOficial",
            }), console.log('Father Residence city :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              fatherResidenceCity: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getInspectedImmigrationOficial"
          ? ((botMessage = createChatBotMessage("Were you inspected and admitted by an immigration oficial?", {
              widget: "getNonimmigrantVisaNumber",
            }), console.log('Father Residence country :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              fatherResidenceCountry: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getNonimmigrantVisaNumber"
          ? ((botMessage = createChatBotMessage("Non-immigrant visa number (if any)", {
              widget: "getNameOnNonimmigrantVisa",
            }), console.log('Inspected immigration oficial :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              inspectedImmigrationOficial: prev.messages[lastInd].message,
            })
          : prev.messages[ind]["widget"] === "getNameOnNonimmigrantVisa"
          ? ((botMessage = createChatBotMessage("Name and location of consult that issued your non-immigrant visa", {
              widget: "getDateOfApprovalNonImmigrant",
            }), console.log('Non-immigrant Visa Number :', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              nonimmigrantVisaNumber: prev.messages[lastInd].message,
            })
            : prev.messages[ind]["widget"] === "getDateOfApprovalNonImmigrant"
            ? ((botMessage = createChatBotMessage("Date of approval for non-immigrant visa", {
                widget: "getNextSxStatus",
              }), console.log('Name of your non-immigrant visa :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                nameOnNonimmigrantVisa: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getNextSxStatus"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Sex status", {
                  widget: "getSxStatus",
                }), console.log('Approval date : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  dateOfApprovalNonImmigrant: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getNextSxStatus",
                }), console.log('Approval date : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  dateOfApprovalNonImmigrant: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getTotalMarriages"
            ? ((botMessage = createChatBotMessage("Current spouse’s full name", {
                widget: "getCurrentSpouseFullname",
              }), console.log('Total marriages :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                totalMarriages: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getCurrentSpouseFullname"
            ? ((botMessage = createChatBotMessage("Current spouse’s Alien Number", {
                widget: "getCurrentSpouseAlienNum",
              }), console.log('Current Spouse fullname :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                currentSpouseFullname: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getCurrentSpouseAlienNum"
            ? ((botMessage = createChatBotMessage("Current spouse’s Date Of Birth", {
                widget: "getCurrentSpouseDOB",
              }), console.log('Current Spouse Alien Number :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                currentSpouseAlienNum: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getCurrentSpouseDOB"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Current spouse’s Date Of Marriage", {
                  widget: "getCurrentSpouseDOMrg",
                }), console.log('Current Spouse Date Of Birth : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  currentSpouseDOB: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getCurrentSpouseDOB",
                }), console.log('Current Spouse Date Of Birth : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  currentSpouseDOB: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getCurrentSpouseDOMrg"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Current spouse’s City", {
                  widget: "getCurrentSpouseCity",
                }), console.log('Current Spouse Date Of Marriage : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  currentSpouseDOMrg: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getCurrentSpouseDOMrg",
                }), console.log('Current Spouse Date Of Marriage : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  currentSpouseDOMrg: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getCurrentSpouseCity"
            ? ((botMessage = createChatBotMessage("Current spouse’s State", {
                widget: "getCurrentSpouseState",
              }), console.log('Current Spouse City :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                currentSpouseCity: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getCurrentSpouseState"
            ? ((botMessage = createChatBotMessage("Current spouse’s Country Of Birth", {
                widget: "getCurrentSpouseCountryOfBirth",
              }), console.log('Current Spouse State :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                currentSpouseState: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getCurrentSpouseCountryOfBirth"
            ? ((botMessage = createChatBotMessage("Prior spouse 1’s full name", {
                widget: "getPriorSpouse1Fullname",
              }), console.log('Current Spouse Country Of Birth :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                currentSpouseCountryOfBirth: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse1Fullname"
            ? ((botMessage = createChatBotMessage("Prior Spouse 1’s Alien Number", {
                widget: "getPriorSpouse1AlienNum",
              }), console.log('spouse 1’s fullname :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse1Fullname: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse1AlienNum"
            ? ((botMessage = createChatBotMessage("Prior Spouse 1’s Date Of Birth", {
                widget: "getPriorSpouse1DOB",
              }), console.log('spouse 1’s Alien Number :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse1AlienNum: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse1DOB"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Prior Spouse 1’s Date Of Marriage", {
                  widget: "getPriorSpouse1DOMrg",
                }), console.log('spouse 1’s Date Of Birth : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse1DOB: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getPriorSpouse1DOB",
                }), console.log('spouse 1’s Date Of Birth : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse1DOB: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getPriorSpouse1DOMrg"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Prior Spouse 1’s City", {
                  widget: "getPriorSpouse1City",
                }), console.log('spouse 1’s Date Of Marriage : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse1DOMrg: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getPriorSpouse1DOMrg",
                }), console.log('spouse 1’s Date Of Marriage : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse1DOMrg: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getPriorSpouse1City"
            ? ((botMessage = createChatBotMessage("Prior Spouse 1’s State", {
                widget: "getPriorSpouse1State",
              }), console.log('spouse 1’s City :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse1City: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse1State"
            ? ((botMessage = createChatBotMessage("Prior Spouse 1’s Country Of Birth", {
                widget: "getPriorSpouse1CountryOfBirth",
              }), console.log('spouse 1’s State :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse1State: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse1CountryOfBirth"
            ? ((botMessage = createChatBotMessage("Prior Spouse 1’s Date Marriage Ended", {
                widget: "getPriorSpouse1DateMrgEnded",
              }), console.log('spouse 1’s Country Of Birth :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse1CountryOfBirth: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse1DateMrgEnded"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Prior Spouse 2’s Fullname", {
                  widget: "getPriorSpouse2Fullname",
                }), console.log('spouse 1’s Date Marriage Ended : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse1DateMrgEnded: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getPriorSpouse1DateMrgEnded",
                }), console.log('spouse 1’s Date Marriage Ended : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse1DateMrgEnded: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getPriorSpouse2Fullname"
            ? ((botMessage = createChatBotMessage("Prior Spouse 2’s Alien Number", {
                widget: "getPriorSpouse2AlienNum",
              }), console.log('spouse 2’s fullname :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse2Fullname: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse2AlienNum"
            ? ((botMessage = createChatBotMessage("Prior Spouse 2’s Date Of Birth", {
                widget: "getPriorSpouse2DOB",
              }), console.log('spouse 2’s Alien Number :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse2AlienNum: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse2DOB"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Prior Spouse 2’s Date Of Marriage", {
                  widget: "getPriorSpouse2DOMrg",
                }), console.log('spouse 2’s Date Of Birth : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse2DOB: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getPriorSpouse2DOB",
                }), console.log('spouse 2’s Date Of Birth : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse2DOB: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getPriorSpouse2DOMrg"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Prior Spouse 2’s City", {
                  widget: "getPriorSpouse2City",
                }), console.log('spouse 2’s Date Of Marriage : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse2DOMrg: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getPriorSpouse2DOMrg",
                }), console.log('spouse 2’s Date Of Marriage : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse2DOMrg: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getPriorSpouse2City"
            ? ((botMessage = createChatBotMessage("Prior Spouse 2’s State", {
                widget: "getPriorSpouse2State",
              }), console.log('spouse 2’s City :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse2City: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse2State"
            ? ((botMessage = createChatBotMessage("Prior Spouse 2’s Country Of Birth", {
                widget: "getPriorSpouse2CountryOfBirth",
              }), console.log('spouse 2’s State :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse2State: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse2CountryOfBirth"
            ? ((botMessage = createChatBotMessage("Prior Spouse 2’s Date Marriage Ended", {
                widget: "getPriorSpouse2DateMrgEnded",
              }), console.log('spouse 2’s Country Of Birth :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                priorSpouse2CountryOfBirth: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPriorSpouse2DateMrgEnded"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Have you applied for permanent resident status in the past?", {
                  widget: "getAppliedForPermenantResident",
                }), console.log('spouse 2’s Date Marriage Ended : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse2DateMrgEnded: prev.messages[lastInd].message,
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getPriorSpouse2DateMrgEnded",
                }), console.log('spouse 2’s Date Marriage Ended : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  priorSpouse2DateMrgEnded: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getPermenantResidentStatus"
            ? ((botMessage = createChatBotMessage("Permenant Resident Location", {
                widget: "getPermenantResidentLocation",
              }), console.log('Permenant Resident Status :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                permenantResidentStatus: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getPermenantResidentLocation"
            ? ((botMessage = createChatBotMessage("result of the application", {
                widget: "getApplicationResult",
              }), console.log('Permenant Resident Location :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                permenantResidentLocation: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getApplicationResult"
            ? ((botMessage = createChatBotMessage("Ethnicity (Hispanic or Latino or NOT Hispanic or Latino)", {
                widget: "getEthnicity",
              }), console.log('Result of Application :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                applicationResult: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getEthnicity"
            ? ((botMessage = createChatBotMessage("Race", {
                widget: "getRace",
              }), console.log('Ethnicity :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                ethnicity: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getYourHeight"
            ? ((botMessage = createChatBotMessage("Weight", {
                widget: "getYourWeight",
              }), console.log('Your Height :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                yourHeight: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getYourWeight"
            ? ((botMessage = createChatBotMessage("Eye Color", {
                widget: "getEyeColor",
              }), console.log('Your Weight :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                yourWeight: prev.messages[lastInd].message,
              })
              //// Flow will continue from here
            : prev.messages[ind]["widget"] === "getEyeColor"
            ? ((botMessage = createChatBotMessage("Do you want to add your Spouse List ?", {
                widget: "getSpouseList",
              }), console.log('Your Eye Color :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                eyeColor: prev.messages[lastInd].message,
              })
            // : prev.messages[ind]["widget"] === "getEyeColor"
            // ? ((botMessage = createChatBotMessage("36.	Have you EVER worked, volunteered, or otherwise served in any prison, jail, prison camp, detention facility, labor camp, or any other situation that involved detaining persons?", {
            //     widget: "getSituationsThatDetainingPersons",
            //   }), console.log('Your Eye Color :', prev.messages[lastInd].message)),
            //   {
            //     ...prev,
            //     messages: [...prev.messages, botMessage],
            //     eyeColor: prev.messages[lastInd].message,
            //   })
            : prev.messages[ind]["widget"] === "getExpSituationsThatDetainingPersons"
            ? ((botMessage = createChatBotMessage("37.	Have you EVER been a member of, assisted, or participated in any group, unit, or organization of any kind in which you or other persons used any type of weapon against any person or threatened to do so?", {
                widget: "getThreatendedAnyPerson",
              }), console.log('Explain Detaining :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expSituationsThatDetainingPersons: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getAnyArmedGroup"
            ? ((botMessage = createChatBotMessage("38.	Have you EVER served in, been a member of, assisted, or participated in any military unit, paramilitary unit, police unit, self-defense unit, vigilante unit, rebel group, guerilla group, militia, insurgent organization, or any other armed group?", {
                widget: "getFearReason",
              }), console.log('Explain Threatended :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expThreatendedAnyPerson: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getSpouseFullnameInList"
            ? ((botMessage = createChatBotMessage("Spouse Date Of Birth", {
                widget: "getSpouseDOBInList",
              }), addSpouseList(prev.messages[lastInd].message), updateSpouseDetail('name', prev.messages[lastInd].message), console.log('Spouse Fullname in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                // spouseFullnameInList: prev.messages[lastInd].message,
                addInSpouseList: [prev.messages[lastInd].message],
              })
            : prev.messages[ind]["widget"] === "getSpouseDOBInList"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Spouse Country Of Origin", {
                  widget: "getSpouseCOOrignInList",
                }), addSpouseList(prev.messages[lastInd].message), updateSpouseDetail('dob', prev.messages[lastInd].message), console.log('Spouse DOB in List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  // spouseDOBInList: prev.messages[lastInd].message,
                  addInSpouseList: [prev.messages[lastInd].message],
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getSpouseDOBInList",
                }), addSpouseList(prev.messages[lastInd].message), updateSpouseDetail('dob', prev.messages[lastInd].message), console.log('Spouse DOB in List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  spouseDOBInList: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getSpouseCOOrignInList"
            ? ((botMessage = createChatBotMessage("Relation to you", {
                widget: "getSpouseRelationToUInList",
              }), updateSpouseDetail('country', prev.messages[lastInd].message), console.log('Spouse COOg in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                spouseCOOrignInList: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getSpouseRelationToUInList"
            ? ((botMessage = createChatBotMessage("Alien number", {
                widget: "getSpouseAlienNumberInList",
              }), updateSpouseDetail('relation', prev.messages[lastInd].message), console.log('Spouse Relation in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                spouseRelationToUInList: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getSpouseAlienNumberInList"
            ? ((botMessage = createChatBotMessage("Is this person applying with you or following to join?", {
                widget: "getSpouseAppliyingForUInList",
              }), updateSpouseDetail('number', prev.messages[lastInd].message), console.log('Spouse Alien Number in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                spouseAlienNumberInList: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getSpouseAddMoreInList"
            ? ((botMessage = createChatBotMessage("next", {
                widget: "getFearReason",
              }), console.log('Spouse Alien Number in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                spouseAlienNumberInList: prev.messages[lastInd].message,
              })
          : prev.messages[ind]["widget"] === "getFearReason"
          ? ((botMessage = createChatBotMessage(
              "6.	Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply:",
              {
                widget: "getBenefitStatus",
              },
              disableOption('idBkdM', 'fearStatus')
            ), console.log('Date of approval of your non immigrant visa : ', prev.messages[lastInd].message)),
            {
              ...prev,
              messages: [...prev.messages, botMessage],
              dateOfApprovalNonImmigrant: prev.messages[lastInd].message,
              // completeLegalName: prev.messages[lastInd].message,
            })
          : ((botMessage = createChatBotMessage(
            "Thank you for you response",
            {
              widget: "end-message",
            }
          ), console.log('thank you ', prev.messages[lastInd].message)),{
            ...prev,
            messages: [...prev.messages, botMessage],
            appiledImmigration: prev.messages[lastInd].message,
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
            setMessage,
            handleHadSecurityNumber,
            handleSxStatus,
            handleMaritalStatus,
            handleAppliedForPermenantResident,
            handleRace,
            handleToAddYourSpouseList,
            handleSpouseAppliyingForUInList,
            handleSpouseAddMoreInList,
            handleSituationsThatDetainingPersons,
            handleThreatendedAnyPerson,
            // handleAnyOtherTotalitarian,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
