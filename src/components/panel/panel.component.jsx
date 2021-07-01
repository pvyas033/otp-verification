import React, { Component } from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./panel.styles.scss";

class ProcessPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNumber: "",
      otp: "",
      txnId: "",
      otpGenerated: false,
    };
  }

  generateOTP = (event) => {
    event.preventDefault();

    this.setState({
      mobileNumber: "",
      otpGenerated: true,
    });
  };

  verifyOTP = (event) => {
    alert("OTP VERIFIED");
    event.preventDefault();
    this.setState({
      mobileNumber: "",
      otp: "",
      otpGenerated: false,
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="panel">
        <h2>Book your slot</h2>
        <span>Verify with your mobile number</span>
        {!this.state.otpGenerated ? (
          <form onSubmit={this.generateOTP}>
            <FormInput
              label="Mobile Number"
              name="mobileNumber"
              type="text"
              value={this.state.mobileNumber}
              handleChange={this.handleChange}
              required
            />
            <div className="buttons">
              <CustomButton type="submit">Generate OTP</CustomButton>
            </div>
          </form>
        ) : (
          <form onSubmit={this.verifyOTP}>
            <FormInput
              label="OTP"
              name="otp"
              type="text"
              value={this.state.otp}
              handleChange={this.handleChange}
              required
            />
            <div className="buttons">
              <CustomButton type="submit">Verify</CustomButton>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default ProcessPanel;
