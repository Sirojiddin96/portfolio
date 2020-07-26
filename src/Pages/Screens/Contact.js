import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(data);

    axios
      .post("/api/v1", data)
      .then((res) => {
        this.setState({ sent: true, date: {} }, this.resetForm());
      })
      .catch((error) => {
        console.log("Message not sent", error);
      });
  };
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };
  render() {
    return (
      <div className="contact">
        <div className="header-container">
          <h1>Contact</h1>
          <p className="header-paragraph">
            Feel free to contact me in case of project or work suggestions
          </p>
        </div>
        <div className="message-form-container">
          <form className="message-form" onSubmit={(e) => this.formSubmit(e)}>
            <FormContainer>
              <div className="message-left-container">
                <Label>
                  <input
                    placeholder="Your name please"
                    type="name"
                    ref="name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    // value={this.state.fields["name"]}
                  />
                  {/* <span style={{ color: "red", fontSize: "20px" }}>
                    {this.state.errors["name"]}
                  </span> */}
                </Label>
                <Label>
                  <input
                    type="email"
                    ref="email"
                    size="30"
                    placeholder="Your email please"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    // value={this.state.fields["email"]}
                  />
                  {/* <span style={{ color: "red", fontSize: "14px" }}>
                    {this.state.errors["email"]}
                  </span> */}
                </Label>
                <Label>
                  <input
                    type="number"
                    ref="number"
                    placeholder="Your phone number please"
                    onChange={(e) => this.setState({ number: e.target.value })}
                    // value={this.state.fields["number"]}
                  />
                  {/* <span style={{ color: "red", fontSize: "14px" }}>
                    {this.state.errors["number"]}
                  </span> */}
                </Label>
              </div>
              <div className="message-right-container">
                <Label>
                  <textarea
                    style={{ width: "100%", height: "180px" }}
                    type="text"
                    ref="ne"
                    // onChange={this.handleChange.bind(this, "name")}
                    // value={this.state.fields["name"]}
                  />
                  {/* <span style={{ color: "red", fontSize: "14px" }}></span> */}
                </Label>
              </div>
            </FormContainer>
            <div className="button-container">
              <button onSubmit={(e) => this.formSubmit(e)}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const Label = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
