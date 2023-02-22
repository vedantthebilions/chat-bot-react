import React, { Component } from "react";
import PropTypes from "prop-types";
import Pdf from "react-to-pdf";
import { pdfFromReact } from "generate-pdf-from-react-html";
import { PDFExport } from '@progress/kendo-react-pdf';
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
    // console.log('props are : ', this.props);
    // const { steps } = this.props;
    
    const { steps_2 } = this.props;
    this.setState(steps_2);

    /* const {
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
    } = steps; */
    
    /* const {
      getInUSA,
      clientDob,
      afile,
      countryOfBirth,
      streetAddress,
      city,
      zip,
      phone,
      immigrationStatus,
      legalProblem,
      hearingDate,
      hearingLocation,
      hearingType,
      immigrationPaperwork,
      marriedStatus,
      spouseName,
      spouseDOB,
      crimeLocation,
      policeContact,
      contactReason,
      fearStatus,
      benefitStatus,
    } = steps_2;

    this.setState({

      getInUSA,
      clientDob,
      afile,
      countryOfBirth,
      streetAddress,
      city,
      zip,
      phone,
      immigrationStatus,
      legalProblem,
      hearingDate,
      hearingLocation,
      hearingType,
      immigrationPaperwork,
      marriedStatus,
      spouseName,
      spouseDOB,
      crimeLocation,
      policeContact,
      contactReason,
      fearStatus,
      benefitStatus,
      
    }); */
  }

  activateLasers() {
    // console.log("clicked");
  }
  render() {
    const ref = React.createRef();
    // console.log('in review : ', this.state);
    const pdfExportComponent = React.createRef(null);
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
          {/* <div className="element-to-print">
            <TableView state={this.state} />
          </div> */}
          <PDFExport paperSize="A4" margin="0.5cm" ref={pdfExportComponent}>
            <TableView state={this.state} />
          </PDFExport>
          <div className="btn-div">
            <button
              class="btn"
              /* onClick={
                () =>
                  pdfFromReact(
                    ".element-to-print",
                    "legal_form",
                    "p",
                    true,
                    false
                  ) //resize true
              } */
              onClick={() => {
                if (pdfExportComponent.current) {
                  pdfExportComponent.current.save();
                }
              }}
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
  steps_2: PropTypes.object,
  // botAvatar: PropTypes.string
};

Review.defaultProps = {
  steps_2: undefined,
};

export default Review;
