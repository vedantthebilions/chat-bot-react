import Review from "./Review";
export const steps = [
  {
    id: "1",
    message: "Hello, Welcome. Please help me with few answers",
    trigger: "2",
  },
  {
    id: "2",
    message: "Are you a New Client, Former Client, or Current client?",
    trigger: "end-message",
  },
  {
    id: "clientType",
    options: [
      {
        value: "New Client",
        label: "New Client",
        trigger: "4",
      },
      {
        value: "Former Client",
        label: "Former Client",
        trigger: "4",
      },
      {
        value: "Current Client",
        label: "Current Client",
        trigger: "4",
      },
    ],
  },
  {
    id: "4",
    message: "Case Type",
    trigger: "caseType",
  },
  {
    id: "caseType",
    options: [
      {
        value: "Immigration Case",
        label: "Immigration Case",
        trigger: "5",
      },
      {
        value: "Criminal Case",
        label: "Criminal Case",
        trigger: "5",
      },
      {
        value: "Family Case",
        label: "Family Case",
        trigger: "5",
      },
    ],
  },
  {
    id: "5",
    message: "Are you currently outside the US ?",
    trigger: "currentInUs",
  },
  {
    id: "currentInUs",
    options: [
      {
        value: "yes",
        label: "Yes",
        trigger: "6-i",
      },
      {
        value: "no",
        label: "No",
        trigger: "7-i",
      },
    ],
  },
  {
    id: "6-i",
    message: "Where are you in US",
    trigger: "usLocation",
  },
  {
    id: "usLocation",
    user: true,
    trigger: "7-i",
  },
  {
    id: "7-i",
    message: "Client Name",
    trigger: "clientName",
  },
  {
    id: "clientName",
    user: true,
    trigger: "8-i",
  },
  {
    id: "8-i",
    message: "Date of Birth",
    trigger: "clientDOB",
  },
  {
    id: "clientDOB",
    user: true,
    trigger: "9-i",
  },
  {
    id: "9-i",
    message: "A File",
    trigger: "aFile",
  },
  {
    id: "aFile",
    user: true,
    trigger: "10-i",
  },
  {
    id: "10-i",
    message: "Country of birth : ",
    trigger: "birthCountry",
  },
  {
    id: "birthCountry",
    user: true,
    trigger: "11-i",
  },
  {
    id: "11-i",
    message: "Street Address (within the US): ",
    trigger: "streetAddress",
  },
  {
    id: "streetAddress",
    user: true,
    trigger: "12-i",
  },
  {
    id: "12-i",
    message: "City: ",
    trigger: "city",
  },
  {
    id: "city",
    user: true,
    trigger: "13-i",
  },
  {
    id: "13-i",
    message: "State: ",
    trigger: "state",
  },
  {
    id: "state",
    user: true,
    trigger: "14-i",
  },
  {
    id: "14-i",
    message: "Zip: ",
    trigger: "zip",
  },
  {
    id: "zip",
    user: true,
    trigger: "15-i",
  },
  {
    id: "15-i",
    message: "Phone: ",
    trigger: "telephone",
  },
  {
    id: "telephone",
    user: true,
    trigger: "16-i",
  },
  {
    id: "16-i",
    message: "Current immigration status: ",
    trigger: "immigrationStatus",
  },
  {
    id: "immigrationStatus",
    options: [
      {
        value: "Recent Entry",
        label: "Recent Entry",
        trigger: "17-i",
      },
      {
        value: "Asylum Seeker",
        label: "Asylum Seeker",
        trigger: "17-i",
      },
      {
        value: "No Status",
        label: "No Status",
        trigger: "17-i",
      },
      { value: "F-1", label: "F-1", trigger: "17-i" },
      { value: "J-1", label: "J-1", trigger: "17-i" },
      { value: "USC", label: "USC", trigger: "17-i" },
      { value: "LPR", label: "LPR", trigger: "17-i" },
      { value: "DACA", label: "DACA", trigger: "17-i" },
      {
        value: "I don't Know",
        label: "I don't Know",
        trigger: "17-i",
      },
    ],
  },
  {
    id: "17-i",
    message:"Briefly describe your legal problem or tell me why you need a lawyer?",
    trigger: "problem",
  },
  {
    id: "problem",
    user: true,
    trigger: "18-i",
  },
  {
    id: "18-i",
    message: "Are you in removal proceedings now?",
    trigger: "18-1-i",
  },
  {
    id: "18-1-i",
    message: "a. Upcoming Hearing date (DD/MM/YYYY)",
    trigger: "dateOfHearing",
  },
  {
    id: "dateOfHearing",
    user: true,
    trigger: "18-2-i",
  },
  {
    id: "18-2-i",
    message: "What is the location of hearing?",
    trigger: "locationOfHearing",
  },
  {
    id: "locationOfHearing",
    user: true,
    trigger: "18-3-i",
  },
  {
    id: "18-3-i",
    message: "b.Type of hearing (MCH/IH/Don’t know): ",
    trigger: "typeOfHearing",
  },
  {
    id: "typeOfHearing",
    options: [
      {
        value: "MCH",
        label: "MCH",
        trigger: "18-4-i",
      },
      {
        value: "IH",
        label: "IH",
        trigger: "18-4-i",
      },
      {
        value: "Don't Know",
        label: "Don't Know",
        trigger: "18-4-i",
      },
    ],
  },
  {
    id: "18-4-i",
    message: "c. Were you given immigration paperwork?( Yes/No/Don’t know) ",
    trigger: "immigrationPaper",
  },
  {
    id: "immigrationPaper",
    options: [
      {
        value: "Yes",
        label: "Yes",
        trigger: "19-i",
      },
      {
        value: "No",
        label: "No",
        trigger: "19-i",
      },
      {
        value: "Don't Know",
        label: "Don't Know",
        trigger: "19-i",
      },
    ],
  },
  {
    id: "19-i",
    message: "2.Are you married? ",
    trigger: "maritialStatus",
  },
  {
    id: "maritialStatus",
    options: [
      {
        value: "Yes",
        label: "Yes",
        trigger: "19-1-i",
      },
      {
        value: "No",
        label: "No",
        trigger: "20-1-i",
      },
      {
        value: "Don't Know",
        label: "Don't Know",
        trigger: "20-1-i",
      },
    ],
  },
  {
    id: "19-1-i",
    message: "Immigration Status of spouse:",
    trigger: "spouseImmigration",
  },
  {
    id: "spouseImmigration",
    user: true,
    trigger: "19-2-i",
  },
  {
    id: "19-2-i",
    message: "Spouse Name: ",
    trigger: "spouseName",
  },
  {
    id: "spouseName",
    user: true,
    trigger: "19-3-i",
  },
  {
    id: "19-3-i",
    message: "Spouse DOB: ",
    trigger: "spouseDOB",
  },
  {
    id: "spouseDOB",
    user: true,
    trigger: "20-1-i",
  },
  {
    id: "20-1-i",
    message: "Have you ever been the victim of a crime?",
    trigger: "victimOfCrime",
  },
  {
    id: "victimOfCrime",
    options: [
      {
        value: "Yes",
        label: "Yes",
        trigger: "20-2-i",
      },
      {
        value: "No",
        label: "No",
        trigger: "21-i",
      },
      {
        value: "Don't Know",
        label: "Don't Know",
        trigger: "21-i",
      },
    ],
  },
  {
    id: "20-2-i",
    message: "Where were you a victim of crime?",
    trigger: "victimOfCrimeLocation",
  },{
    id: "victimOfCrimeLocation",
    user: true,
    trigger: "21-i",
  },{
    id: "21-i",
    message: "Do you have a police report? Yes/no",
    trigger: "policeReport",
  },
  {
    id: "policeReport",
    options: [
      {
        value: "Yes",
        label: "Yes",
        trigger: "22-i",
      },
      {
        value: "No",
        label: "No",
        trigger: "22-i",
      },
    ],
  },
  {
    id: "22-i",
    message:"Have you ever had contact with the police for any reason at all in the US?",
    trigger: "contactWithPolice",
  },{
    id: "contactWithPolice",
    options: [
      {
        value: "Yes",
        label: "Yes",
        trigger: "22-1-i",
      },
      {
        value: "No",
        label: "No",
        trigger: "23-i",
      },
    ],
  },{
    id: "22-1-i",
    message:"Describe why you had contact?",
    trigger: "contactReason",
  },
  {
    id: "contactReason",
    user: true,
    trigger: "23-i",
  },
  {
    id: "23-i",
    message:"Do you have any reason to fear going back to your country?",
    trigger: "fear",
  },{
    id: "fear",
    options: [
      {
        value: "Yes",
        label: "Yes",
        trigger: "23-1-i",
      },
      {
        value: "No",
        label: "No",
        trigger: "24-i",
      },
    ],
  },
  {
    id: "23-1-i",
    message:"Do you have any reason to fear going back to your country?",
    trigger: "fearReason",
  },{
    id: "fearReason",
    user: true,
    trigger: "24-i",
  },
  {
    id: "24-i",
    message:"Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply",
    trigger: "appiledImmigration",
  },
  {
    id: "appiledImmigration",
    user: true,
    trigger: "end-message",
  },
  {
    id: "end-message",
    message: "Thank you for connecting, someone from our end will connect you soon.",
    trigger: "end-chat",
  },
  {
    id: "end-chat",
    component: <Review />,
    end: true,
  },
];



