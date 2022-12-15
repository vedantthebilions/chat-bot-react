import React from "react";
import "./App.css";

function TableView(props) {   
  return (
    <div>
      <center>
        <h2>
          {props.state.clientType?.value} -{props.state.caseType?.value}
        </h2>
      </center>

      <center>
        <h2>
          {props.state.clientName?.value}
        </h2>
      </center>


      <div className="margin-left-5">
        <div class="container">
          <div class="section">
            Are you a New Client, Former Client, or Current client? &nbsp;&nbsp;
            <u>{props.state.clientType?.value}</u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            Case Type(Immigration, Criminal, Family, other): &nbsp;&nbsp;
            <u>{props.state.caseType?.value}</u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            Are you currently outside the US? yes/no, if so, where? &nbsp;&nbsp;
            <u>{props.state.inus?.value ? props.state.inus?.value : "NA"}</u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            Client Name: &nbsp;&nbsp;
            {props.state.clientName?.value
              ? props.state.clientName?.value
              : "NA"}
          </div>
          <div class="section">
            Date of birth:&nbsp;&nbsp;{" "}
            <u>{props.state.dob?.value ? props.state.dob?.value : "NA"}</u>
          </div>
          <div class="section">
            A File:&nbsp;&nbsp;{" "}
            <u>{props.state.afile?.value ? props.state.afile?.value : "NA"}</u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            Country of birth &nbsp;&nbsp;{" "}
            <u>
              {props.state.country?.value ? props.state.country?.value : "NA"}{" "}
            </u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            Street Address (within the US): &nbsp;&nbsp;{" "}
            <u>{props.state.address?.value}</u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            City: &nbsp;&nbsp;
            {props.state.city?.value ? props.state.city?.value : "NA"}
          </div>
          <div class="section">
            State:&nbsp;&nbsp;{" "}
            <u>{props.state.state?.value ? props.state.state?.value : "NA"}</u>
          </div>
          <div class="section">
            Zip:&nbsp;&nbsp;{" "}
            <u>{props.state.zip?.value ? props.state.zip?.value : "NA"}</u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            Phone: &nbsp;&nbsp; <u>{props.state.tele?.value}</u>
          </div>
          <div class="section">
            Current immigration status: &nbsp;&nbsp;{" "}
            <u>{props.state.status?.value}</u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            Briefly describe your legal problem or tell me why you need a
            lawyer: &nbsp;&nbsp; <br />
            <u>
              {props.state.problem?.value
                ? props.state.problem?.value
                : "Not Defined"}
            </u>
          </div>
        </div>
        <div class="container">
          <div class="section">
            1. Are you in removal proceedings now? &nbsp;&nbsp; <br />
            <ol type="a">
              <li>
                Upcoming Hearing date & Location:&nbsp;&nbsp;{" "}
                {props.state.dateLocation?.value
                  ? props.state.dateLocation?.value
                  : "NA"}
              </li>
              <li>
                Type of hearing: &nbsp;&nbsp; {props.state.hearingType?.value}
              </li>
              <li>
                Were you given immigration paperwork? &nbsp;&nbsp;{" "}
                {props.state.immigration?.value
                  ? props.state.immigration?.value
                  : "NA"}
              </li>
            </ol>
          </div>
        </div>
        <div class="container">
          <div class="section">
            2. Are you married? Yes/No, if yes, Immigration Status of spouse:
            <br />
            {props.state.marriedstatus?.value
              ? props.state.marriedstatus?.value
              : "NA"}
            &nbsp;&nbsp;
          </div>
        </div>
        <div className="container">
          <div class="section">
            spouse Name:&nbsp;&nbsp;{" "}
            <u>
              {props.state.spousename?.value
                ? props.state.spousename?.value
                : "NA"}
            </u>
          </div>
          <div class="section">
            spouse DOB:&nbsp;&nbsp;{" "}
            <u>
              {props.state.spousedob?.value
                ? props.state.spousedob?.value
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
                  {props.state.victim?.value ? props.state.victim?.value : "NA"}
                </u>{" "}
                &nbsp; Do you have a police report? Yes/no&nbsp;&nbsp;
                <u>{props.state.policereport?.value
                  ? props.state.policereport?.value
                  : "NA"}</u>
              </li>
              <li>
                Have you ever had contact with the police for any reason at all
                in the US?If yes describe why you had contact &nbsp;&nbsp;
                <u>{props.state.policecontact?.value
                  ? props.state.policecontact?.value
                  : "NA"}</u>
              </li>
              <li>
                Do you have any reason to fear going back to your country?
                &nbsp;&nbsp;{" "}
                <u>{props.state.fear?.value ? props.state.fear?.value : "NA"}</u>
              </li>
            </ol>
          </div>
        </div>
        <div className="container">
          <div class="section">
            6. Have you ever applied for any immigration benefit? (Examples:
                {" "}Permanent residency, asylum, amnesty, TPS, cancellation, suspension,
                {" "}Family Unity, DACA, visa petition, U visa, T visa, Special Immigrant
                {" "}Juvenile Status, or any other immigration benefit). If so, please
                {" "}tell me what type of benefit and when did you apply <br />
            <u>{props.state.applied?.value ? props.state.applied?.value : "NA"}</u>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableView;
