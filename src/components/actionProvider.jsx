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

  const getOrganizationsDetail = () => {
    let organizationsDetail = localStorage.getItem('organizationsDetail');
    if (!organizationsDetail || organizationsDetail.length <= 0) {
      organizationsDetail = resetOrganizationsDetail();
    }
    return JSON.parse(organizationsDetail);
  }

  const getArrestsDetail = () => {
    let arrestsDetail = localStorage.getItem('arrestsDetail');
    if (!arrestsDetail || arrestsDetail.length <= 0) {
      arrestsDetail = resetArrestsDetail();
    }
    return JSON.parse(arrestsDetail);
  }

  const getOutAddressDetail = () => {
    let outAddressDetail = localStorage.getItem('outAddressDetail');
    if (!outAddressDetail || outAddressDetail.length <= 0) {
      outAddressDetail = resetOutAddressDetail();
    }
    return JSON.parse(outAddressDetail);
  }

  const getInAddressDetail = () => {
    let inAddressDetail = localStorage.getItem('inAddressDetail');
    if (!inAddressDetail || inAddressDetail.length <= 0) {
      inAddressDetail = resetInAddressDetail();
    }
    return JSON.parse(inAddressDetail);
  }

  const getSpouseDetailList = () => {
    let spouseDetailList = localStorage.getItem('spouseDetailList');
    
    if (!spouseDetailList || spouseDetailList.length <= 0) {
      spouseDetailList = [];
    }
    else
    {
      spouseDetailList = JSON.parse(spouseDetailList);
    }
    return spouseDetailList;
  }

  const getOrganizationDetailList = () => {
    let organizationDetailList = localStorage.getItem('organizationDetailList');
    
    if (!organizationDetailList || organizationDetailList.length <= 0) {
      organizationDetailList = [];
    }
    else
    {
      organizationDetailList = JSON.parse(organizationDetailList);
    }
    return organizationDetailList;
  }

  const getArrestDetailList = () => {
    let arrestDetailList = localStorage.getItem('arrestDetailList');
    
    if (!arrestDetailList || arrestDetailList.length <= 0) {
      arrestDetailList = [];
    }
    else
    {
      arrestDetailList = JSON.parse(arrestDetailList);
    }
    return arrestDetailList;
  }

  const getOutAddressDetailList = () => {
    let outAddressDetailList = localStorage.getItem('outAddressDetailList');
    
    if (!outAddressDetailList || outAddressDetailList.length <= 0) {
      outAddressDetailList = [];
    }
    else
    {
      outAddressDetailList = JSON.parse(outAddressDetailList);
    }
    return outAddressDetailList;
  }

  const getInAddressDetailList = () => {
    let inAddressDetailList = localStorage.getItem('inAddressDetailList');
    
    if (!inAddressDetailList || inAddressDetailList.length <= 0) {
      inAddressDetailList = [];
    }
    else
    {
      inAddressDetailList = JSON.parse(inAddressDetailList);
    }
    return inAddressDetailList;
  }

  const setSpouseDetail = (details) => {
    localStorage.setItem('spouseDetail', JSON.stringify(details));
  }

  const setOrganizationsDetail = (details) => {
    localStorage.setItem('organizationsDetail', JSON.stringify(details));
  }

  const setArrestsDetail = (details) => {
    localStorage.setItem('arrestsDetail', JSON.stringify(details));
  }

  const setOutAddressDetail = (details) => {
    localStorage.setItem('outAddressDetail', JSON.stringify(details));
  }

  const setInAddressDetail = (details) => {
    localStorage.setItem('inAddressDetail', JSON.stringify(details));
  }

  const setSpouseDetailList = (details) => {
    localStorage.setItem('spouseDetailList', JSON.stringify(details));
  }

  const setOrganizationDetailList = (details) => {
    localStorage.setItem('organizationDetailList', JSON.stringify(details));
  }

  const setArrestDetailList = (details) => {
    localStorage.setItem('arrestDetailList', JSON.stringify(details));
  }

  const setOutAddressDetailList = (details) => {
    localStorage.setItem('outAddressDetailList', JSON.stringify(details));
  }

  const setInAddressDetailList = (details) => {
    localStorage.setItem('inAddressDetailList', JSON.stringify(details));
  }

  const resetSpouseDetail = () => {
    //console.log('resetSpouseDetail');
    let spouseDetails = {name: '', dob: '', country: '', relation: '', number: '', isPerson: ''};
    setSpouseDetail(spouseDetails);
    return spouseDetails;
  }

  const resetOrganizationsDetail = () => {
    //console.log('resetOrganizationsDetail');
    let organizationsDetails = {name: '', locationAndPurpose: '', from: '', to: ''};
    setOrganizationsDetail(organizationsDetails);
    return organizationsDetails;
  }

  const resetArrestsDetail = () => {
    //console.log('resetArrestsDetail');
    let arrestsDetail = {date: '', location: '', reason: '', result: ''};
    setArrestsDetail(arrestsDetail);
    return arrestsDetail;
  }

  const resetOutAddressDetail = () => {
    //console.log('resetArrestsDetail');
    let outAddressDetail = {date: '', place: ''};
    setOutAddressDetail(outAddressDetail);
    return outAddressDetail;
  }

  const resetInAddressDetail = () => {
    //console.log('resetArrestsDetail');
    let inAddressDetail = {date: '', place: ''};
    setInAddressDetail(inAddressDetail);
    return inAddressDetail;
  }

  let spouseDetail = getSpouseDetail();
  let spouseDetailList = getSpouseDetailList();

  let organizationsDetail = getOrganizationsDetail();
  let organizationDetailList = getOrganizationDetailList();

  let arrestsDetail = getArrestsDetail();
  let arrestDetailList = getArrestDetailList();

  let outAddressDetail = getOutAddressDetail();
  let outAddressDetailList = getOutAddressDetailList();

  let inAddressDetail = getInAddressDetail();
  let inAddressDetailList = getInAddressDetailList();

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
      const botMessage = createChatBotMessage("Do you want to add your Organizations List ?", {
        widget: "getOrgsniationsList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), /* console.log('client name fear else.. ', value.target.name) */);
    }
  };

  const handleToAddYourEmployementList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      employementList: value.target.name,
    }), console.log('if add Employement list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Employee Name", {
        widget: "getEmployeeNameInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Next Question", {
        widget: "getFearReason",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleSpouseAppliyingForUInList = (value) => {

    // disableOption('idBkdM', 'policeContact');
    const botMessage = createChatBotMessage("Want to Add More ?", {
      widget: "getSpouseAddMoreInList",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      spouseAppliyingForUInList: value.target.name,
    }), updateSpouseDetail('isPerson', value.target.name), console.log('if Appliying spouse list : ', value.target.name));    


    /* if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Want to Add More ?", {
        widget: "getSpouseAddMoreInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Want to Add More ?", {
        widget: "getSpouseAddMoreInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), console.log('else.. '));
    } */
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
      const botMessage = createChatBotMessage("Do you want to add your Organizations List ?", {
        widget: "getOrgsniationsList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        // clientName: value.target.name,
      }), /* console.log('client name fear else.. ', value.target.name) */);
    }
  };

  const handleEmployemnetAddMoreInList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      employementAddMoreInList: value.target.name,
    }), console.log('if add more in Employement list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Employee Name", {
        widget: "getEmployeeNameInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Next Q", {
        widget: "getFearReason",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleAddMoreInOrganizationList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      addMoreInOrganizationList: value.target.name,
    }), console.log('if add more in Organization list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Name", {
        widget: "getNameInOrgList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Next Question", {
        widget: "getFearReason",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleToAddYourOrgsniationsList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      orgsniationsList: value.target.name,
    }), console.log('if add Organizations list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Name", {
        widget: "getNameInOrgList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Do you want to add your Arrests List ?", {
        widget: "getArrestsList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleArrestsList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      arrestsList: value.target.name,
    }), console.log('if add Arrests list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Date", {
        widget: "getDateInArrestsList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Do you want to add your Addresses Oustside US List ?", {
        widget: "getAddressListOutsideUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleAddMoreInArrestsList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      addMoreInArrestsList: value.target.name,
    }), console.log('if add more in Arrests list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Date", {
        widget: "getDateInArrestsList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Do you want to add your Addresses Oustside US List ?", {
        widget: "getAddressListOutsideUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleAddressListOutsideUS = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      addressListOutsideUS: value.target.name,
    }), console.log('if add Outside of US Address list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Date", {
        widget: "getOutsideAddressDateInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Do you want to add your Addresses Inside US List ?", {
        widget: "getAddressListInsideUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleAddressListInsideUS = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      addressListInsideUS: value.target.name,
    }), console.log('if add Inside of US Address list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Date", {
        widget: "getInsideAddressDateInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Do you want to add your Employement List ?", {
        widget: "getEmployementList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleAddMoreOustsideAddressInList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      addMoreOustsideAddressInList: value.target.name,
    }), console.log('if add more Outside Address list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Date", {
        widget: "getOutsideAddressDateInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Do you want to add your Addresses Inside US List ?", {
        widget: "getAddressListInsideUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleAddMoreInsideAddressInList = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      addMoreInsideAddressInList: value.target.name,
    }), console.log('if add more Inside Address list : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Date", {
        widget: "getInsideAddressDateInList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Do you want to add your Employement List ?", {
        widget: "getEmployementList",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
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
        widget: "getAnyArmedGroup",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleAnyArmedGroup = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      anyArmedGroup: value.target.name,
    }), console.log('Armed Group : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpAnyArmedGroup",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("39.	Have you EVER been a member of, or in any way affiliated with, the Communist Party or any other totalitarian party (in the United States or abroad)?", {
        widget: "getAnyOtherTotalitarian",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };
  
  const handleAnyOtherTotalitarian = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      anyOtherTotalitarian: value.target.name,
    }), console.log('Other Total Itarian : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpAnyOtherTotalitarian",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("40.	During the period from March 23, 1933 to May 8, 1945, did you ever order, incite, assist, or otherwise participate in the persecution of any person because of race, religion, national origin, or political opinion, in association with either the Nazi government of Germany or any organization or government associated or allied with the Nazi government of Germany?", {
        widget: "getNaziGovOfGermany",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleNaziGovOfGermany = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      naziGovOfGermany: value.target.name,
    }), console.log('Nazi Gov Of Germany : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpNaziGovOfGermany",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("41.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Acts involving torture or genocide?", {
        widget: "getTortureOrGenocide",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleTortureOrGenocide = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      tortureOrGenocide: value.target.name,
    }), console.log('Torture Or Genocide : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpTortureOrGenocide",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("42.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Killing any person?", {
        widget: "getKillingAnyPerson",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleKillingAnyPerson = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      killingAnyPerson: value.target.name,
    }), console.log('Killing Any Person : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpKillingAnyPerson",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("43.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Intentionally and severely injuring any person?", {
        widget: "getIntentionallyInjuredPerson",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleIntentionallyInjuredPerson = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      intentionallyInjuredPerson: value.target.name,
    }), console.log('Intentionally Injured Person : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpIntentionallyInjuredPerson",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("44.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Engaging in any kind of sexual contact or relations with any person who did not consent or was unable to consent, or was being forced or threatened?", {
        widget: "getBeingForced",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleBeingForced = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      beingForced: value.target.name,
    }), console.log('Being Forced : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpBeingForced",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("45.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in . Limiting or denying any person's ability to exercise religious beliefs?", {
        widget: "getReligiousBeliefs",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleReligiousBeliefs = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      religiousBeliefs: value.target.name,
    }), console.log('Religious Beliefs : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpReligiousBeliefs",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("46.	Have you EVER recruited, enlisted, conscripted, or used any person under 15 years of age to serve in or help an armed force or group?", {
        widget: "getArmedForce",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleArmedForce = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      armedForce: value.target.name,
    }), console.log('Armed Force : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpArmedForce",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("47.	Have you EVER used any person under 15 years of age to take part in hostilities, or to help or provide services to people in combat?", {
        widget: "getPeopleInCombat",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handlePeopleInCombat = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      peopleInCombat: value.target.name,
    }), console.log('People In Combat : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpPeopleInCombat",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you received public assistance in the United States from any source, including the U.S. Government or any state, county, city, or municipality (other than emergency medical treatment)?", {
        widget: "getHaveYouReceivedPublicAssistance",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleHaveYouReceivedPublicAssistance = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      haveYouReceivedPublicAssistance: value.target.name,
    }), console.log('Have You Recieved : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpHaveYouReceivedPublicAssistance",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Are you likely to receive public assistance in the future in the United States from any source, including the U.S. Government or any state, county, city, or municipality (other than emergency medical treatment)?", {
        widget: "getAreYouReceivePublicAssistance",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };
  
  const handleAreYouReceivePublicAssistance = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      areYouReceivePublicAssistance: value.target.name,
    }), console.log('Are You Recieve : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpAreYouReceivePublicAssistance",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER failed or refused to attend or to remain in attendance at any removal proceeding filed against you on or after April 1, 1997?", {
        widget: "getRemovalProceedingFiledAgainstU",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleRemovalProceedingFiledAgainstU = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      removalProceedingFiledAgainstU: value.target.name,
    }), console.log('Removal Proceeding Filed : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpRemovalProceedingFiledAgainstU",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER submitted fraudulent or counterfeit documentation to any U.S. Government official to obtain or attempt to obtain any immigration benefit, including a visa or entry into the United States?", {
        widget: "getEverSubmittedFraudulent",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleEverSubmittedFraudulent = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      everSubmittedFraudulent: value.target.name,
    }), console.log('Ever Submitted Fraudulent : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpEverSubmittedFraudulent",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER lied about, concealed, or misrepresented any information on an application or petition to obtain a visa, other documentation required for entry into the United States, admission to the United States, or any other kind of immigration benefit?", {
        widget: "getLiedAboutMisrepresented",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleLiedAboutMisrepresented = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      liedAboutMisrepresented: value.target.name,
    }), console.log('Lied About Misrepresented : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpLiedAboutMisrepresented",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER falsely claimed to be a U.S. citizen (in writing or any other way)?", {
        widget: "getFalselyClaimedToBeUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleFalselyClaimedToBeUS = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      falselyClaimedToBeUS: value.target.name,
    }), console.log('Falsely Claimed To Be US : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpFalselyClaimedToBeUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER been a stowaway on a vessel or aircraft arriving in the United States?", {
        widget: "getBeenAStowaway",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleBeenAStowaway = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      beenAStowaway: value.target.name,
    }), console.log('Been A Stowaway : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpBeenAStowaway",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER knowingly encouraged, induced, assisted, abetted, or aided any foreign national to enter or to try to enter the United States illegally (alien smuggling)?", {
        widget: "getAlienSmuggling",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleAlienSmuggling = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      alienSmuggling: value.target.name,
    }), console.log('Alien Smuggling : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpAlienSmuggling",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Are you under a final order of civil penalty for violating INA section 274C for use of fraudulent documents?", {
        widget: "getFraudulentDocuments",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleFraudulentDocuments = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      fraudulentDocuments: value.target.name,
    }), console.log('Fraudulent Documents : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpFraudulentDocuments",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER been excluded, deported, or removed from the United States or have you ever departed the United States on your own after having been ordered excluded, deported, or removed from the United States?", {
        widget: "getRemovedFromTheUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleRemovedFromTheUS = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      removedFromTheUS: value.target.name,
    }), console.log('Removed From The US : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpRemovedFromTheUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER entered the United States without being inspected and admitted or paroled?", {
        widget: "getBeingAdmittedOrParoled",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleBeingAdmittedOrParoled = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      beingAdmittedOrParoled: value.target.name,
    }), console.log('Being Admitted Or Paroled : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpBeingAdmittedOrParoled",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Since April 1, 1997, have you been unlawfully present in the United States For more than 180 days but less than a year, and then departed the United States?", {
        widget: "getBeenUnlawfullyPresentInUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleBeenUnlawfullyPresentInUS = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      beenUnlawfullyPresentInUS: value.target.name,
    }), console.log('Been Present Days In US : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpBeenUnlawfullyPresentInUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Since April 1, 1997, have you been unlawfully present in the United States For one year or more and then departed the United States?", {
        widget: "getBeenUnlawfullyPresentYearInUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleBeenUnlawfullyPresentYearInUS = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      beenUnlawfullyPresentYearInUS: value.target.name,
    }), console.log('Been Present a Year In US : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpBeenUnlawfullyPresentYearInUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Since April 1, 1997, have you EVER reentered or attempted to reenter the United States without being inspected and admitted or paroled after Having been unlawfully present in the United States for more than one year in the aggregate?", {
        widget: "getReenteredInUSInAggregate",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleReenteredInUSInAggregate = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      reenteredInUSInAggregate: value.target.name,
    }), console.log('Reentered In US In Aggregate : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpReenteredInUSInAggregate",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Since April 1, 1997, have you EVER reentered or attempted to reenter the United States without being inspected and admitted or paroled after Having been deported, excluded, or removed from the United States?", {
        widget: "getRemovedFromUSBeforeReentered",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleRemovedFromUSBeforeReentered = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      removedFromUSBeforeReentered: value.target.name,
    }), console.log('Removed From US Before Reentered : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpRemovedFromUSBeforeReentered",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Do you plan to practice polygamy in the United States?", {
        widget: "getPracticePolygamyInUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handlePracticePolygamyInUS = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      practicePolygamyInUS: value.target.name,
    }), console.log('Practice Polygamy In US : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpPracticePolygamyInUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Are you accompanying another foreign national who requires your protection or guardianship but who is inadmissible after being certified by a medical officer as being helpless from sickness, physical or mental disability, or infancy, as described in INA section 232(c)?", {
        widget: "getINASection232C",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleINASection232C = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      iNASection232C: value.target.name,
    }), console.log('INA Section 232c : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpINASection232C",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER assisted in detaining, retaining, or withholding custody of a U.S. citizen child outside the United States from a U.S. citizen who has been granted custody of the child?", {
        widget: "getGrantedCustodyOfChild",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleGrantedCustodyOfChild = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      grantedCustodyOfChild: value.target.name,
    }), console.log('Granted Custody Of Child : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpGrantedCustodyOfChild",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER voted in violation of any Federal, state, or local constitutional provision, statute, ordinance, or regulation in the United States?", {
        widget: "getViolationOfAnyFederal",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleViolationOfAnyFederal = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      violationOfAnyFederal: value.target.name,
    }), console.log('Violation Of Any Federal : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpViolationOfAnyFederal",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you EVER renounced U.S. citizenship to avoid being taxed by the United States?", {
        widget: "getRenouncedUSCitizenship",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleRenouncedUSCitizenship = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      renouncedUSCitizenship: value.target.name,
    }), console.log('Renounced US Citizenship : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpRenouncedUSCitizenship",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you ever Applied for exemption or discharge from training or service in the U.S. armed forces or in the U.S. National Security Training Corps on the ground that you are a foreign national?", {
        widget: "getNationalSecurityTrainingCorps",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleNationalSecurityTrainingCorps = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      expNationalSecurityTrainingCorps: value.target.name,
    }), console.log('National Security Training : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpNationalSecurityTrainingCorps",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you ever Been relieved or discharged from such training or service on the ground that you are a foreign national?", {
        widget: "getDischargedFromSuchTraining",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleDischargedFromSuchTraining = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      dischargedFromSuchTraining: value.target.name,
    }), console.log('Discharged From Such Training : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpDischargedFromSuchTraining",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you ever Been convicted of desertion from the U.S. armed forces?", {
        widget: "getConvictedOfDesertion",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleConvictedOfDesertion = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      convictedOfDesertion: value.target.name,
    }), console.log('Convicted Of Desertion : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpConvictedOfDesertion",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Have you ever Have you EVER left or remained outside the United States to avoid or evade training or service in the U.S. armed forces in time of war or a period declared by the President to be a national emergency?", {
        widget: "getLeftOrRemainedOutsideTheUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  const handleLeftOrRemainedOutsideTheUS = (value) => {
    const message = createClientMessage(value.target.name);

    // disableOption('idBkdM', 'policeContact');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      leftOrRemainedOutsideTheUS: value.target.name,
    }), console.log('Outside The US : ', value.target.name));
    if (value.target.name === "Yes") {
      const botMessage = createChatBotMessage("Explain Why", {
        widget: "getExpLeftOrRemainedOutsideTheUS",
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("next question", {
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
      // list.push(spouseDetail);
      spouseDetailList.push(spouseDetail);
      setSpouseDetailList(spouseDetailList);
      console.log('list=>', spouseDetailList);
      //reset
      spouseDetail = resetSpouseDetail();
    }
    console.log('spouse detail : ', spouseDetail);
  }

  const updateOrganizationDetail = (key, value) => {
    //console.log(key, value, organizationsDetail);
    Object.keys(organizationsDetail).forEach((item) => {
      if(item == key) {
        organizationsDetail[item] = value
      }
    })
    setOrganizationsDetail(organizationsDetail);
    console.log('organizationsDetail.... ', organizationsDetail);
    if (key == 'to') {
      // add in array
      organizationDetailList.push(organizationsDetail);
      setOrganizationDetailList(organizationDetailList);
      console.log('list=>', organizationDetailList);
      //reset
      organizationsDetail = resetSpouseDetail();
    }
    console.log('Organizations detail : ', organizationsDetail);
  }

  const updateArrestDetail = (key, value) => {
    //console.log(key, value, arrestsDetail);
    Object.keys(arrestsDetail).forEach((item) => {
      if(item == key) {
        arrestsDetail[item] = value
      }
    })
    setArrestsDetail(arrestsDetail);
    console.log('arrestsDetail.... ', arrestsDetail);
    if (key == 'result') {
      // add in array
      arrestDetailList.push(arrestsDetail);
      setArrestDetailList(arrestDetailList);
      console.log('list=>', arrestDetailList);
      //reset
      arrestsDetail = resetArrestsDetail();
    }
    console.log('Arrests detail : ', arrestsDetail);
  }

  const updateOutsideAddressDetail = (key, value) => {
    //console.log(key, value, outAddressDetail);
    Object.keys(outAddressDetail).forEach((item) => {
      if(item == key) {
        outAddressDetail[item] = value
      }
    })
    setOutAddressDetail(outAddressDetail);
    console.log('outAddressDetail.... ', outAddressDetail);
    if (key == 'place') {
      // add in array
      outAddressDetailList.push(outAddressDetail);
      setOutAddressDetailList(outAddressDetailList);
      console.log('list=>', outAddressDetailList);
      //reset
      outAddressDetail = resetOutAddressDetail();
    }
    console.log('Outside Address detail : ', outAddressDetail);
  }

  const updateInsideAddressDetail = (key, value) => {
    //console.log(key, value, inAddressDetail);
    Object.keys(inAddressDetail).forEach((item) => {
      if(item == key) {
        inAddressDetail[item] = value
      }
    })
    setInAddressDetail(inAddressDetail);
    console.log('inAddressDetail.... ', inAddressDetail);
    if (key == 'place') {
      // add in array
      inAddressDetailList.push(inAddressDetail);
      setInAddressDetailList(inAddressDetailList);
      console.log('list=>', inAddressDetailList);
      //reset
      inAddressDetail = resetInAddressDetail();
    }
    console.log('Inside Address detail : ', inAddressDetail);
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
            : prev.messages[ind]["widget"] === "getSpouseFullnameInList"
            ? ((botMessage = createChatBotMessage("Spouse Date Of Birth", {
                widget: "getSpouseDOBInList",
              }), updateSpouseDetail('name', prev.messages[lastInd].message), console.log('Spouse Fullname in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                // spouseFullnameInList: prev.messages[lastInd].message,
                // addInSpouseList: [prev.messages[lastInd].message],
              })
            : prev.messages[ind]["widget"] === "getSpouseDOBInList"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Spouse Country Of Origin", {
                  widget: "getSpouseCOOrignInList",
                }), updateSpouseDetail('dob', prev.messages[lastInd].message), console.log('Spouse DOB in List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  // spouseDOBInList: prev.messages[lastInd].message,
                  // addInSpouseList: [prev.messages[lastInd].message],
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getSpouseDOBInList",
                }), updateSpouseDetail('dob', prev.messages[lastInd].message), console.log('Spouse DOB in List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                  // spouseDOBInList: prev.messages[lastInd].message,
                })
              )
            : prev.messages[ind]["widget"] === "getSpouseCOOrignInList"
            ? ((botMessage = createChatBotMessage("Relation to you", {
                widget: "getSpouseRelationToUInList",
              }), updateSpouseDetail('country', prev.messages[lastInd].message), console.log('Spouse COOg in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                // spouseCOOrignInList: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getSpouseRelationToUInList"
            ? ((botMessage = createChatBotMessage("Alien number", {
                widget: "getSpouseAlienNumberInList",
              }), updateSpouseDetail('relation', prev.messages[lastInd].message), console.log('Spouse Relation in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                // spouseRelationToUInList: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getSpouseAlienNumberInList"
            ? ((botMessage = createChatBotMessage("Is this person applying with you or following to join?", {
                widget: "getSpouseAppliyingForUInList",
              }), updateSpouseDetail('number', prev.messages[lastInd].message), console.log('Spouse Alien Number in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                // spouseAlienNumberInList: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getSpouseAddMoreInList"
            ? ((botMessage = createChatBotMessage("next", {
                widget: "getFearReason",
              }), console.log('Spouse Alien Number in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                // spouseAlienNumberInList: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getNameInOrgList"
            ? ((botMessage = createChatBotMessage("Location and Purpose", {
                widget: "getLocationAndPurposeInOrgList",
              }), updateOrganizationDetail('name', prev.messages[lastInd].message) , console.log('Name :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getLocationAndPurposeInOrgList"
            ? ((botMessage = createChatBotMessage("From", {
                widget: "getFromInOrgList",
              }), updateOrganizationDetail('locationAndPurpose', prev.messages[lastInd].message) , console.log('Location And Purpose :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getFromInOrgList"
            ? ((botMessage = createChatBotMessage("To", {
                widget: "getToInOrgList",
              }), updateOrganizationDetail('from', prev.messages[lastInd].message) , console.log('From :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getToInOrgList"
            ? ((botMessage = createChatBotMessage("Want to Add More ?", {
                widget: "getAddMoreInOrganizationList",
              }), updateOrganizationDetail('to', prev.messages[lastInd].message) , console.log('To :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getDateInArrestsList"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Location", {
                  widget: "getLocationInArrestsList",
                }), updateArrestDetail('date', prev.messages[lastInd].message), console.log('Date in Arrests List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getDateInArrestsList",
                }), updateArrestDetail('date', prev.messages[lastInd].message), console.log('Date in Arrests List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                })
              )
            : prev.messages[ind]["widget"] === "getLocationInArrestsList"
            ? ((botMessage = createChatBotMessage("Reason", {
                widget: "getReasonInArrestsList",
              }), updateArrestDetail('location', prev.messages[lastInd].message) , console.log('Location :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getReasonInArrestsList"
            ? ((botMessage = createChatBotMessage("Result", {
                widget: "getResultInArrestsList",
              }), updateArrestDetail('reason', prev.messages[lastInd].message) , console.log('Reason :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getResultInArrestsList"
            ? ((botMessage = createChatBotMessage("Want to Add More ?", {
                widget: "getAddMoreInArrestsList",
              }), updateArrestDetail('result', prev.messages[lastInd].message) , console.log('Result :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getOutsideAddressDateInList"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Place", {
                  widget: "getOutsideAddressPlaceInList",
                }), updateOutsideAddressDetail('date', prev.messages[lastInd].message), console.log('Date in Outside Address List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getOutsideAddressDateInList",
                }), updateOutsideAddressDetail('date', prev.messages[lastInd].message), console.log('Date in Outside Address List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                })
              )
            : prev.messages[ind]["widget"] === "getOutsideAddressPlaceInList"
            ? ((botMessage = createChatBotMessage("Want to Add More ?", {
                widget: "getAddMoreOustsideAddressInList",
              }), updateOutsideAddressDetail('place', prev.messages[lastInd].message) , console.log('Place in Outside Address List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getInsideAddressDateInList"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Place", {
                  widget: "getInsideAddressPlaceInList",
                }), updateInsideAddressDetail('date', prev.messages[lastInd].message), console.log('Date in Inside Address List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getInsideAddressDateInList",
                }), updateInsideAddressDetail('date', prev.messages[lastInd].message), console.log('Date in Inside Address List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                })
              )
            : prev.messages[ind]["widget"] === "getInsideAddressPlaceInList"
            ? ((botMessage = createChatBotMessage("Want to Add More ?", {
                widget: "getAddMoreInsideAddressInList",
              }), updateInsideAddressDetail('place', prev.messages[lastInd].message) , console.log('Place in Inside Address List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getEmployeeNameInList"
            ? ((botMessage = createChatBotMessage("Job Location", {
                widget: "getJobLocationInList",
              }), /* updateSpouseDetail('name', prev.messages[lastInd].message), */ console.log('Employee Name in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getJobLocationInList"
            ? ((botMessage = createChatBotMessage("Job Title", {
                widget: "getJobTitleInList",
              }), /* updateSpouseDetail('name', prev.messages[lastInd].message), */ console.log('Employee Job Location in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getJobTitleInList"
            ? ((botMessage = createChatBotMessage("Date", {
                widget: "getDateInList",
              }), /* updateSpouseDetail('name', prev.messages[lastInd].message), */ console.log('Employee Job Title in List :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
              })
            : prev.messages[ind]["widget"] === "getDateInList"
            ? (((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(prev.messages[lastInd].message))
                &&
                (prev.messages[lastInd].message.length != 0))
              ? ((botMessage = createChatBotMessage("Want to Add More ?", {
                  widget: "getEmployemnetAddMoreInList",
                }), /* updateInsideAddressDetail('date', prev.messages[lastInd].message), */ console.log('Date Employement List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                })
              : ((botMessage = createChatBotMessage("Please enter valid date format DD/MM/YYYY", {
                  widget: "getDateInList",
                }), /* updateInsideAddressDetail('date', prev.messages[lastInd].message), */ console.log('Date Employement List : ', prev.messages[lastInd].message)),
                {
                  ...prev,
                  messages: [...prev.messages, botMessage],
                })
              )
            : prev.messages[ind]["widget"] === "getExpSituationsThatDetainingPersons"
            ? ((botMessage = createChatBotMessage("37.	Have you EVER been a member of, assisted, or participated in any group, unit, or organization of any kind in which you or other persons used any type of weapon against any person or threatened to do so?", {
                widget: "getThreatendedAnyPerson",
              }), console.log('Explain Detaining :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expSituationsThatDetainingPersons: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpThreatendedAnyPerson"
            ? ((botMessage = createChatBotMessage("38.	Have you EVER served in, been a member of, assisted, or participated in any military unit, paramilitary unit, police unit, self-defense unit, vigilante unit, rebel group, guerilla group, militia, insurgent organization, or any other armed group?", {
                widget: "getAnyArmedGroup",
              }), console.log('Explain Threatended :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expThreatendedAnyPerson: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpAnyArmedGroup"
            ? ((botMessage = createChatBotMessage("39.	Have you EVER been a member of, or in any way affiliated with, the Communist Party or any other totalitarian party (in the United States or abroad)?", {
                widget: "getAnyOtherTotalitarian",
              }), console.log('Explain Armed Group :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expAnyArmedGroup: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpAnyOtherTotalitarian"
            ? ((botMessage = createChatBotMessage("40.	During the period from March 23, 1933 to May 8, 1945, did you ever order, incite, assist, or otherwise participate in the persecution of any person because of race, religion, national origin, or political opinion, in association with either the Nazi government of Germany or any organization or government associated or allied with the Nazi government of Germany?", {
                widget: "getNaziGovOfGermany",
              }), console.log('Explain Other Total Itarian :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expAnyOtherTotalitarian: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpNaziGovOfGermany"
            ? ((botMessage = createChatBotMessage("41.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Acts involving torture or genocide?", {
                widget: "getTortureOrGenocide",
              }), console.log('Explain Nazi Gov Of Germany :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expNaziGovOfGermany: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpTortureOrGenocide"
            ? ((botMessage = createChatBotMessage("42.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Killing any person?", {
                widget: "getKillingAnyPerson",
              }), console.log('Explain Torture Or Genocide :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expTortureOrGenocide: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpKillingAnyPerson"
            ? ((botMessage = createChatBotMessage("43.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Intentionally and severely injuring any person?", {
                widget: "getIntentionallyInjuredPerson",
              }), console.log('Explain Killing Any Person :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expKillingAnyPerson: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpIntentionallyInjuredPerson"
            ? ((botMessage = createChatBotMessage("44.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Engaging in any kind of sexual contact or relations with any person who did not consent or was unable to consent, or was being forced or threatened?", {
                widget: "getBeingForced",
              }), console.log('Explain Intentionally Injured Person :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expIntentionallyInjuredPerson: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpBeingForced"
            ? ((botMessage = createChatBotMessage("45.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in . Limiting or denying any person's ability to exercise religious beliefs?", {
                widget: "getReligiousBeliefs",
              }), console.log('Explain Being Forced :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expBeingForced: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpReligiousBeliefs"
            ? ((botMessage = createChatBotMessage("46.	Have you EVER recruited, enlisted, conscripted, or used any person under 15 years of age to serve in or help an armed force or group?", {
                widget: "getArmedForce",
              }), console.log('Explain Religious Beliefs :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expReligiousBeliefs: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpArmedForce"
            ? ((botMessage = createChatBotMessage("47.	Have you EVER used any person under 15 years of age to take part in hostilities, or to help or provide services to people in combat?", {
                widget: "getPeopleInCombat",
              }), console.log('Explain Armed Force :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expArmedForce: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpPeopleInCombat"
            ? ((botMessage = createChatBotMessage("Have you received public assistance in the United States from any source, including the U.S. Government or any state, county, city, or municipality (other than emergency medical treatment)?", {
                widget: "getHaveYouReceivedPublicAssistance",
              }), console.log('Explain People In Combat :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expPeopleInCombat: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpHaveYouReceivedPublicAssistance"
            ? ((botMessage = createChatBotMessage("Are you likely to receive public assistance in the future in the United States from any source, including the U.S. Government or any state, county, city, or municipality (other than emergency medical treatment)?", {
                widget: "getAreYouReceivePublicAssistance",
              }), console.log('Explain Have You Received :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expHaveYouReceivedPublicAssistance: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpAreYouReceivePublicAssistance"
            ? ((botMessage = createChatBotMessage("Have you EVER failed or refused to attend or to remain in attendance at any removal proceeding filed against you on or after April 1, 1997?", {
                widget: "getRemovalProceedingFiledAgainstU",
              }), console.log('Explain Are You Receive :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expAreYouReceivePublicAssistance: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpRemovalProceedingFiledAgainstU"
            ? ((botMessage = createChatBotMessage("Have you EVER submitted fraudulent or counterfeit documentation to any U.S. Government official to obtain or attempt to obtain any immigration benefit, including a visa or entry into the United States?", {
                widget: "getEverSubmittedFraudulent",
              }), console.log('Explain Removal Proceeding Filed :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expRemovalProceedingFiledAgainstU: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpEverSubmittedFraudulent"
            ? ((botMessage = createChatBotMessage("Have you EVER lied about, concealed, or misrepresented any information on an application or petition to obtain a visa, other documentation required for entry into the United States, admission to the United States, or any other kind of immigration benefit?", {
                widget: "getLiedAboutMisrepresented",
              }), console.log('Explain Ever Submitted Fraudulent :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expEverSubmittedFraudulent: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpLiedAboutMisrepresented"
            ? ((botMessage = createChatBotMessage("Have you EVER falsely claimed to be a U.S. citizen (in writing or any other way)?", {
                widget: "getFalselyClaimedToBeUS",
              }), console.log('Explain Lied About Misrepresented :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expLiedAboutMisrepresented: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpFalselyClaimedToBeUS"
            ? ((botMessage = createChatBotMessage("Have you EVER been a stowaway on a vessel or aircraft arriving in the United States?", {
                widget: "getBeenAStowaway",
              }), console.log('Explain Falsely Claimed To Be US :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expFalselyClaimedToBeUS: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpBeenAStowaway"
            ? ((botMessage = createChatBotMessage("Have you EVER knowingly encouraged, induced, assisted, abetted, or aided any foreign national to enter or to try to enter the United States illegally (alien smuggling)?", {
                widget: "getAlienSmuggling",
              }), console.log('Explain Been A Stowaway :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expBeenAStowaway: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpAlienSmuggling"
            ? ((botMessage = createChatBotMessage("Are you under a final order of civil penalty for violating INA section 274C for use of fraudulent documents?", {
                widget: "getFraudulentDocuments",
              }), console.log('Explain Alien Smuggling :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expAlienSmuggling: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpFraudulentDocuments"
            ? ((botMessage = createChatBotMessage("Have you EVER been excluded, deported, or removed from the United States or have you ever departed the United States on your own after having been ordered excluded, deported, or removed from the United States?", {
                widget: "getRemovedFromTheUS",
              }), console.log('Explain Fraudulent Documents :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expFraudulentDocuments: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpRemovedFromTheUS"
            ? ((botMessage = createChatBotMessage("Have you EVER entered the United States without being inspected and admitted or paroled?", {
                widget: "getBeingAdmittedOrParoled",
              }), console.log('Explain Removed From The US :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expRemovedFromTheUS: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpBeingAdmittedOrParoled"
            ? ((botMessage = createChatBotMessage("Since April 1, 1997, have you been unlawfully present in the United States For more than 180 days but less than a year, and then departed the United States?", {
                widget: "getBeenUnlawfullyPresentInUS",
              }), console.log('Explain Being Admitted Or Paroled :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expBeingAdmittedOrParoled: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpBeenUnlawfullyPresentInUS"
            ? ((botMessage = createChatBotMessage("Since April 1, 1997, have you been unlawfully present in the United States For one year or more and then departed the United States?", {
                widget: "getBeenUnlawfullyPresentYearInUS",
              }), console.log('Explain Been Present Days In US :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expBeenUnlawfullyPresentInUS: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpBeenUnlawfullyPresentYearInUS"
            ? ((botMessage = createChatBotMessage("Since April 1, 1997, have you EVER reentered or attempted to reenter the United States without being inspected and admitted or paroled after Having been unlawfully present in the United States for more than one year in the aggregate?", {
                widget: "getReenteredInUSInAggregate",
              }), console.log('Explain Been Present a Year In US :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expBeenUnlawfullyPresentYearInUS: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpReenteredInUSInAggregate"
            ? ((botMessage = createChatBotMessage("Since April 1, 1997, have you EVER reentered or attempted to reenter the United States without being inspected and admitted or paroled after Having been deported, excluded, or removed from the United States?", {
                widget: "getRemovedFromUSBeforeReentered",
              }), console.log('Explain Reentered In US In Aggregate :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expReenteredInUSInAggregate: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpRemovedFromUSBeforeReentered"
            ? ((botMessage = createChatBotMessage("Do you plan to practice polygamy in the United States?", {
                widget: "getPracticePolygamyInUS",
              }), console.log('Explain Removed From US Before Reentered :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expRemovedFromUSBeforeReentered: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpPracticePolygamyInUS"
            ? ((botMessage = createChatBotMessage("Are you accompanying another foreign national who requires your protection or guardianship but who is inadmissible after being certified by a medical officer as being helpless from sickness, physical or mental disability, or infancy, as described in INA section 232(c)?", {
                widget: "getINASection232C",
              }), console.log('Explain Practice Polygamy In US :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expPracticePolygamyInUS: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpINASection232C"
            ? ((botMessage = createChatBotMessage("Have you EVER assisted in detaining, retaining, or withholding custody of a U.S. citizen child outside the United States from a U.S. citizen who has been granted custody of the child?", {
                widget: "getGrantedCustodyOfChild",
              }), console.log('Explain INA Section 232C :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expINASection232C: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpGrantedCustodyOfChild"
            ? ((botMessage = createChatBotMessage("Have you EVER voted in violation of any Federal, state, or local constitutional provision, statute, ordinance, or regulation in the United States?", {
                widget: "getViolationOfAnyFederal",
              }), console.log('Explain Granted Custody Of Child :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expGrantedCustodyOfChild: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpViolationOfAnyFederal"
            ? ((botMessage = createChatBotMessage("Have you EVER renounced U.S. citizenship to avoid being taxed by the United States?", {
                widget: "getRenouncedUSCitizenship",
              }), console.log('Explain Violation Of Any Federal :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expViolationOfAnyFederal: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpRenouncedUSCitizenship"
            ? ((botMessage = createChatBotMessage("Have you ever Applied for exemption or discharge from training or service in the U.S. armed forces or in the U.S. National Security Training Corps on the ground that you are a foreign national?", {
                widget: "getNationalSecurityTrainingCorps",
              }), console.log('Explain Renounced US Citizenship :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expRenouncedUSCitizenship: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpNationalSecurityTrainingCorps"
            ? ((botMessage = createChatBotMessage("Have you ever Been relieved or discharged from such training or service on the ground that you are a foreign national?", {
                widget: "getDischargedFromSuchTraining",
              }), console.log('Explain National Security Training :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expNationalSecurityTrainingCorps: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpDischargedFromSuchTraining"
            ? ((botMessage = createChatBotMessage("Have you ever Been convicted of desertion from the U.S. armed forces?", {
                widget: "getConvictedOfDesertion",
              }), console.log('Explain Discharged From Such Training :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expDischargedFromSuchTraining: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpConvictedOfDesertion"
            ? ((botMessage = createChatBotMessage("Have you ever Have you EVER left or remained outside the United States to avoid or evade training or service in the U.S. armed forces in time of war or a period declared by the President to be a national emergency?", {
                widget: "getLeftOrRemainedOutsideTheUS",
              }), console.log('Explain Convicted Of Desertion :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expConvictedOfDesertion: prev.messages[lastInd].message,
              })
            : prev.messages[ind]["widget"] === "getExpLeftOrRemainedOutsideTheUS"
            ? ((botMessage = createChatBotMessage("next user input", {
                widget: "getFearReason",
              }), console.log('Explain Outside The US :', prev.messages[lastInd].message)),
              {
                ...prev,
                messages: [...prev.messages, botMessage],
                expLeftOrRemainedOutsideTheUS: prev.messages[lastInd].message,
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
            handleAnyArmedGroup,
            handleAnyOtherTotalitarian,
            handleNaziGovOfGermany,
            handleTortureOrGenocide,
            handleKillingAnyPerson,
            handleIntentionallyInjuredPerson,
            handleBeingForced,
            handleReligiousBeliefs,
            handleArmedForce,
            handlePeopleInCombat,
            handleHaveYouReceivedPublicAssistance,
            handleAreYouReceivePublicAssistance,
            handleRemovalProceedingFiledAgainstU,
            handleEverSubmittedFraudulent,
            handleLiedAboutMisrepresented,
            handleFalselyClaimedToBeUS,
            handleBeenAStowaway,
            handleAlienSmuggling,
            handleFraudulentDocuments,
            handleRemovedFromTheUS,
            handleBeingAdmittedOrParoled,
            handleBeenUnlawfullyPresentInUS,
            handleBeenUnlawfullyPresentYearInUS,
            handleReenteredInUSInAggregate,
            handleRemovedFromUSBeforeReentered,
            handlePracticePolygamyInUS,
            handleINASection232C,
            handleGrantedCustodyOfChild,
            handleViolationOfAnyFederal,
            handleRenouncedUSCitizenship,
            handleNationalSecurityTrainingCorps,
            handleDischargedFromSuchTraining,
            handleConvictedOfDesertion,
            handleLeftOrRemainedOutsideTheUS,
            handleToAddYourOrgsniationsList,
            handleAddMoreInOrganizationList,
            handleArrestsList,
            handleAddMoreInArrestsList,
            handleAddressListOutsideUS,
            handleAddMoreOustsideAddressInList,
            handleAddressListInsideUS,
            handleAddMoreInsideAddressInList,
            handleToAddYourEmployementList,
            handleEmployemnetAddMoreInList,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
