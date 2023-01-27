import React from "react";
import "./App.css";
import Contreras from "./image/logo_doc_black.jpg";

function TableView(props) {

  const clientName = props.state?.clientName;
  const clientType = props.state?.clientType;
  const caseType = props.state?.caseType;
  const currentInUs = props.state?.inUSA;
  const usLocation = props.state?.inUSLocation;
  const clientDOB = props.state?.clientDob;
  const aFile = props.state?.aFile;
  const birthCountry = props.state?.countryOfBirth;
  const streetAddress = props.state?.streetAddress;
  const city = props.state?.city;
  const state = props.state?.state;
  const zip = props.state?.zip;
  const telephone = props.state?.phone;
  const immigrationStatus = props.state?.immigrationStatus;
  const immigrationSpouseStatus = props.state?.immigrationSpouseStatus;
  const problem = props.state?.legalProblem;
  const dateOfHearing = props.state?.hearingDate;
  const locationOfHearing = props.state?.hearingLocation;
  const typeOfHearing = props.state?.hearingType;
  const immigrationPaper = props.state?.immigrationPaperwork;
  const maritialStatus = props.state?.marriedStatus;
  const spouseName = props.state?.spouseName;
  const spouseDOB = props.state?.spouseDOB;
  const victimOfCrime = props.state?.victimOfCrime;
  const victimOfCrimeLocation = props.state?.victimOfCrimeLocation;
  const policeReport = props.state?.policeReport;
  const contactWithPolice = props.state?.contactWithPolice;
  const contactReason = props.state?.contactReason;
  const fear = props.state?.fearStatus;
  const fearReason = props.state?.fearReason;
  const appiledImmigration = props.state?.appiledImmigration;

  // // page 1

  const completeLegalName = props.state?.completeLegalName;
  const otherNameUsed = props.state?.otherNameUsed;
  const currentMailingAddress = props.state?.currentMailingAddress;
  const currentAddressYouLive = props.state?.currentAddressYouLive;
  const countryOfOrigin = props.state?.countryOfOrigin;
  const birthDate = props.state?.birthDate;
  const socialSecurityNumber = props.state?.socialSecurityNumber;
  const alienNumber = props.state?.alienNumber;
  const hadSecurityNumber = props.state?.hadSecurityNumber;
  const getSecurityNumber = props.state?.getSecurityNumber;
  const arrivalIntoUS = props.state?.arrivalIntoUS;
  const i94CardNumber = props.state?.i94CardNumber;
  const cardCurrentStatus = props.state?.cardCurrentStatus;
  const cardExpirationDate = props.state?.cardExpirationDate;
  const ctStateCountryOfBirth = props.state?.ctStateCountryOfBirth;
  const passportNumOnArrival = props.state?.passportNumOnArrival;
  const passportExpirationDate = props.state?.passportExpirationDate;
  const countryThatIssuedPassport = props.state?.countryThatIssuedPassport;
  const motherCompleteName = props.state?.motherCompleteName;
  const motherCity = props.state?.motherCity;
  const motherCountryOfBirth = props.state?.motherCountryOfBirth;
  const motherResidenceCity = props.state?.motherResidenceCity;
  const motherResidenceCountry = props.state?.motherResidenceCountry;
  const fatherCompleteName = props.state?.fatherCompleteName;
  const fatherCity = props.state?.fatherCity;
  const fatherCountryOfBirth = props.state?.fatherCountryOfBirth;
  const fatherResidenceCity = props.state?.fatherResidenceCity;
  const fatherResidenceCountry = props.state?.fatherResidenceCountry;
  const inspectedImmigrationOficial = props.state?.inspectedImmigrationOficial;
  const nonimmigrantVisaNumber = props.state?.nonimmigrantVisaNumber;
  const nameOnNonimmigrantVisa = props.state?.nameOnNonimmigrantVisa;
  const dateOfApprovalNonImmigrant = props.state?.dateOfApprovalNonImmigrant;
  const sxStatus = props.state?.sxStatus;
  const maritalStatus = props.state?.maritalStatus;
  const totalMarriages = props.state?.totalMarriages;
  const currentSpouseFullname = props.state?.currentSpouseFullname;
  const currentSpouseAlienNum = props.state?.currentSpouseAlienNum;
  const currentSpouseDOB = props.state?.currentSpouseDOB;
  const currentSpouseDOMrg = props.state?.currentSpouseDOMrg;
  const currentSpouseCity = props.state?.currentSpouseCity;
  const currentSpouseState = props.state?.currentSpouseState;
  const currentSpouseCountryOfBirth = props.state?.currentSpouseCountryOfBirth;
  const priorSpouse1Fullname = props.state?.priorSpouse1Fullname;
  const priorSpouse1AlienNum = props.state?.priorSpouse1AlienNum;
  const priorSpouse1DOB = props.state?.priorSpouse1DOB;
  const priorSpouse1DOMrg = props.state?.priorSpouse1DOMrg;
  const priorSpouse1City = props.state?.priorSpouse1City;
  const priorSpouse1State = props.state?.priorSpouse1State;
  const priorSpouse1CountryOfBirth = props.state?.priorSpouse1CountryOfBirth;
  const priorSpouse1DateMrgEnded = props.state?.priorSpouse1DateMrgEnded;
  const priorSpouse2Fullname = props.state?.priorSpouse2Fullname;
  const priorSpouse2AlienNum = props.state?.priorSpouse2AlienNum;
  const priorSpouse2DOB = props.state?.priorSpouse2DOB;
  const priorSpouse2DOMrg = props.state?.priorSpouse2DOMrg;
  const priorSpouse2City = props.state?.priorSpouse2City;
  const priorSpouse2State = props.state?.priorSpouse2State;
  const priorSpouse2CountryOfBirth = props.state?.priorSpouse2CountryOfBirth;
  const priorSpouse2DateMrgEnded = props.state?.priorSpouse2DateMrgEnded;
  const appliedForPermenantResident = props.state?.appliedForPermenantResident;
  const permenantResidentStatus = props.state?.permenantResidentStatus;
  const permenantResidentLocation = props.state?.permenantResidentLocation;
  const applicationResult = props.state?.applicationResult;
  // // Page 7
  const situationsThatDetainingPersons = props.state?.situationsThatDetainingPersons;
  const expSituationsThatDetainingPersons = props.state?.expSituationsThatDetainingPersons;
  const threatendedAnyPerson = props.state?.threatendedAnyPerson;
  const expThreatendedAnyPerson = props.state?.expThreatendedAnyPerson;
  const anyArmedGroup = props.state?.anyArmedGroup;
  const expAnyArmedGroup = props.state?.expAnyArmedGroup;
  const anyOtherTotalitarian = props.state?.anyOtherTotalitarian;
  const expAnyOtherTotalitarian = props.state?.expAnyOtherTotalitarian;
  const naziGovOfGermany = props.state?.naziGovOfGermany;
  const expNaziGovOfGermany = props.state?.expNaziGovOfGermany;
  const tortureOrGenocide = props.state?.tortureOrGenocide;
  const expTortureOrGenocide = props.state?.expTortureOrGenocide;
  const killingAnyPerson = props.state?.killingAnyPerson;
  const expKillingAnyPerson = props.state?.expKillingAnyPerson;
  const intentionallyInjuredPerson = props.state?.intentionallyInjuredPerson;
  const expIntentionallyInjuredPerson = props.state?.expIntentionallyInjuredPerson;
  const beingForced = props.state?.beingForced;
  const expBeingForced = props.state?.expBeingForced;
  const religiousBeliefs = props.state?.religiousBeliefs;
  const expReligiousBeliefs = props.state?.expReligiousBeliefs;
  const armedForce = props.state?.armedForce;
  const expArmedForce = props.state?.expArmedForce;
  const peopleInCombat = props.state?.peopleInCombat;
  const expPeopleInCombat = props.state?.expPeopleInCombat;
  
  
  return (
    <div>
      <div class="row">
        <div class="logo-row">
          <img src={Contreras} alt="Contreraslogo" class="logo" />
        </div>
      </div>

      {/* <center>
        <h4>
          {clientType} {clientName}{" "}
          {caseType}
        </h4>
      </center>

      <center>
        <h4>{clientName}</h4>
      </center> */}

      <div className="margin-2">
        <table>
          <tbody>
            <tr>
              <td className='section' colSpan={3}>
                {" "}
                (1) Are you a New Client, Former Client, or Current client?
                &nbsp;&nbsp;{" "}
                <u>
                  {clientType
                    ? clientType
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                {" "}
                (2) Case Type(Immigration, Criminal, Family, other): &nbsp;&nbsp;{" "}
                <u>
                  {caseType
                    ? caseType
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (3) Are you currently outside the US? yes/no, if so, where?
                &nbsp;&nbsp;
                <u>
                  {currentInUs
                    ? currentInUs +
                      " " +
                      " in " +
                      " " +
                      usLocation
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) Client Name: &nbsp;&nbsp;
                {clientName
                  ? clientName
                  : "NA"}
              </td>
              <td className='section'>
                (5) Date of birth:&nbsp;&nbsp;{" "}
                <u>
                  {clientDOB
                    ? clientDOB
                    : "NA"}
                </u>
              </td>
              <td className='section'>
                (6) A File:&nbsp;&nbsp;{" "}
                <u>
                  {aFile ? aFile : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (7) Country of birth &nbsp;&nbsp;{" "}
                <u>
                  {birthCountry
                    ? birthCountry
                    : "NA"}{" "}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (8) Street Address (within the US): &nbsp;&nbsp;{" "}
                <u>
                  {streetAddress
                    ? streetAddress
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section'>
                (9) City: &nbsp;&nbsp;
                {city ? city : "NA"}
              </td>
              <td className='section'>
                (10) State:&nbsp;&nbsp;{" "}
                <u>
                  {state ? state : "NA"}
                </u>
              </td>
              <td className='section'>
                (11) Zip:&nbsp;&nbsp;{" "}
                <u>{zip ? zip : "NA"}</u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={2}>
                (12) Phone: &nbsp;&nbsp;{" "}
                <u>
                  {telephone
                    ? telephone
                    : "NA"}
                </u>
              </td>
              <td className='section'>
                (13) Current immigration status: &nbsp;&nbsp;{" "}
                <u>
                  {immigrationStatus
                    ? immigrationStatus
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (14) Briefly describe your legal problem or tell me why you need a
                lawyer: &nbsp;&nbsp; <br />
                <u>
                  {problem ? problem : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (15) Are you in removal proceedings now? &nbsp;&nbsp; <br />
                <ol type="a">
                  <li>
                    Upcoming Hearing date & Location:&nbsp;&nbsp;{" "}
                    <u>
                      {dateOfHearing
                        ? dateOfHearing +
                          " " +
                          " at " +
                          " " +
                          locationOfHearing
                        : "NA"}
                    </u>
                  </li>
                  <li>
                    Type of hearing: &nbsp;&nbsp;
                    <u>
                      {" "}
                      {typeOfHearing
                        ? typeOfHearing
                        : "NA"}
                    </u>
                  </li>
                  <li>
                    Were you given immigration paperwork? &nbsp;&nbsp;{" "}
                    <u>
                      {immigrationPaper
                        ? immigrationPaper
                        : "NA"}
                    </u>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (16). Are you married? Yes/No, if yes, Immigration Status of
                spouse:
                <br />
                {maritialStatus
                  ? maritialStatus + " " +
                  immigrationSpouseStatus
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={2}>
                (16 - a) spouse Name:&nbsp;&nbsp;{" "}
                <u>
                  {spouseName
                    ? spouseName
                    : "NA"}
                </u>
              </td>
              <td className='section'>
                (16 - b) spouse DOB:&nbsp;&nbsp;{" "}
                <u>
                  {spouseDOB
                    ? spouseDOB
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                <ol type="1">
                  <li>
                    Have you ever been the victim of a crime? Yes/No Where were
                    you a victim of crime?&nbsp;&nbsp;
                    <u>
                      {victimOfCrime
                        ? victimOfCrime +
                          " " +
                          victimOfCrimeLocation
                        : "NA"}
                    </u>{" "}
                  </li>
                  <li>
                    Do you have a police report? Yes/no&nbsp;&nbsp;
                    <u>
                      {policeReport
                        ? policeReport
                        : "NA"}
                    </u>
                  </li>
                  <li>
                    Have you ever had contact with the police for any reason at
                    all in the US?If yes describe why you had contact &nbsp;&nbsp;
                    <u>
                      {contactWithPolice
                        ? contactWithPolice +
                          " " +
                          contactReason
                        : "NA"}
                    </u>
                  </li>
                  <li>
                    Do you have any reason to fear going back to your country?
                    &nbsp;&nbsp;{" "}
                    <u>
                      {fear
                        ? fear +
                          " " +
                          fearReason
                        : "NA"}
                    </u>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Complete legal name of the applicant &nbsp;&nbsp; (if married, married name): &nbsp;&nbsp;
                {completeLegalName
                  ? completeLegalName
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) All other names used: &nbsp;&nbsp;
                {otherNameUsed
                  ? otherNameUsed
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Current Mailing address: &nbsp;&nbsp;
                {currentMailingAddress
                  ? currentMailingAddress
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Current Address where you live & how long you have lived there.: &nbsp;&nbsp;
                {currentAddressYouLive
                  ? currentAddressYouLive
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) Country of Origin: &nbsp;&nbsp;
                {countryOfOrigin
                  ? countryOfOrigin
                  : "NA"}
              </td>
              <td className='section'>
                (4) Birth date: &nbsp;&nbsp;
                {birthDate
                  ? birthDate
                  : "NA"}
              </td>
              <td className='section'>
                (4) Social Security Number (if any): &nbsp;&nbsp;
                {socialSecurityNumber
                  ? socialSecurityNumber
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Alien Number (if any): &nbsp;&nbsp;
                {alienNumber
                  ? alienNumber
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
              (4) Have you ever had a social security number? if so, what was the number.:
                <br />
                {hadSecurityNumber
                  ? hadSecurityNumber + " " +
                  getSecurityNumber
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Date and city of last entry / arrival into the U.S.: &nbsp;&nbsp;
                {arrivalIntoUS
                  ? arrivalIntoUS
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) I-94 Card Number: &nbsp;&nbsp;
                {i94CardNumber
                  ? i94CardNumber
                  : "NA"}
              </td>
              <td className='section'>
                (4) Current status: &nbsp;&nbsp;
                {cardCurrentStatus
                  ? cardCurrentStatus
                  : "NA"}
              </td>
              <td className='section'>
                (4) Expiration date of current status: &nbsp;&nbsp;
                {cardExpirationDate
                  ? cardExpirationDate
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) City, State, and Country of Birth: &nbsp;&nbsp;
                {ctStateCountryOfBirth
                  ? ctStateCountryOfBirth
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) Passport Number Used at Last Arrival: &nbsp;&nbsp;
                {passportNumOnArrival
                  ? passportNumOnArrival
                  : "NA"}
              </td>
              <td className='section'>
                (4) Passport expiration date: &nbsp;&nbsp;
                {passportExpirationDate
                  ? passportExpirationDate
                  : "NA"}
              </td>
              <td className='section'>
                (4) Country that issued your passport.: &nbsp;&nbsp;
                {countryThatIssuedPassport
                  ? countryThatIssuedPassport
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                (4) Mother’s complete name: &nbsp;&nbsp;
                {motherCompleteName
                  ? motherCompleteName
                  : "NA"}
              </td>
              <td className='section'>
                (4) Mother’s city of birth: &nbsp;&nbsp;
                {motherCity
                  ? motherCity
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) Mother’s country of birth: &nbsp;&nbsp;
                {motherCountryOfBirth
                  ? motherCountryOfBirth
                  : "NA"}
              </td>
              <td className='section'>
                (4) Mother’s city of residence: &nbsp;&nbsp;
                {motherResidenceCity
                  ? motherResidenceCity
                  : "NA"}
              </td>
              <td className='section'>
                (4) Mother’s country of residence: &nbsp;&nbsp;
                {motherResidenceCountry
                  ? motherResidenceCountry
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                (4) Father’s complete name: &nbsp;&nbsp;
                {fatherCompleteName
                  ? fatherCompleteName
                  : "NA"}
              </td>
              <td className='section'>
                (4) Father’s city of birth: &nbsp;&nbsp;
                {fatherCity
                  ? fatherCity
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) Father’s country of birth: &nbsp;&nbsp;
                {fatherCountryOfBirth
                  ? fatherCountryOfBirth
                  : "NA"}
              </td>
              <td className='section'>
                (4) Father’s city of residence: &nbsp;&nbsp;
                {fatherResidenceCity
                  ? fatherResidenceCity
                  : "NA"}
              </td>
              <td className='section'>
                (4) Father’s country of residence: &nbsp;&nbsp;
                {fatherResidenceCountry
                  ? fatherResidenceCountry
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Were you inspected and admitted by an immigration oficial?: &nbsp;&nbsp;
                {inspectedImmigrationOficial
                  ? inspectedImmigrationOficial
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Non-immigrant visa number (if any): &nbsp;&nbsp;
                {nonimmigrantVisaNumber
                  ? nonimmigrantVisaNumber
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Name and location of consult that issued your non-immigrant visa : &nbsp;&nbsp;
                {nameOnNonimmigrantVisa
                  ? nameOnNonimmigrantVisa
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                (4) Date of approval for non-immigrant visa : &nbsp;&nbsp;
                {dateOfApprovalNonImmigrant
                  ? dateOfApprovalNonImmigrant
                  : "NA"}
              </td>
              <td className='section'>
                (4) Sex : &nbsp;&nbsp;
                {sxStatus
                  ? sxStatus
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) marital status : &nbsp;&nbsp;
                {maritalStatus
                  ? maritalStatus
                  : "NA"}
              </td>
              <td colSpan={2} className='section'>
                (4) Total number of marriages : &nbsp;&nbsp;
                {totalMarriages
                  ? totalMarriages
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                (4) Current spouse’s full name: &nbsp;&nbsp;
                {currentSpouseFullname
                  ? currentSpouseFullname
                  : "NA"}
              </td>
              <td className='section'>
                (4) alien number: &nbsp;&nbsp;
                {currentSpouseAlienNum
                  ? currentSpouseAlienNum
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) date of birth: &nbsp;&nbsp;
                {currentSpouseDOB
                  ? currentSpouseDOB
                  : "NA"}
              </td>
              <td className='section'>
                (4) date of marriage: &nbsp;&nbsp;
                {currentSpouseDOMrg
                  ? currentSpouseDOMrg
                  : "NA"}
              </td>
              <td className='section'>
                (4) city: &nbsp;&nbsp;
                {currentSpouseCity
                  ? currentSpouseCity
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) state: &nbsp;&nbsp;
                {currentSpouseState
                  ? currentSpouseState
                  : "NA"}
              </td>
              <td colSpan={2} className='section'>
                (4) country of birth: &nbsp;&nbsp;
                {currentSpouseCountryOfBirth
                  ? currentSpouseCountryOfBirth
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                (4) Prior spouse 1’s full name: &nbsp;&nbsp;
                {priorSpouse1Fullname
                  ? priorSpouse1Fullname
                  : "NA"}
              </td>
              <td className='section'>
                (4) alien number: &nbsp;&nbsp;
                {priorSpouse1AlienNum
                  ? priorSpouse1AlienNum
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) date of birth: &nbsp;&nbsp;
                {priorSpouse1DOB
                  ? priorSpouse1DOB
                  : "NA"}
              </td>
              <td className='section'>
                (4) date of marriage: &nbsp;&nbsp;
                {priorSpouse1DOMrg
                  ? priorSpouse1DOMrg
                  : "NA"}
              </td>
              <td className='section'>
                (4) city: &nbsp;&nbsp;
                {priorSpouse1City
                  ? priorSpouse1City
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) state: &nbsp;&nbsp;
                {priorSpouse1State
                  ? priorSpouse1State
                  : "NA"}
              </td>
              <td className='section'>
                (4) country of birth: &nbsp;&nbsp;
                {priorSpouse1CountryOfBirth
                  ? priorSpouse1CountryOfBirth
                  : "NA"}
              </td>
              <td className='section'>
                (4) date marriage ended: &nbsp;&nbsp;
                {priorSpouse1DateMrgEnded
                  ? priorSpouse1DateMrgEnded
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                (4) Prior spouse 2’s full name: &nbsp;&nbsp;
                {priorSpouse2Fullname
                  ? priorSpouse2Fullname
                  : "NA"}
              </td>
              <td className='section'>
                (4) alien number: &nbsp;&nbsp;
                {priorSpouse2AlienNum
                  ? priorSpouse2AlienNum
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) date of birth: &nbsp;&nbsp;
                {priorSpouse2DOB
                  ? priorSpouse2DOB
                  : "NA"}
              </td>
              <td className='section'>
                (4) date of marriage: &nbsp;&nbsp;
                {priorSpouse2DOMrg
                  ? priorSpouse2DOMrg
                  : "NA"}
              </td>
              <td className='section'>
                (4) city: &nbsp;&nbsp;
                {priorSpouse2City
                  ? priorSpouse2City
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) state: &nbsp;&nbsp;
                {priorSpouse2State
                  ? priorSpouse2State
                  : "NA"}
              </td>
              <td className='section'>
                (4) country of birth: &nbsp;&nbsp;
                {priorSpouse2CountryOfBirth
                  ? priorSpouse2CountryOfBirth
                  : "NA"}
              </td>
              <td className='section'>
                (4) date marriage ended: &nbsp;&nbsp;
                {priorSpouse2DateMrgEnded
                  ? priorSpouse2DateMrgEnded
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
              (4) Have you applied for permanent resident status in the past?:
                <br />
                {appliedForPermenantResident
                  ? appliedForPermenantResident + " " +
                  permenantResidentStatus
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
              (4) Permenant resident location:
                <br />
                {permenantResidentLocation
                  ? permenantResidentLocation
                  : "NA"}
              </td>
              <td colSpan={2} className='section'>
              (4) Result of the application:
                <br />
                {applicationResult
                  ? applicationResult
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                36.	Have you EVER worked, volunteered, or otherwise served in any prison, jail, prison camp, detention facility, labor camp, or any other situation that involved detaining persons?:
                <br />
                {situationsThatDetainingPersons
                  ? situationsThatDetainingPersons + " " +
                  expSituationsThatDetainingPersons
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                37.	Have you EVER been a member of, assisted, or participated in any group, unit, or organization of any kind in which you or other persons used any type of weapon against any person or threatened to do so?:
                <br />
                {threatendedAnyPerson
                  ? threatendedAnyPerson + " " +
                  expThreatendedAnyPerson
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                38.	Have you EVER served in, been a member of, assisted, or participated in any military unit, paramilitary unit, police unit, self-defense unit, vigilante unit, rebel group, guerilla group, militia, insurgent organization, or any other armed group?:
                <br />
                {anyArmedGroup
                  ? anyArmedGroup + " " +
                  expAnyArmedGroup
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                39.	Have you EVER been a member of, or in any way affiliated with, the Communist Party or any other totalitarian party (in the United States or abroad)?:
                <br />
                {anyOtherTotalitarian
                  ? anyOtherTotalitarian + " " +
                  expAnyOtherTotalitarian
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                40.	During the period from March 23, 1933 to May 8, 1945, did you ever order, incite, assist, or otherwise participate in the persecution of any person because of race, religion, national origin, or political opinion, in association with either the Nazi government of Germany or any organization or government associated or allied with the Nazi government of Germany?:
                <br />
                {naziGovOfGermany
                  ? naziGovOfGermany + " " +
                  expNaziGovOfGermany
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                41.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Acts involving torture or genocide?:
                <br />
                {tortureOrGenocide
                  ? tortureOrGenocide + " " +
                  expTortureOrGenocide
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                42.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Killing any person?:
                <br />
                {killingAnyPerson
                  ? killingAnyPerson + " " +
                  expKillingAnyPerson
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                43.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Intentionally and severely injuring any person?:
                <br />
                {intentionallyInjuredPerson
                  ? intentionallyInjuredPerson + " " +
                  expIntentionallyInjuredPerson
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                44.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in Engaging in any kind of sexual contact or relations with any person who did not consent or was unable to consent, or was being forced or threatened?:
                <br />
                {beingForced
                  ? beingForced + " " +
                  expBeingForced
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                45.	Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in . Limiting or denying any person's ability to exercise religious beliefs?:
                <br />
                {religiousBeliefs
                  ? religiousBeliefs + " " +
                  expReligiousBeliefs
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                46.	Have you EVER recruited, enlisted, conscripted, or used any person under 15 years of age to serve in or help an armed force or group?:
                <br />
                {armedForce
                  ? armedForce + " " +
                  expArmedForce
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                47.	Have you EVER used any person under 15 years of age to take part in hostilities, or to help or provide services to people in combat?:
                <br />
                {peopleInCombat
                  ? peopleInCombat + " " +
                  expPeopleInCombat
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (17) Have you ever applied for any immigration benefit? (Examples:
                Permanent residency, asylum, amnesty, TPS, cancellation,
                suspension, Family Unity, DACA, visa petition, U visa, T visa,
                Special Immigrant Juvenile Status, or any other immigration
                benefit). If so, please tell me what type of benefit and when did
                you apply <br />
                <u>
                  {appiledImmigration
                    ? appiledImmigration
                    : "NA"}
                </u>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* <center>
        <h4>
          {props.state.clientType?.value} {props.state.clientName?.value}{" "}
          {props.state.caseType?.value}
        </h4>
      </center>

      <center>
        <h4>{props.state.clientName?.value}</h4>
      </center>

      <div className="margin-2">
        <table>
          <tbody>
            <tr>
              <td className='section' colSpan={3}>
                {" "}
                (1) Are you a New Client, Former Client, or Current client?
                &nbsp;&nbsp;{" "}
                <u>
                  {props.state.clientType?.value
                    ? props.state.clientType?.value
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                {" "}
                (2) Case Type(Immigration, Criminal, Family, other): &nbsp;&nbsp;{" "}
                <u>
                  {props.state.caseType?.value
                    ? props.state.caseType?.value
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (3) Are you currently outside the US? yes/no, if so, where?
                &nbsp;&nbsp;
                <u>
                  {props.state.currentInUs?.value
                    ? props.state.currentInUs?.value +
                      " " +
                      " in " +
                      " " +
                      props.state.usLocation?.value
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section'>
                (4) Client Name: &nbsp;&nbsp;
                {props.state.clientName?.value
                  ? props.state.clientName?.value
                  : "NA"}
              </td>
              <td className='section'>
                (5) Date of birth:&nbsp;&nbsp;{" "}
                <u>
                  {props.state.clientDOB?.value
                    ? props.state.clientDOB?.value
                    : "NA"}
                </u>
              </td>
              <td className='section'>
                (6) A File:&nbsp;&nbsp;{" "}
                <u>
                  {props.state.aFile?.value ? props.state.aFile?.value : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (7) Country of birth &nbsp;&nbsp;{" "}
                <u>
                  {props.state.birthCountry?.value
                    ? props.state.birthCountry?.value
                    : "NA"}{" "}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (8) Street Address (within the US): &nbsp;&nbsp;{" "}
                <u>
                  {props.state.streetAddress?.value
                    ? props.state.streetAddress?.value
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section'>
                (9) City: &nbsp;&nbsp;
                {props.state.city?.value ? props.state.city?.value : "NA"}
              </td>
              <td className='section'>
                (10) State:&nbsp;&nbsp;{" "}
                <u>
                  {props.state.state?.value ? props.state.state?.value : "NA"}
                </u>
              </td>
              <td className='section'>
                (11) Zip:&nbsp;&nbsp;{" "}
                <u>{props.state.zip?.value ? props.state.zip?.value : "NA"}</u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={2}>
                (12) Phone: &nbsp;&nbsp;{" "}
                <u>
                  {props.state.telephone?.value
                    ? props.state.telephone?.value
                    : "NA"}
                </u>
              </td>
              <td className='section'>
                (13) Current immigration status: &nbsp;&nbsp;{" "}
                <u>
                  {props.state.immigrationStatus?.value
                    ? props.state.immigrationStatus?.value
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (14) Briefly describe your legal problem or tell me why you need a
                lawyer: &nbsp;&nbsp; <br />
                <u>
                  {props.state.problem?.value ? props.state.problem?.value : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (15) Are you in removal proceedings now? &nbsp;&nbsp; <br />
                <ol type="a">
                  <li>
                    Upcoming Hearing date & Location:&nbsp;&nbsp;{" "}
                    <u>
                      {props.state.dateOfHearing?.value
                        ? props.state.dateOfHearing?.value +
                          " " +
                          " at " +
                          " " +
                          props.state.locationOfHearing?.value
                        : "NA"}
                    </u>
                  </li>
                  <li>
                    Type of hearing: &nbsp;&nbsp;
                    <u>
                      {" "}
                      {props.state.typeOfHearing?.value
                        ? props.state.typeOfHearing?.value
                        : "NA"}
                    </u>
                  </li>
                  <li>
                    Were you given immigration paperwork? &nbsp;&nbsp;{" "}
                    <u>
                      {props.state.immigrationPaper?.value
                        ? props.state.immigrationPaper?.value
                        : "NA"}
                    </u>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                (16). Are you married? Yes/No, if yes, Immigration Status of
                spouse:
                <br />
                {props.state.maritialStatus?.value
                  ? props.state.maritialStatus?.value +
                    props.state.spouseImmigration?.value
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={2}>
                (16 - a) spouse Name:&nbsp;&nbsp;{" "}
                <u>
                  {props.state.spouseName?.value
                    ? props.state.spouseName?.value
                    : "NA"}
                </u>
              </td>
              <td className='section'>
                (16 - b) spouse DOB:&nbsp;&nbsp;{" "}
                <u>
                  {props.state.spouseDOB?.value
                    ? props.state.spouseDOB?.value
                    : "NA"}
                </u>
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                <ol type="1">
                  <li>
                    Have you ever been the victim of a crime? Yes/No Where were
                    you a victim of crime?&nbsp;&nbsp;
                    <u>
                      {props.state.victimOfCrime?.value
                        ? props.state.victimOfCrime?.value +
                          " " +
                          props.state.victimOfCrimeLocation?.value
                        : "NA"}
                    </u>{" "}
                  </li>
                  <li>
                    Do you have a police report? Yes/no&nbsp;&nbsp;
                    <u>
                      {props.state.policeReport?.value
                        ? props.state.policeReport?.value
                        : "NA"}
                    </u>
                  </li>
                  <li>
                    Have you ever had contact with the police for any reason at
                    all in the US?If yes describe why you had contact &nbsp;&nbsp;
                    <u>
                      {props.state.contactWithPolice?.value
                        ? props.state.contactWithPolice?.value +
                          " " +
                          props.state.contactReason?.value
                        : "NA"}
                    </u>
                  </li>
                  <li>
                    Do you have any reason to fear going back to your country?
                    &nbsp;&nbsp;{" "}
                    <u>
                      {props.state.fear?.value
                        ? props.state.fear?.value +
                          " " +
                          props.state.fearReason?.value
                        : "NA"}
                    </u>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (17) Have you ever applied for any immigration benefit? (Examples:
                Permanent residency, asylum, amnesty, TPS, cancellation,
                suspension, Family Unity, DACA, visa petition, U visa, T visa,
                Special Immigrant Juvenile Status, or any other immigration
                benefit). If so, please tell me what type of benefit and when did
                you apply <br />
                <u>
                  {props.state.appiledImmigration?.value
                    ? props.state.appiledImmigration?.value
                    : "NA"}
                </u>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default TableView;
