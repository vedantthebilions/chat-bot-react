import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import Pdf from "react-to-pdf";
import TableView from "./TableView";
import './App.css'
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
      inus,
      clientName,
      dob,
      afile,
      country,
      address,
      city,
      state,
      zip,
      tele,
      status,
      problem,
      removalpro,
      dateLocation,
      hearingType,
    } = steps;

    this.setState({
      clientType,
      caseType,
      inus,
      clientName,
      dob,
      afile,
      country,
      address,
      city,
      state,
      zip,
      tele,
      status,
      problem,
      removalpro,
      dateLocation,
      hearingType,
    });
  }

  activateLasers() {
    console.log("clicked");
  }
  render() {
    const {
      clientType,
      caseType,
      inus,
      clientName,
      dob,
      afile,
      country,
      address,
      city,
      state,
      zip,
      tele,
      status,
      problem,
      removalpro,
      dateLocation,
      hearingType,
    } = this.state;

    const ref = React.createRef();

    return (
      <div style={{ width: "100%" }}>
        <div ref={ref}>
          <TableView state={this.state} />
          {/* <table>
            <tbody>
              <tr>
                <td>First Name:</td>
                <td>{name.value}</td>
              </tr>
              <tr>
                <td>Middle Name:</td>
                <td>{middleName.value}</td>
              </tr> */}
          {/* <tr>
                <td>Last Name:</td>
                <td>{lastname.value}</td>
              </tr> */}
          {/* <tr>
                <td>othername Name</td>
                <td>{othername.value}</td>
              </tr>
              <tr>
                <td>Home address</td>
                <td>{address.value}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{city.value}</td>
              </tr>
              <tr>
                <td>Zip</td>
                <td>{zip.value}</td>
              </tr>
              <tr>
                <td>Care of: Attorney or Friend</td>
                <td>{careof.value}</td>
              </tr>
              <tr>
                <td>Home Telephone</td>
                <td>{tele.value}</td>
              </tr>
              <tr>
                <td>Safe Telephone</td>
                <td>{safetele.value}</td>
              </tr>
              <tr>
                <td>Email </td>
                <td>{email.value}</td>
              </tr>
              <tr>
                <td>Email </td>
                <td>{email.value}</td>
              </tr> */}
          {/* </tbody>
          </table> */}
        </div>
        <div className="btn-div">
        <Pdf targetRef={ref} filename="File_Legal.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf} class="btn">
                Download Pdf
              </button>
            )}
          </Pdf>
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
