import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import Review from "./Review";
import "./App.css";

class App extends Component {
  render() {
    const theme = {
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#EF6C00',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#EF6C00',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };
    
    return (
      <div id="Main_Page">
        <ChatBot
          steps={[
            {
              id: "1",
              message:
                "Are you a New Client, Former Client, or Current client?",
              trigger: "clientType",
            },
            {
              id: "clientType",
              asmessage:
                "Are you a New Client, Former Client, or Current client?",
              options: [
                {
                  value: "New Client",
                  label: "New Client",
                  trigger: "getcasetype",
                },
                {
                  value: "Former Client",
                  label: "Former Client",
                  trigger: "getcasetype",
                },
                {
                  value: "Current Client",
                  label: "Current Client",
                  trigger: "getcasetype",
                },
              ],
            },
            {
              id: "getcasetype",
              message: "Case Type",
              trigger: "caseType",
            },
            {
              id: "caseType",
              asmessage: "Case Type :",
              options: [
                {
                  value: "Immigration Case",
                  label: "Immigration Case",
                  trigger: "getinus",
                },
                {
                  value: "Criminal Case",
                  label: "Criminal Case",
                  trigger: "getinus",
                },
                {
                  value: "Family Case",
                  label: "Family Case",
                  trigger: "getinus",
                },
              ],
            },
            {
              id: "getinus",
              message:
                "Are you currently outside the US ? yes/no, if so, where?",
              trigger: "inus",
            },
            {
              id: "inus",
              user: true,
              trigger: "getclientname",
            },
            {
              id: "getclientname",
              message: "Client Name : ",
              trigger: "clientName",
            },
            {
              id: "clientName",
              user: true,
              trigger: "getdob",
            },
            {
              id: "getdob",
              message: "Date of Birth : ",
              trigger: "dob",
            },
            {
              id: "dob",
              user: true,
              trigger: "getafile",
            },
            {
              id: "getafile",
              message: "A File : ",
              trigger: "afile",
            },
            {
              id: "afile",
              user: true,
              trigger: "getcountry",
            },
            {
              id: "getcountry",
              message: "Country of birth : ",
              trigger: "country",
            },
            {
              id: "country",
              user: true,
              trigger: "getAddress",
            },
            {
              id: "getAddress",
              message: "Street Address (within the US): ",
              trigger: "address",
            },
            {
              id: "address",
              user: true,
              trigger: "getCity",
            },
            {
              id: "getCity",
              message: "City: ",
              trigger: "city",
            },
            {
              id: "city",
              user: true,
              trigger: "getState",
            },
            {
              id: "getState",
              message: "State: ",
              trigger: "state",
            },
            {
              id: "state",
              user: true,
              trigger: "getZip",
            },
            {
              id: "getZip",
              message: "Zip: ",
              trigger: "zip",
            },
            {
              id: "zip",
              user: true,
              trigger: "gettele",
            },
            {
              id: "gettele",
              message: "Phone: ",
              trigger: "tele",
            },
            {
              id: "tele",
              user: true,
              trigger: "getStatus",
            },
            {
              id: "getStatus",
              message: "Current immigration status: ",
              trigger: "status",
            },
            {
              id: "status",
              asmessage: "status:",
              options: [
                {
                  value: "Recent Entry",
                  label: "Recent Entry",
                  trigger: "getproblem",
                },
                {
                  value: "Asylum Seeker",
                  label: "Asylum Seeker",
                  trigger: "getproblem",
                },
                {
                  value: "No Status",
                  label: "No Status",
                  trigger: "getproblem",
                },
                { value: "F-1", label: "F-1", trigger: "getproblem" },
                { value: "J-1", label: "J-1", trigger: "getproblem" },
                { value: "USC", label: "USC", trigger: "getproblem" },
                { value: "LPR", label: "LPR", trigger: "getproblem" },
                { value: "DACA", label: "DACA", trigger: "getproblem" },
                {
                  value: "I don't Know",
                  label: "I don't Know",
                  trigger: "getproblem",
                },
              ],
            },
            {
              id: "getproblem",
              message:
                "Briefly describe your legal problem or tell me why you need a lawyer?  ",
              trigger: "problem",
            },
            {
              id: "problem",
              user: true,
              trigger: "getremovalpro",
            },
            {
              id: "getremovalpro",
              message: "Are you in removal proceedings now?",
              trigger: "getdatelocation",
            },
            {
              id: "getdatelocation",
              message: "a.	Upcoming Hearing date & Location : ",
              trigger: "dateLocation",
            },
            {
              id: "dateLocation",
              user: true,
              trigger: "gettypeofhearing",
            },
            {
              id: "gettypeofhearing",
              message: "b.	Type of hearing (MCH/IH/Don’t know): ",
              trigger: "hearingType",
            },
            {
              id: "hearingType",
              asmessage: "status:",
              options: [
                {
                  value: "MCH",
                  label: "MCH",
                  trigger: "getimmigration",
                },
                {
                  value: "IH",
                  label: "IH",
                  trigger: "getimmigration",
                },
                {
                  value: "Don't Know",
                  label: "Don't Know",
                  trigger: "getimmigration",
                },
              ],
            },
            {
              id: "getimmigration",
              message:
                "c. Were you given immigration paperwork?( Yes/No/Don’t know) ",
              trigger: "immigration",
            },
            {
              id: "immigration",
              asmessage: "status:",
              options: [
                {
                  value: "Yes",
                  label: "Yes",
                  trigger: "getMaritialStatus",
                },
                {
                  value: "No",
                  label: "No",
                  trigger: "getMaritialStatus",
                },
                {
                  value: "Don't Know",
                  label: "Don't Know",
                  trigger: "getMaritialStatus",
                },
              ],
            },
            {
              id: "getMaritialStatus",
              message:
                "Briefly describe your legal problem or tell me why you need a lawyer?  ",
              trigger: "marriedstatus",
            },
            {
              id: "marriedstatus",
              user: true,
              trigger: "getspousename",
            },
            {
              id: "getspousename",
              message: "Spouse Name: ",
              trigger: "spousename",
            },
            {
              id: "spousename",
              user: true,
              trigger: "getspousedob",
            },
            {
              id: "getspousedob",
              message: "Spouse DOB: ",
              trigger: "spousedob",
            },
            {
              id: "spousedob",
              user: true,
              trigger: "getvictim",
            },
            {
              id: "getvictim",
              message: "Have you ever been the victim of a crime? Yes/No Where were you a victim of crime?  ",
              trigger: "victim",
            },
            {
              id: "victim",
              user: true,
              trigger: "getpolicereport",
            },
            {
              id: "getpolicereport",
              message:
                "Do you have a police report? Yes/no",
              trigger: "policereport",
            },
            {
              id: "policereport",
              asmessage: "Do you have a police report? Yes/no:",
              options: [
                {
                  value: "Yes",
                  label: "Yes",
                  trigger: "getpolicecontact",
                },
                {
                  value: "No",
                  label: "No",
                  trigger: "getpolicecontact",
                }
              ],
            },{
              id: "getpolicecontact",
              message: "Have you ever had contact with the police for any reason at all in the US?If yes describe why you had contact",
              trigger: "policecontact",
            },
            {
              id: "policecontact",
              user: true,
              trigger: "getfear",
            },
            {
              id: "getfear",
              message: "Do you have any reason to fear going back to your country?What do you fear and why",
              trigger: "fear",
            },
            {
              id: "fear",
              user: true,
              trigger: "getapplied",
            },
            {
              id: "getapplied",
              message: "Have you ever applied for any immigration benefit? (Examples: Permanent residency, asylum, amnesty, TPS, cancellation, suspension, Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant Juvenile Status, or any other immigration benefit). If so, please tell me what type of benefit and when did you apply",
              trigger: "applied",
            },
            {
              id: "applied",
              user: true,
              trigger: "end-message",
            },
            {
              id: "end-message",
              message: "Thanks! Your data was submitted successfully!",
              trigger: "end-chat",
            },
            {
              id: "end-chat",
              component: <Review />,
              end: true,
            },
          ]}
        />
      </div>
    );
  }
}
export default App;
