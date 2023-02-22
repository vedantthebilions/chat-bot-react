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

  // // page 2

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

  // // page 3

  const ethnicity = props.state?.ethnicity;
  const race = props.state?.race;
  const yourHeight = props.state?.yourHeight;
  const yourWeight = props.state?.yourWeight;
  const eyeColor = props.state?.eyeColor;
  const hairColor = props.state?.hairColor;
  let employeeDetailList = localStorage.getItem('employeeDetailList');
  //console.log('employee Detail List value : ', employeeDetailList);

  // // page 4

  const deniedAdmissionToUS = props.state?.deniedAdmissionToUS;
  const expDeniedAdmissionToUS = props.state?.expDeniedAdmissionToUS;
  const deniedVisaToUS = props.state?.deniedVisaToUS;
  const expDeniedVisaToUS = props.state?.expDeniedVisaToUS;
  const workInUSwithoutAuthorization = props.state?.workInUSwithoutAuthorization;
  const expWorkInUSwithoutAuthorization = props.state?.expWorkInUSwithoutAuthorization;
  const violatTermOfNonimmigrantStatus = props.state?.violatTermOfNonimmigrantStatus;
  const expViolatTermOfNonimmigrantStatus = props.state?.expViolatTermOfNonimmigrantStatus;
  const presentlyRemovalExclusionProceed = props.state?.presentlyRemovalExclusionProceed;
  const expPresentlyRemovalExclusionProceed = props.state?.expPresentlyRemovalExclusionProceed;
  const issueFinalOrderExclusionRemoval = props.state?.issueFinalOrderExclusionRemoval;
  const expIssueFinalOrderExclusionRemoval = props.state?.expIssueFinalOrderExclusionRemoval;
  const lawfulPermResidentStatuslatRescind = props.state?.lawfulPermResidentStatuslatRescind;
  const expLawfulPermResidentStatuslatRescind = props.state?.expLawfulPermResidentStatuslatRescind;
  const voluntlyByImmigrationOfficerFailToDepart = props.state?.voluntlyByImmigrationOfficerFailToDepart;
  const expVoluntlyByImmigrationOfficerFailToDepart = props.state?.expVoluntlyByImmigrationOfficerFailToDepart;
  const appliedForReliefFromRemovalDeportation = props.state?.appliedForReliefFromRemovalDeportation;
  const expAppliedForReliefFromRemovalDeportation = props.state?.expAppliedForReliefFromRemovalDeportation;
  const jNonimmigrantVisitSubjectTwoYear = props.state?.jNonimmigrantVisitSubjectTwoYear;
  const expJNonimmigrantVisitSubjectTwoYear = props.state?.expJNonimmigrantVisitSubjectTwoYear;
  const compliedWithForeignResidReq = props.state?.compliedWithForeignResidReq;
  const expCompliedWithForeignResidReq = props.state?.expCompliedWithForeignResidReq;

  // // page 5

  const grantWaiverRecommendLetter = props.state?.grantWaiverRecommendLetter;
  const expGrantWaiverRecommendLetter = props.state?.expGrantWaiverRecommendLetter;
  const arrestedAnyReasonByLaw = props.state?.arrestedAnyReasonByLaw;
  const expArrestedAnyReasonByLaw = props.state?.expArrestedAnyReasonByLaw;
  const committedACrimeOfAnyKind = props.state?.committedACrimeOfAnyKind;
  const expCommittedACrimeOfAnyKind = props.state?.expCommittedACrimeOfAnyKind;
  const convictedOfCrimeActOfClemency = props.state?.convictedOfCrimeActOfClemency;
  const expConvictedOfCrimeActOfClemency = props.state?.expConvictedOfCrimeActOfClemency;
  const orderedPunishedByJudge = props.state?.orderedPunishedByJudge;
  const expOrderedPunishedByJudge = props.state?.expOrderedPunishedByJudge;
  const defendInCriminalProceeding = props.state?.defendInCriminalProceeding;
  const expDefendInCriminalProceeding = props.state?.expDefendInCriminalProceeding;
  const violatSubstanceLawForeigncountry = props.state?.violatSubstanceLawForeigncountry;
  const expViolatSubstanceLawForeigncountry = props.state?.expViolatSubstanceLawForeigncountry;
  const exercisedImmunityOffenseInUS = props.state?.exercisedImmunityOffenseInUS;
  const expExercisedImmunityOffenseInUS = props.state?.expExercisedImmunityOffenseInUS;
  const servingAsForeignGovernment = props.state?.servingAsForeignGovernment;
  const expServingAsForeignGovernment = props.state?.expServingAsForeignGovernment;
  const forceTraffickingSexActs = props.state?.forceTraffickingSexActs;
  const expForceTraffickingSexActs = props.state?.expForceTraffickingSexActs;
  const traffickPersonCoercion = props.state?.traffickPersonCoercion;
  const expTraffickPersonCoercion = props.state?.expTraffickPersonCoercion;

  // // page 6
  const knowinglyAidedSlavery = props.state?.knowinglyAidedSlavery;
  const expKnowinglyAidedSlavery = props.state?.expKnowinglyAidedSlavery;
  const spouseSonOfForeignNational = props.state?.spouseSonOfForeignNational;
  const expSpouseSonOfForeignNational = props.state?.expSpouseSonOfForeignNational;
  const engageInMoneyLaunderActivity = props.state?.engageInMoneyLaunderActivity;
  const expEngageInMoneyLaunderActivity = props.state?.expEngageInMoneyLaunderActivity;
  const intendActivityViolatesInUS = props.state?.intendActivityViolatesInUS;
  const expIntendActivityViolatesInUS = props.state?.expIntendActivityViolatesInUS;
  const engageInUSProhibitingExport = props.state?.engageInUSProhibitingExport;
  const expEngageInUSProhibitingExport = props.state?.expEngageInUSProhibitingExport;
  const intendEngageOpposeInUS = props.state?.intendEngageOpposeInUS;
  const expIntendEngageOpposeInUS = props.state?.expIntendEngageOpposeInUS;
  const intendEngageEndangerInUS = props.state?.intendEngageEndangerInUS;
  const expIntendEngageEndangerInUS = props.state?.expIntendEngageEndangerInUS;
  const engageInUnlawActivity = props.state?.engageInUnlawActivity;
  const expEngageInUnlawActivity = props.state?.expEngageInUnlawActivity;
  const engagedInSeriousForeignInUS = props.state?.engagedInSeriousForeignInUS;
  const expEngagedInSeriousForeignInUS = props.state?.expEngagedInSeriousForeignInUS;
  const commitThreatToCommit = props.state?.commitThreatToCommit;
  const expCommitThreatToCommit = props.state?.expCommitThreatToCommit;
  const receivedAnyTypeMilitary = props.state?.receivedAnyTypeMilitary;
  const expReceivedAnyTypeMilitary = props.state?.expReceivedAnyTypeMilitary;
  const spouseCommitSubstantialDamage = props.state?.spouseCommitSubstantialDamage;
  const expSpouseCommitSubstantialDamage = props.state?.expSpouseCommitSubstantialDamage;
  const transportingWeaponsToAnyPerson = props.state?.transportingWeaponsToAnyPerson;
  const expTransportingWeaponsToAnyPerson = props.state?.expTransportingWeaponsToAnyPerson;
  
  
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
  const haveYouReceivedPublicAssistance = props.state?.haveYouReceivedPublicAssistance;
  const expHaveYouReceivedPublicAssistance = props.state?.expHaveYouReceivedPublicAssistance;
  const areYouReceivePublicAssistance = props.state?.areYouReceivePublicAssistance;
  const expAreYouReceivePublicAssistance = props.state?.expAreYouReceivePublicAssistance;
  const removalProceedingFiledAgainstU = props.state?.removalProceedingFiledAgainstU;
  const expRemovalProceedingFiledAgainstU = props.state?.expRemovalProceedingFiledAgainstU;
  const everSubmittedFraudulent = props.state?.everSubmittedFraudulent;
  const expEverSubmittedFraudulent = props.state?.expEverSubmittedFraudulent;
  const liedAboutMisrepresented = props.state?.liedAboutMisrepresented;
  const expLiedAboutMisrepresented = props.state?.expLiedAboutMisrepresented;
  const falselyClaimedToBeUS = props.state?.falselyClaimedToBeUS;
  const expFalselyClaimedToBeUS = props.state?.expFalselyClaimedToBeUS;
  const beenAStowaway = props.state?.beenAStowaway;
  const expBeenAStowaway = props.state?.expBeenAStowaway;
  const alienSmuggling = props.state?.alienSmuggling;
  const expAlienSmuggling = props.state?.expAlienSmuggling;
  const fraudulentDocuments = props.state?.fraudulentDocuments;
  const expFraudulentDocuments = props.state?.expFraudulentDocuments;
  const removedFromTheUS = props.state?.removedFromTheUS;
  const expRemovedFromTheUS = props.state?.expRemovedFromTheUS;
  const beingAdmittedOrParoled = props.state?.beingAdmittedOrParoled;
  const expBeingAdmittedOrParoled = props.state?.expBeingAdmittedOrParoled;
  const beenUnlawfullyPresentInUS = props.state?.beenUnlawfullyPresentInUS;
  const expBeenUnlawfullyPresentInUS = props.state?.expBeenUnlawfullyPresentInUS;
  const beenUnlawfullyPresentYearInUS = props.state?.beenUnlawfullyPresentYearInUS;
  const expBeenUnlawfullyPresentYearInUS = props.state?.expBeenUnlawfullyPresentYearInUS;
  const reenteredInUSInAggregate = props.state?.reenteredInUSInAggregate;
  const expReenteredInUSInAggregate = props.state?.expReenteredInUSInAggregate;
  const removedFromUSBeforeReentered = props.state?.removedFromUSBeforeReentered;
  const expRemovedFromUSBeforeReentered = props.state?.expRemovedFromUSBeforeReentered;
  const practicePolygamyInUS = props.state?.practicePolygamyInUS;
  const expPracticePolygamyInUS = props.state?.expPracticePolygamyInUS;
  const iNASection232C = props.state?.iNASection232C;
  const expINASection232C = props.state?.expINASection232C;
  const grantedCustodyOfChild = props.state?.grantedCustodyOfChild;
  const expGrantedCustodyOfChild = props.state?.expGrantedCustodyOfChild;
  const violationOfAnyFederal = props.state?.violationOfAnyFederal;
  const expViolationOfAnyFederal = props.state?.expViolationOfAnyFederal;
  const renouncedUSCitizenship = props.state?.renouncedUSCitizenship;
  const expRenouncedUSCitizenship = props.state?.expRenouncedUSCitizenship;
  const nationalSecurityTrainingCorps = props.state?.nationalSecurityTrainingCorps;
  const expNationalSecurityTrainingCorps = props.state?.expNationalSecurityTrainingCorps;
  const dischargedFromSuchTraining = props.state?.dischargedFromSuchTraining;
  const expDischargedFromSuchTraining = props.state?.expDischargedFromSuchTraining;
  const convictedOfDesertion = props.state?.convictedOfDesertion;
  const expConvictedOfDesertion = props.state?.expConvictedOfDesertion;
  const leftOrRemainedOutsideTheUS = props.state?.leftOrRemainedOutsideTheUS;
  const expLeftOrRemainedOutsideTheUS = props.state?.expLeftOrRemainedOutsideTheUS;
  
  
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
      </center> */}

      <center>
        <h6>{clientName}</h6>
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
            </tr> &nbsp;
            {/* Page 1 */}
            <tr>
              <td colSpan={3} className='section'>
                Complete legal name of the applicant &nbsp;&nbsp; (if married, married name): &nbsp;&nbsp;
                {completeLegalName
                  ? completeLegalName
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                All other names used: &nbsp;&nbsp;
                {otherNameUsed
                  ? otherNameUsed
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                Current Mailing address: &nbsp;&nbsp;
                {currentMailingAddress
                  ? currentMailingAddress
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                Current Address where you live & how long you have lived there.: &nbsp;&nbsp;
                {currentAddressYouLive
                  ? currentAddressYouLive
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                Country of Origin: &nbsp;&nbsp;
                {countryOfOrigin
                  ? countryOfOrigin
                  : "NA"}
              </td>
              <td className='section'>
                Birth date: &nbsp;&nbsp;
                {birthDate
                  ? birthDate
                  : "NA"}
              </td>
              <td className='section'>
                Social Security Number (if any): &nbsp;&nbsp;
                {socialSecurityNumber
                  ? socialSecurityNumber
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                Alien Number (if any): &nbsp;&nbsp;
                {alienNumber
                  ? alienNumber
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
              Have you ever had a social security number? if so, what was the number.:
                <br />
                {hadSecurityNumber
                  ? hadSecurityNumber + " " +
                  getSecurityNumber
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                Date and city of last entry / arrival into the U.S.: &nbsp;&nbsp;
                {arrivalIntoUS
                  ? arrivalIntoUS
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                I-94 Card Number: &nbsp;&nbsp;
                {i94CardNumber
                  ? i94CardNumber
                  : "NA"}
              </td>
              <td className='section'>
                Current status: &nbsp;&nbsp;
                {cardCurrentStatus
                  ? cardCurrentStatus
                  : "NA"}
              </td>
              <td className='section'>
                Expiration date of current status: &nbsp;&nbsp;
                {cardExpirationDate
                  ? cardExpirationDate
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                City, State, and Country of Birth: &nbsp;&nbsp;
                {ctStateCountryOfBirth
                  ? ctStateCountryOfBirth
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                Passport Number Used at Last Arrival: &nbsp;&nbsp;
                {passportNumOnArrival
                  ? passportNumOnArrival
                  : "NA"}
              </td>
              <td className='section'>
                Passport expiration date: &nbsp;&nbsp;
                {passportExpirationDate
                  ? passportExpirationDate
                  : "NA"}
              </td>
              <td className='section'>
                Country that issued your passport.: &nbsp;&nbsp;
                {countryThatIssuedPassport
                  ? countryThatIssuedPassport
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                Mother’s complete name: &nbsp;&nbsp;
                {motherCompleteName
                  ? motherCompleteName
                  : "NA"}
              </td>
              <td className='section'>
                Mother’s city of birth: &nbsp;&nbsp;
                {motherCity
                  ? motherCity
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                Mother’s country of birth: &nbsp;&nbsp;
                {motherCountryOfBirth
                  ? motherCountryOfBirth
                  : "NA"}
              </td>
              <td className='section'>
                Mother’s city of residence: &nbsp;&nbsp;
                {motherResidenceCity
                  ? motherResidenceCity
                  : "NA"}
              </td>
              <td className='section'>
                Mother’s country of residence: &nbsp;&nbsp;
                {motherResidenceCountry
                  ? motherResidenceCountry
                  : "NA"}
              </td>
            </tr>
            {/* Page 2 */}
            <tr>
              <td colSpan={2} className='section'>
                Father’s complete name: &nbsp;&nbsp;
                {fatherCompleteName
                  ? fatherCompleteName
                  : "NA"}
              </td>
              <td className='section'>
                Father’s city of birth: &nbsp;&nbsp;
                {fatherCity
                  ? fatherCity
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                Father’s country of birth: &nbsp;&nbsp;
                {fatherCountryOfBirth
                  ? fatherCountryOfBirth
                  : "NA"}
              </td>
              <td className='section'>
                Father’s city of residence: &nbsp;&nbsp;
                {fatherResidenceCity
                  ? fatherResidenceCity
                  : "NA"}
              </td>
              <td className='section'>
                Father’s country of residence: &nbsp;&nbsp;
                {fatherResidenceCountry
                  ? fatherResidenceCountry
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                Were you inspected and admitted by an immigration oficial?: &nbsp;&nbsp;
                {inspectedImmigrationOficial
                  ? inspectedImmigrationOficial
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                Non-immigrant visa number (if any): &nbsp;&nbsp;
                {nonimmigrantVisaNumber
                  ? nonimmigrantVisaNumber
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                Name and location of consult that issued your non-immigrant visa : &nbsp;&nbsp;
                {nameOnNonimmigrantVisa
                  ? nameOnNonimmigrantVisa
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                Date of approval for non-immigrant visa : &nbsp;&nbsp;
                {dateOfApprovalNonImmigrant
                  ? dateOfApprovalNonImmigrant
                  : "NA"}
              </td>
              <td className='section'>
                Sex : &nbsp;&nbsp;
                {sxStatus
                  ? sxStatus
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                marital status : &nbsp;&nbsp;
                {maritalStatus
                  ? maritalStatus
                  : "NA"}
              </td>
              <td colSpan={2} className='section'>
                Total number of marriages : &nbsp;&nbsp;
                {totalMarriages
                  ? totalMarriages
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                Current spouse’s full name: &nbsp;&nbsp;
                {currentSpouseFullname
                  ? currentSpouseFullname
                  : "NA"}
              </td>
              <td className='section'>
                alien number: &nbsp;&nbsp;
                {currentSpouseAlienNum
                  ? currentSpouseAlienNum
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                date of birth: &nbsp;&nbsp;
                {currentSpouseDOB
                  ? currentSpouseDOB
                  : "NA"}
              </td>
              <td className='section'>
                date of marriage: &nbsp;&nbsp;
                {currentSpouseDOMrg
                  ? currentSpouseDOMrg
                  : "NA"}
              </td>
              <td className='section'>
                city: &nbsp;&nbsp;
                {currentSpouseCity
                  ? currentSpouseCity
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                state: &nbsp;&nbsp;
                {currentSpouseState
                  ? currentSpouseState
                  : "NA"}
              </td>
              <td colSpan={2} className='section'>
                country of birth: &nbsp;&nbsp;
                {currentSpouseCountryOfBirth
                  ? currentSpouseCountryOfBirth
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                Prior spouse 1’s full name: &nbsp;&nbsp;
                {priorSpouse1Fullname
                  ? priorSpouse1Fullname
                  : "NA"}
              </td>
              <td className='section'>
                alien number: &nbsp;&nbsp;
                {priorSpouse1AlienNum
                  ? priorSpouse1AlienNum
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                date of birth: &nbsp;&nbsp;
                {priorSpouse1DOB
                  ? priorSpouse1DOB
                  : "NA"}
              </td>
              <td className='section'>
                date of marriage: &nbsp;&nbsp;
                {priorSpouse1DOMrg
                  ? priorSpouse1DOMrg
                  : "NA"}
              </td>
              <td className='section'>
                city: &nbsp;&nbsp;
                {priorSpouse1City
                  ? priorSpouse1City
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                state: &nbsp;&nbsp;
                {priorSpouse1State
                  ? priorSpouse1State
                  : "NA"}
              </td>
              <td className='section'>
                country of birth: &nbsp;&nbsp;
                {priorSpouse1CountryOfBirth
                  ? priorSpouse1CountryOfBirth
                  : "NA"}
              </td>
              <td className='section'>
                date marriage ended: &nbsp;&nbsp;
                {priorSpouse1DateMrgEnded
                  ? priorSpouse1DateMrgEnded
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className='section'>
                Prior spouse 2’s full name: &nbsp;&nbsp;
                {priorSpouse2Fullname
                  ? priorSpouse2Fullname
                  : "NA"}
              </td>
              <td className='section'>
                alien number: &nbsp;&nbsp;
                {priorSpouse2AlienNum
                  ? priorSpouse2AlienNum
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                date of birth: &nbsp;&nbsp;
                {priorSpouse2DOB
                  ? priorSpouse2DOB
                  : "NA"}
              </td>
              <td className='section'>
                date of marriage: &nbsp;&nbsp;
                {priorSpouse2DOMrg
                  ? priorSpouse2DOMrg
                  : "NA"}
              </td>
              <td className='section'>
                city: &nbsp;&nbsp;
                {priorSpouse2City
                  ? priorSpouse2City
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                state: &nbsp;&nbsp;
                {priorSpouse2State
                  ? priorSpouse2State
                  : "NA"}
              </td>
              <td className='section'>
                country of birth: &nbsp;&nbsp;
                {priorSpouse2CountryOfBirth
                  ? priorSpouse2CountryOfBirth
                  : "NA"}
              </td>
              <td className='section'>
                date marriage ended: &nbsp;&nbsp;
                {priorSpouse2DateMrgEnded
                  ? priorSpouse2DateMrgEnded
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
              Have you applied for permanent resident status in the past?:
                <br />
                {appliedForPermenantResident
                  ? appliedForPermenantResident + " " +
                  permenantResidentStatus
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
              Permenant resident location:
                <br />
                {permenantResidentLocation
                  ? permenantResidentLocation
                  : "NA"}
              </td>
              <td colSpan={2} className='section'>
              Result of the application:
                <br />
                {applicationResult
                  ? applicationResult
                  : "NA"}
              </td>
            </tr>
            {/* Page 3 */}
            <tr>
              <td colSpan={3} className='section'>
              Ethnicity (Hispanic or Latino or NOT Hispanic or Latino):
                <br />
                {ethnicity
                  ? ethnicity
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
              Race (please circle):
                <br />
                {race
                  ? race
                  : "NA"}
              </td>
              <td className='section'>
              Height:
                <br />
                {yourHeight
                  ? yourHeight
                  : "NA"}
              </td>
              <td className='section'>
              Weight:
                <br />
                {yourWeight
                  ? yourWeight
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
              Eye Color:
                <br />
                {eyeColor
                  ? eyeColor
                  : "NA"}
              </td>
              <td colSpan={2} className='section'>
              Hair color:
                <br />
                {hairColor
                  ? hairColor
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section'>
                Please list your spouse and all children, living or deceased, that you have in the world.
              </td>
              <td colSpan={2}>
                <table>
                  <thead>
                    <tr>
                      <td className='section'>Full name</td>
                      <td className='section'>Date of birth</td>
                      <td className='section'>Country of origin</td>
                      <td className='section'>Relation to you</td>
                      <td className='section'>Alien number</td>
                      <td className='section'>Is this person applying with you or following to join?</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                      <td className='section'>123456</td>
                      <td className='section'>Yes</td>
                    </tr>
                    <tr>
                      <td className='section'>xyz</td>
                      <td className='section'>2/2/2222</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                      <td className='section'>654123</td>
                      <td className='section'>Yes</td>
                    </tr>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                      <td className='section'>123456</td>
                      <td className='section'>Yes</td>
                    </tr>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                      <td className='section'>123456</td>
                      <td className='section'>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className='section'>
                Please list all organizations, clubs, associations, or other groups of which you were a member starting with your 16th birthday through the present.
              </td>
              <td colSpan={2}>
                <table>
                  <thead>
                    <tr>
                      <td className='section'>Name</td>
                      <td className='section'>Location and Purpose</td>
                      <td className='section'>From</td>
                      <td className='section'>To</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                    </tr>
                    <tr>
                      <td className='section'>xyz</td>
                      <td className='section'>2/2/2222</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                    </tr>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                    </tr>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className='section'>
                Please list all arrests, criminal convictions, tickets, or citations you have received.  convicciones.
              </td>
              <td colSpan={2}>
                <table>
                  <thead>
                    <tr>
                      <td className='section'>Date</td>
                      <td className='section'>Location</td>
                      <td className='section'>Reason</td>
                      <td className='section'>Result</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                    </tr>
                    <tr>
                      <td className='section'>xyz</td>
                      <td className='section'>2/2/2222</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                    </tr>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                    </tr>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>India</td>
                      <td className='section'>Relation</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className='section'>
                Please list your last address outside of the US along with the dates you resided there.
              </td>
              <td colSpan={2}>
                <table>
                  <thead>
                    <tr>
                      <td className='section'>Date</td>
                      <td className='section'>Place</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>place 1</td>
                    </tr>
                    <tr>
                      <td className='section'>2/2/2222</td>
                      <td className='section'>place 2</td>
                    </tr>
                    <tr>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>place 3</td>
                    </tr>
                    <tr>
                      <td className='section'>2/2/2222</td>
                      <td className='section'>place 4</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className='section'>
                Please list all of your addresses where you have lived since entering the United States, along with the dates.
              </td>
              <td colSpan={2}>
                <table>
                  <thead>
                    <tr>
                      <td className='section'>Date</td>
                      <td className='section'>Place</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>place 1</td>
                    </tr>
                    <tr>
                      <td className='section'>2/2/2222</td>
                      <td className='section'>place 2</td>
                    </tr>
                    <tr>
                      <td className='section'>1/1/1111</td>
                      <td className='section'>place 3</td>
                    </tr>
                    <tr>
                      <td className='section'>2/2/2222</td>
                      <td className='section'>place 4</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className='section'>
                Please list all employment you have had for the last five years insde the United States along with the name of the employer, location, job title, and dates.
              </td>
              <td colSpan={2}>
                <table>
                  <thead>
                    <tr>
                      <td className='section'>Name</td>
                      <td className='section'>Location</td>
                      <td className='section'>Title</td>
                      <td className='section'>Date</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>India</td>
                      <td className='section'>Title 1</td>
                      <td className='section'>1/1/1111</td>
                    </tr>
                    <tr>
                      <td className='section'>xyz</td>
                      <td className='section'>India</td>
                      <td className='section'>Title 2</td>
                      <td className='section'>2/2/2222</td>
                    </tr>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>India</td>
                      <td className='section'>title 3</td>
                      <td className='section'>1/1/1111</td>
                    </tr>
                    <tr>
                      <td className='section'>Abc</td>
                      <td className='section'>India</td>
                      <td className='section'>tilte 4</td>
                      <td className='section'>1/1/1111</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            {/* Page 4 */}
            <tr>
              <td colSpan={3} className='section'>
                (1)	Have you ever been denied admission to the U.S.?
                <br />
                <u> {deniedAdmissionToUS ? deniedAdmissionToUS : 'NA'} </u>
                <br />
                {expDeniedAdmissionToUS && `Explain: ${expDeniedAdmissionToUS && expDeniedAdmissionToUS}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (2)	Have you ever been denied a visa to the U.S.? <br />
                <u> {deniedVisaToUS ? deniedVisaToUS : 'NA'} </u>
                <br />
                {expDeniedVisaToUS && `Explain: ${expDeniedVisaToUS && expDeniedVisaToUS}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (3) Have you ever worked in the U.S. without authorization? <br />
                <u> {workInUSwithoutAuthorization ? workInUSwithoutAuthorization : 'NA'} </u>
                <br />
                {expWorkInUSwithoutAuthorization && `Explain: ${expWorkInUSwithoutAuthorization && expWorkInUSwithoutAuthorization}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (4) Have you ever violated the terms or conditions of your nonimmigrant status?<br />
                <u> {violatTermOfNonimmigrantStatus ? violatTermOfNonimmigrantStatus : 'NA'} </u>
                <br />
                {expViolatTermOfNonimmigrantStatus && `Explain: ${expViolatTermOfNonimmigrantStatus && expViolatTermOfNonimmigrantStatus}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (5) Are you presently or have you ever been in removal, exclusion, rescission, or deportation proceedings?<br />
                <u> {presentlyRemovalExclusionProceed ? presentlyRemovalExclusionProceed : 'NA'} </u>
                <br />
                {expPresentlyRemovalExclusionProceed && `Explain: ${expPresentlyRemovalExclusionProceed && expPresentlyRemovalExclusionProceed}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (6) Have you ever been issued a final order of exclusion, deportation, or removal?<br />
                <u> {issueFinalOrderExclusionRemoval ? issueFinalOrderExclusionRemoval : 'NA'} </u>
                <br />
                {expIssueFinalOrderExclusionRemoval && `Explain: ${expIssueFinalOrderExclusionRemoval && expIssueFinalOrderExclusionRemoval}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (7) Have you ever held lawful permanent resident status which was later rescinded?<br />
                <u> {lawfulPermResidentStatuslatRescind ? lawfulPermResidentStatuslatRescind : 'NA'} </u>
                <br />
                {expLawfulPermResidentStatuslatRescind && `Explain: ${expLawfulPermResidentStatuslatRescind && expLawfulPermResidentStatuslatRescind}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (8) Have you ever been granted voluntary departure by an immigration officer or an immigration judge, but failed to depart within the allotted time?<br />
                <u> {voluntlyByImmigrationOfficerFailToDepart ? voluntlyByImmigrationOfficerFailToDepart : 'NA'} </u>
                <br />
                {expVoluntlyByImmigrationOfficerFailToDepart && `Explain: ${expVoluntlyByImmigrationOfficerFailToDepart && expVoluntlyByImmigrationOfficerFailToDepart}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (9) Have you ever applied for any kind of relief or protection from removal, exclusion, or deportation? <br />
                <u> {appliedForReliefFromRemovalDeportation ? appliedForReliefFromRemovalDeportation : 'NA'} </u>
                <br />
                {expAppliedForReliefFromRemovalDeportation && `Explain: ${expAppliedForReliefFromRemovalDeportation && expAppliedForReliefFromRemovalDeportation}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (10) Have you ever been a J nonimmigrant exchange visitor who was subject to the two-year foreign residence requirement? <br />
                <u> {jNonimmigrantVisitSubjectTwoYear ? jNonimmigrantVisitSubjectTwoYear : 'NA'} </u>
                <br />
                {expJNonimmigrantVisitSubjectTwoYear && `Explain: ${expJNonimmigrantVisitSubjectTwoYear && expJNonimmigrantVisitSubjectTwoYear}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (11) Have you complied with the foreign residence requirement?<br />
                <u> {compliedWithForeignResidReq ? compliedWithForeignResidReq : 'NA'}  </u>
                <br />
                {expCompliedWithForeignResidReq && `Explain: ${expCompliedWithForeignResidReq && expCompliedWithForeignResidReq}`}
              </td>
            </tr>
            {/* Page 5 */}
            <tr>
              <td colSpan={3} className='section'>
                (12) Have you been granted a waiver or has the Department of State issued a favorable waiver recommendation letter for you?<br />
                <u> {grantWaiverRecommendLetter ? grantWaiverRecommendLetter : 'NA'} </u>
                <br />
                {expGrantWaiverRecommendLetter && `Explain: ${expGrantWaiverRecommendLetter && expGrantWaiverRecommendLetter}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (13) Have you ever been arrested, cited, charged, or detained for any reason by any law enforcement official?<br />
                <u> {arrestedAnyReasonByLaw ? arrestedAnyReasonByLaw : 'NA'} </u>
                <br />
                {expArrestedAnyReasonByLaw && `Explain: ${expArrestedAnyReasonByLaw && expArrestedAnyReasonByLaw}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (14) Have you ever committed a crime of any kind (even if you were not arrested, cited, charged, or tried for that crime)? <br />
                <u> {committedACrimeOfAnyKind ? committedACrimeOfAnyKind : 'NA'} </u>
                <br />
                {expCommittedACrimeOfAnyKind && `Explain: ${expCommittedACrimeOfAnyKind && expCommittedACrimeOfAnyKind}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (15) Have you ever plead guilty to or been convicted of a crime or offense (even if the violation was subsequently expunged or sealed by a court, or if you were granted a pardon, amnesty, a rehabilitation decree, or other act of clemency? <br />
                <u> {convictedOfCrimeActOfClemency ? convictedOfCrimeActOfClemency : 'NA'} </u>
                <br />
                {expConvictedOfCrimeActOfClemency && `Explain: ${expConvictedOfCrimeActOfClemency && expConvictedOfCrimeActOfClemency}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (16) Have you ever been ordered punished by a judge or had conditions imposed on you that restrained your liberty (such as a prison sentence, suspended sentence, house arrest, parole, alternative sentencing, drug or alcohol treatment, rehabilitative programs or classes, probation, or community service)? <br />
                <u> {orderedPunishedByJudge ? orderedPunishedByJudge : 'NA'} </u>
                <br />
                {expOrderedPunishedByJudge && `Explain: ${expOrderedPunishedByJudge && expOrderedPunishedByJudge}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (17) Have you ever been a defendant or the accused in a criminal proceeding (including pre-trial diversion, deferred prosecution, deferred adjudication, or any withheld adjudication)? <br />
                <u> {defendInCriminalProceeding ? defendInCriminalProceeding : 'NA'} </u>
                <br />
                {expDefendInCriminalProceeding && `Explain: ${expDefendInCriminalProceeding && expDefendInCriminalProceeding}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (18) Have you ever violated (or attempted or conspired to violate) any controlled substance law or regulation of state, the United States, or a foreign country?<br />
                <u> {violatSubstanceLawForeigncountry ? violatSubstanceLawForeigncountry : 'NA'} </u>
                <br />
                {expViolatSubstanceLawForeigncountry && `Explain: ${expViolatSubstanceLawForeigncountry && expViolatSubstanceLawForeigncountry}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (19) Have you ever exercised immunity (diplomatic or otherwise) to avoid being prosecuted for a criminal offense in the United States?<br />
                <u> {exercisedImmunityOffenseInUS ? exercisedImmunityOffenseInUS : 'NA'} </u>
                <br />
                {expExercisedImmunityOffenseInUS && `Explain: ${expExercisedImmunityOffenseInUS && expExercisedImmunityOffenseInUS}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (20) Have you ever, while serving as a foreign government official, been responsible for or directly carried out violations of religious freedoms?<br />
                <u> {servingAsForeignGovernment ? servingAsForeignGovernment : 'NA'} </u>
                <br />
                {expServingAsForeignGovernment && `Explain: ${expServingAsForeignGovernment && expServingAsForeignGovernment}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (21) Have you ever induced by force, fraud, or coercion (or otherwise been involved in) the trafficking of persons for commercial sex acts?<br />
                <u> {forceTraffickingSexActs ? forceTraffickingSexActs : 'NA'} </u>
                <br />
                {expForceTraffickingSexActs && `Explain: ${expForceTraffickingSexActs && expForceTraffickingSexActs}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (22) Have you ever trafficked a person into involuntary servitude, peonage, debt bondage, or slavery? Trafficking includes recruiting, harboring, transporting, providing, or obtaining a person for labor or services through the use of force, fraud, or coercion.<br />
                <u> {traffickPersonCoercion ? traffickPersonCoercion : 'NA'} </u>
                <br />
                {expTraffickPersonCoercion && `Explain: ${expTraffickPersonCoercion && expTraffickPersonCoercion}`}
              </td>
            </tr>
            {/* Page 6 */}
            <tr>
              <td colSpan={3} className='section'>
                (23) Have you ever knowingly aided, abetted, assisted, conspired, or colluded with others in trafficking persons for commercial sex acts or involuntary servitude, peonage, debt bondage, or slavery?<br />
                <u> {knowinglyAidedSlavery ? knowinglyAidedSlavery : 'NA'} </u>
                <br />
                {expKnowinglyAidedSlavery && `Explain: ${expKnowinglyAidedSlavery && expKnowinglyAidedSlavery}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (24) Are you the spouse, son or daughter of a foreign national who engaged in the trafficking of persons and have received or obtained, within the last five years, any financial or other benefits from the illicit activity of your spouse or your parent, although you knew or reasonably should have known that this benefit resulted from the illicit activity of your spouse or parent?<br />
                <u> {spouseSonOfForeignNational ? spouseSonOfForeignNational : 'NA'} </u>
                <br />
                {expSpouseSonOfForeignNational && `Explain: ${expSpouseSonOfForeignNational && expSpouseSonOfForeignNational}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (25) Have you ever engaged in money laundering or have you ever knowingly aided, assisted, conspired, or colluded with others in money laundering or do you seek to enter the United States to engage in such activity?<br />
                <u> {engageInMoneyLaunderActivity ? engageInMoneyLaunderActivity : 'NA'} </u>
                <br />
                {expEngageInMoneyLaunderActivity && `Explain: ${expEngageInMoneyLaunderActivity && expEngageInMoneyLaunderActivity}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (26) Do you intend to engage in any activity that violates or evades any law relating to espionage (including spying) or sabotage in the United States?<br />
                <u> {intendActivityViolatesInUS ? intendActivityViolatesInUS : 'NA'} </u>
                <br />
                {expIntendActivityViolatesInUS && `Explain: ${expIntendActivityViolatesInUS && expIntendActivityViolatesInUS}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (27) Do you intend to engage in any activity in the United States that violates or evades any law prohibiting the export from the United States of goods, technology, or sensitive information? <br />
                <u> {engageInUSProhibitingExport ? engageInUSProhibitingExport : 'NA'} </u>
                <br />
                {expEngageInUSProhibitingExport && `Explain: ${expEngageInUSProhibitingExport && expEngageInUSProhibitingExport}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (28) Do you intend to engage in any activity whose purpose includes opposing, controlling, or overthrowing the U.S. Government by force, violence, or other unlawful means while in the United States? <br />
                <u> {intendEngageOpposeInUS ? intendEngageOpposeInUS : 'NA'} </u>
                <br />
                {expIntendEngageOpposeInUS && `Explain: ${expIntendEngageOpposeInUS && expIntendEngageOpposeInUS}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (29) Do you intend to engage in any activity that could endanger the welfare, safety, or security of the United States?<br />
                <u> {intendEngageEndangerInUS ? intendEngageEndangerInUS : 'NA'} </u>
                <br />
                {expIntendEngageEndangerInUS && `Explain: ${expIntendEngageEndangerInUS && expIntendEngageEndangerInUS}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (30) Do you intend to engage in any other unlawful activity?<br />
                <u> {engageInUnlawActivity ? engageInUnlawActivity : 'NA'} </u>
                <br />
                {expEngageInUnlawActivity && `Explain: ${expEngageInUnlawActivity && expEngageInUnlawActivity}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (31) Are you engaged in or, upon your entry into the United States, do you intend to engage in any activity that could have potentially serious adverse foreign policy consequences for the United States?<br />
                <u> {engagedInSeriousForeignInUS ? engagedInSeriousForeignInUS : 'NA'} </u>
                <br />
                {expEngagedInSeriousForeignInUS && `Explain: ${expEngagedInSeriousForeignInUS && expEngagedInSeriousForeignInUS}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (32) Committed, threatened to commit, attempted to commit, conspired to commit, incited, endorsed, advocated, planned, or prepared any of the following: hijacking, sabotage, kidnapping, political assassination, or use of a weapon or explosive to harm another individual or cause substantial damage to property?<br />
                <u> {commitThreatToCommit ? commitThreatToCommit : 'NA'} </u>
                <br />
                {expCommitThreatToCommit && `Explain: ${expCommitThreatToCommit && expCommitThreatToCommit}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (33) Have you ever received any type of military, paramilitary, or weapons training?<br />
                <u> {receivedAnyTypeMilitary ? receivedAnyTypeMilitary : 'NA'} </u>
                <br />
                {expReceivedAnyTypeMilitary && `Explain: ${expReceivedAnyTypeMilitary && expReceivedAnyTypeMilitary}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                (34) Are you the spouse or child of an individual who ever committed, threatened to commit, attempted to commit, conspired to commit, incited, endorsed, advocated, planned, or prepared any of the following: hijacking, sabotage, kidnapping, political assassination, or use of a weapon or explosive to harm another individual or cause substantial damage to property? <br />
                <u> {spouseCommitSubstantialDamage ? spouseCommitSubstantialDamage : 'NA'} </u>
                <br />
                {expSpouseCommitSubstantialDamage && `Explain: ${expSpouseCommitSubstantialDamage && expSpouseCommitSubstantialDamage}`}
              </td>
            </tr>
            <tr>
              <td colSpan={3} className='section'>
                35.	Have you EVER assisted or participated in selling, providing, or transporting weapons to any person who, to your knowledge, used them against another person? <br />
                <u> {transportingWeaponsToAnyPerson ? transportingWeaponsToAnyPerson : 'NA'} </u>
                <br />
                {expTransportingWeaponsToAnyPerson && `Explain: ${expTransportingWeaponsToAnyPerson && expTransportingWeaponsToAnyPerson}`}
              </td>
            </tr>

            {/* Page 7 */}
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
            {/* Page 8 */}
            <tr>
              <td className='section' colSpan={3}>
                Have you received public assistance in the United States from any source, including the U.S. Government or any state, county, city, or municipality (other than emergency medical treatment)?:
                <br />
                {haveYouReceivedPublicAssistance
                  ? haveYouReceivedPublicAssistance + " " +
                  expHaveYouReceivedPublicAssistance
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Are you likely to receive public assistance in the future in the United States from any source,including the U.S. Government or any state, county, city, or municipality (other than emergency medical treatment)?:
                <br />
                {areYouReceivePublicAssistance
                  ? areYouReceivePublicAssistance + " " +
                  expAreYouReceivePublicAssistance
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER failed or refused to attend or to remain in attendance at any removal proceeding filed against you on or after April 1, 1997?:
                <br />
                {removalProceedingFiledAgainstU
                  ? removalProceedingFiledAgainstU + " " +
                  expRemovalProceedingFiledAgainstU
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER submitted fraudulent or counterfeit documentation to any U.S. Government official to obtain or attempt to obtain any immigration benefit, including a visa or entry into the United States?:
                <br />
                {everSubmittedFraudulent
                  ? everSubmittedFraudulent + " " +
                  expEverSubmittedFraudulent
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER lied about, concealed, or misrepresented any information on an application or petition to obtain a visa, other documentation required for entry into the United States, admission to the United States, or any other kind of immigration benefit?:
                <br />
                {liedAboutMisrepresented
                  ? liedAboutMisrepresented + " " +
                  expLiedAboutMisrepresented
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER falsely claimed to be a U.S. citizen (in writing or any other way)?:
                <br />
                {falselyClaimedToBeUS
                  ? falselyClaimedToBeUS + " " +
                  expFalselyClaimedToBeUS
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER been a stowaway on a vessel or aircraft arriving in the United States?:
                <br />
                {beenAStowaway
                  ? beenAStowaway + " " +
                  expBeenAStowaway
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER knowingly encouraged, induced, assisted, abetted, or aided any foreign national to enter or to try to enter the United States illegally (alien smuggling)?:
                <br />
                {alienSmuggling
                  ? alienSmuggling + " " +
                  expAlienSmuggling
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Are you under a final order of civil penalty for violating INA section 274C for use of fraudulent documents?:
                <br />
                {fraudulentDocuments
                  ? fraudulentDocuments + " " +
                  expFraudulentDocuments
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER been excluded, deported, or removed from the United States or have you ever departed the United States on your own after having been ordered excluded, deported, or removed from the United States?:
                <br />
                {removedFromTheUS
                  ? removedFromTheUS + " " +
                  expRemovedFromTheUS
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER entered the United States without being inspected and admitted or paroled?:
                <br />
                {beingAdmittedOrParoled
                  ? beingAdmittedOrParoled + " " +
                  expBeingAdmittedOrParoled
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Since April 1, 1997, have you been unlawfully present in the United States For more than 180 days but less than a year, and then departed the United States?:
                <br />
                {beenUnlawfullyPresentInUS
                  ? beenUnlawfullyPresentInUS + " " +
                  expBeenUnlawfullyPresentInUS
                  : "NA"}
              </td>
            </tr>
            {/* Page 9 */}
            <tr>
              <td className='section' colSpan={3}>
                Since April 1, 1997, have you been unlawfully present in the United States For one year or more and then departed the United States?:
                <br />
                {beenUnlawfullyPresentYearInUS
                  ? beenUnlawfullyPresentYearInUS + " " +
                  expBeenUnlawfullyPresentYearInUS
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Since April 1, 1997, have you EVER reentered or attempted to reenter the United States without being inspected and admitted or paroled after Having been unlawfully present in the United States for more than one year in the aggregate?:
                <br />
                {reenteredInUSInAggregate
                  ? reenteredInUSInAggregate + " " +
                  expReenteredInUSInAggregate
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Since April 1, 1997, have you EVER reentered or attempted to reenter the United States without being inspected and admitted or paroled after Having been deported, excluded, or removed from the United States?:
                <br />
                {removedFromUSBeforeReentered
                  ? removedFromUSBeforeReentered + " " +
                  expRemovedFromUSBeforeReentered
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Do you plan to practice polygamy in the United States?:
                <br />
                {practicePolygamyInUS
                  ? practicePolygamyInUS + " " +
                  expPracticePolygamyInUS
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Are you accompanying another foreign national who requires your protection or guardianship but who is inadmissible after being certified by a medical officer as being helpless from sickness, physical or mental disability, or infancy, as described in INA section 232(c)?:
                <br />
                {iNASection232C
                  ? iNASection232C + " " +
                  expINASection232C
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER assisted in detaining, retaining, or withholding custody of a U.S. citizen child outside the United States from a U.S. citizen who has been granted custody of the child?:
                <br />
                {grantedCustodyOfChild
                  ? grantedCustodyOfChild + " " +
                  expGrantedCustodyOfChild
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER voted in violation of any Federal, state, or local constitutional provision, statute, ordinance, or regulation in the United States?:
                <br />
                {violationOfAnyFederal
                  ? violationOfAnyFederal + " " +
                  expViolationOfAnyFederal
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you EVER renounced U.S. citizenship to avoid being taxed by the United States?:
                <br />
                {renouncedUSCitizenship
                  ? renouncedUSCitizenship + " " +
                  expRenouncedUSCitizenship
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you ever Applied for exemption or discharge from training or service in the U.S. armed forces or in the U.S. National Security Training Corps on the ground that you are a foreign national?:
                <br />
                {nationalSecurityTrainingCorps
                  ? nationalSecurityTrainingCorps + " " +
                  expNationalSecurityTrainingCorps
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you ever Been relieved or discharged from such training or service on the ground that you are a foreign national?:
                <br />
                {dischargedFromSuchTraining
                  ? dischargedFromSuchTraining + " " +
                  expDischargedFromSuchTraining
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you ever Been convicted of desertion from the U.S. armed forces?:
                <br />
                {convictedOfDesertion
                  ? convictedOfDesertion + " " +
                  expConvictedOfDesertion
                  : "NA"}
              </td>
            </tr>
            <tr>
              <td className='section' colSpan={3}>
                Have you ever Have you EVER left or remained outside the United States to avoid or evade training or service in the U.S. armed forces in time of war or a period declared by the President to be a national emergency? if yes, what was your nationality or immigration status immediately before you left:
                <br />
                {leftOrRemainedOutsideTheUS
                  ? leftOrRemainedOutsideTheUS + " " +
                  expLeftOrRemainedOutsideTheUS
                  : "NA"}
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