{/* <div class="container">
<div class="section">
(1)  Are you a New Client, Former Client, or Current client? &nbsp;&nbsp;
  <u>{props.state.clientType?.value}</u>
</div>
</div>
<div class="container">
<div class="section">
(2)  Case Type(Immigration, Criminal, Family, other): &nbsp;&nbsp;
  <u>{props.state.caseType?.value ? props.state.caseType?.value : 'NA'}</u>
</div>
</div>
<div class="container">
<div class="section">
(3)  Are you currently outside the US? yes/no, if so, where? &nbsp;&nbsp;
  <u>
    {props.state.currentInUs?.value
      ? props.state.currentInUs?.value +
        " " +
        " in " +
        " " +
        props.state.usLocation?.value
      : "NA"}
  </u>
</div>
</div>
<div class="container">
<div class="section">
(4)  Client Name: &nbsp;&nbsp;
  {props.state.clientName?.value
    ? props.state.clientName?.value
    : "NA"}
</div>
<div class="section">
(5)  Date of birth:&nbsp;&nbsp;{" "}
  <u>
    {props.state.clientDOB?.value
      ? props.state.clientDOB?.value
      : "NA"}
  </u>
</div>
<div class="section">
(6)  A File:&nbsp;&nbsp;{" "}
  <u>{props.state.aFile?.value ? props.state.aFile?.value : "NA"}</u>
</div>
</div>
<div class="container">
<div class="section">
(7)  Country of birth &nbsp;&nbsp;{" "}
  <u>
    {props.state.birthCountry?.value
      ? props.state.birthCountry?.value
      : "NA"}{" "}
  </u>
</div>
</div>
<div class="container">
<div class="section">
(8)  Street Address (within the US): &nbsp;&nbsp;{" "}
  <u>{props.state.streetAddress?.value ? props.state.streetAddress?.value : 'NA'}</u>
</div>
</div>
<div class="container">
<div class="section">
(9)  City: &nbsp;&nbsp;
  {props.state.city?.value ? props.state.city?.value : "NA"}
</div>
<div class="section">
(10)  State:&nbsp;&nbsp;{" "}
  <u>{props.state.state?.value ? props.state.state?.value : "NA"}</u>
</div>
<div class="section">
(11)  Zip:&nbsp;&nbsp;{" "}
  <u>{props.state.zip?.value ? props.state.zip?.value : "NA"}</u>
</div>
</div>
<div class="container">
<div class="section">
(12)  Phone: &nbsp;&nbsp; <u>{props.state.telephone?.value ? props.state.telephone?.value : 'NA'}</u>
</div>
<div class="section">
(13)  Current immigration status: &nbsp;&nbsp;{" "}
  <u>{props.state.immigrationStatus?.value ? props.state.immigrationStatus?.value : 'NA'}</u>
</div>
</div>
<div class="container">
<div class="section">
 (14) Briefly describe your legal problem or tell me why you need a lawyer: &nbsp;&nbsp; <br />
  <u>
    {props.state.problem?.value
      ? props.state.problem?.value
      : "NA"}
  </u>
</div>
</div>
<div class="container">
<div class="section">
  15. Are you in removal proceedings now? &nbsp;&nbsp; <br />
  <ol type="a">
    <li>
     Upcoming Hearing date & Location:&nbsp;&nbsp;{" "}
      <u>{props.state.dateOfHearing?.value
        ? props.state.dateOfHearing?.value +
          " " +
          " at " +
          " " +
          props.state.locationOfHearing?.value
        : "NA"}</u>
    </li>
    <li>
      Type of hearing: &nbsp;&nbsp;<u> {props.state.typeOfHearing?.value}</u>
    </li>
    <li>
      Were you given immigration paperwork? &nbsp;&nbsp;{" "}
      <u>{props.state.immigrationPaper?.value
        ? props.state.immigrationPaper?.value
        : "NA"}</u>
    </li>
  </ol>
</div>
</div>
<div class="container">
<div class="section">
  (16). Are you married? Yes/No, if yes, Immigration Status of spouse:
  <br />
  {props.state.maritialStatus?.value
    ? props.state.maritialStatus?.value +
      props.state.spouseImmigration?.value
    : "NA"}
  &nbsp;&nbsp;
</div>
</div>
<div className="container">
<div class="section">
 (16 - a) spouse Name:&nbsp;&nbsp;{" "}
  <u>
    {props.state.spouseName?.value
      ? props.state.spouseName?.value
      : "NA"}
  </u>
</div>
<div class="section">
(16 - b) spouse DOB:&nbsp;&nbsp;{" "}
  <u>
    {props.state.spouseDOB?.value
      ? props.state.spouseDOB?.value
      : "NA"}
  </u>
</div>
</div>
<div className="container">
<div class="section">
  <ol type="1">
    <li>
      Have you ever been the victim of a crime? Yes/No Where were you
      a victim of crime?&nbsp;&nbsp;
      <u>
        {props.state.victimOfCrime?.value ? props.state.victimOfCrime?.value + ' ' + props.state.victimOfCrimeLocation?.value : "NA"}
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
      Have you ever had contact with the police for any reason at all
      in the US?If yes describe why you had contact &nbsp;&nbsp;
      <u>
        {props.state.contactWithPolice?.value
          ? props.state.contactWithPolice?.value + ' ' +props.state.contactReason?.value
          : "NA"}
      </u>
    </li>
    <li>
      Do you have any reason to fear going back to your country?
      &nbsp;&nbsp;{" "}
      <u>
        {props.state.fear?.value ? props.state.fear?.value + ' ' + props.state.fearReason?.value : "NA"}
      </u>
    </li>
  </ol>
</div>
</div>
<div className="container">
<div class="section">
  (17) Have you ever applied for any immigration benefit? (Examples:
  Permanent residency, asylum, amnesty, TPS, cancellation, suspension,
  Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant
  Juvenile Status, or any other immigration benefit). If so, please
  tell me what type of benefit and when did you apply <br />
  <u>
    {props.state.appiledImmigration?.value ? props.state.appiledImmigration?.value : "NA"}
  </u>
</div>
</div> */}