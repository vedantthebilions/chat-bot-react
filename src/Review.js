import React, { Component } from "react";
import PropTypes from "prop-types";
import Pdf from "react-to-pdf";
import { pdfFromReact } from "generate-pdf-from-react-html";
import TableView from "./TableView";
import "./App.css";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const {
      clientType,
      caseType,
      currentInUs,
      usLocation,
      clientName,
      clientDOB,
      aFile,
      birthCountry,
      streetAddress,
      city,
      state,
      zip,
      telephone,
      immigrationStatus,
      problem,
      dateOfHearing,
      locationOfHearing,
      typeOfHearing,
      immigrationPaper,
      maritialStatus,
      spouseImmigration,
      spouseName,
      spouseDOB,
      victimOfCrime,
      victimOfCrimeLocation,
      policeReport,
      contactWithPolice,
      contactReason,
      fear,
      fearReason,
      appiledImmigration,
    } = steps;

    this.setState({
      clientType,
      caseType,
      currentInUs,
      usLocation,
      clientName,
      clientDOB,
      aFile,
      birthCountry,
      streetAddress,
      city,
      state,
      zip,
      telephone,
      immigrationStatus,
      problem,
      dateOfHearing,
      locationOfHearing,
      typeOfHearing,
      immigrationPaper,
      maritialStatus,
      spouseImmigration,
      spouseName,
      spouseDOB,
      victimOfCrime,
      victimOfCrimeLocation,
      policeReport,
      contactWithPolice,
      contactReason,
      fear,
      fearReason,
      appiledImmigration,
    });
  }

  activateLasers() {
    console.log("clicked");
  }
  render() {
    const ref = React.createRef();
    console.log(this.state);
    return (
      <>
        {/* <div ref={ref}>
          <TableView state={this.state} />
        </div>
        <div style={{ width: "100%" }}>
          <div className="btn-div">
            <Pdf targetRef={ref} filename="File_Legal.pdf">
              {({ toPdf }) => (
                <button onClick={toPdf} class="btn">
                  Download Pdf
                </button>
              )}
            </Pdf>
          </div>
        </div> */}
        <div className="d-block">
          <div className="element-to-print">
            <TableView state={this.state} />
          </div>
          <div className="btn-div">
            <button
              class="btn"
              onClick={
                () =>
                  pdfFromReact(".element-to-print", "legal_form", "p", true, false) //resize true
              }
            >
              Download as Pdf
            </button>
          </div>
        </div>
      </>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
  // botAvatar: PropTypes.string
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
