import React from "react";
import "./App.css";
import Contreras from "./image/logo_doc_black.jpg";

function TableView(props) {
  console.log(props)
  return (
    <div>
      <div class="row">
        <div class="logo-row">
          <img src={Contreras} alt="Contreraslogo" class="logo" />
        </div>
      </div>
      
      <center>
        <h4>
          {props.state.clientType?.value} {props.state.clientName?.value}{" "}
          {props.state.caseType?.value}
        </h4>
      </center>

      <center>
        <h4>{props.state.clientName?.value}</h4>
      </center>

      {/* <div className="margin-2">
        <table>
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
        </table>
      </div> */}
    </div>
  );
}

export default TableView;
