import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { device } from "../../config/device";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    contactNumber: "",
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
      contactNumber: this.state.contactNumber,
    };
    console.log(data);

    axios
      .post("/contact", data)
      .then((data) => {
        this.setState({ sent: true }, data, this.resetForm());
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
      contactNumber: "",
      buttonText: "Message Sent",
    });
  };
  render() {
    return (
      <ContactContainer className="contact">
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
                    required
                    value={this.state.name}
                  />
                </Label>
                <Label>
                  <input
                    type="email"
                    ref="email"
                    size="30"
                    placeholder="Your email please"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    required
                    value={this.state.email}
                  />
                </Label>
                <Label>
                  <input
                    type="number"
                    ref="number"
                    placeholder="Your phone number please"
                    onChange={(e) =>
                      this.setState({ contactNumber: e.target.value })
                    }
                    required
                    value={this.state.contactNumber}
                  />
                </Label>
              </div>
              <div className="message-right-container">
                <Label>
                  <textarea
                    style={{ width: "100%", height: "180px" }}
                    type="text"
                    ref="text"
                    placeholder="Enter your message here"
                    onChange={(e) => this.setState({ message: e.target.value })}
                    required
                    value={this.state.message}
                  />
                </Label>
              </div>
            </FormContainer>
            <div className="button-container">
              <button onSubmit={(e) => this.formSubmit(e)}>
                {" "}
                {this.state.buttonText}
              </button>
            </div>
          </form>
        </div>
      </ContactContainer>
    );
  }
}

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #92a8d1;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  .header-container {
    padding: 15px;
    text-align: center;
    color: white;
    font-size: 20px;
    font-family: Arial;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 15px;
    }
  }
  .message-form-container {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding: 30px;
    .message-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding-top: 30px;
      @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
      }
      .message-left-container {
        width: 45%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 768px) {
          width: 100%;
          flex-direction: column;
          margin-bottom: 15px;
        }
        input {
          height: 25px;
          width: 80%;
          padding: 10px;
          font-size: 17px;
          font-style: oblique;
          font-weight: 300;
          background-color: #333333;
          color: white;
          @media (max-width: 768px) {
            width: 100%;
            flex-direction: row;
          }
        }
      }
      .message-right-container {
        width: 45%;
        display: flex;
        height: 200px;
        flex-direction: column;
        @media (max-width: 768px) {
          width: 100%;
          flex-direction: row;
        }
        textarea {
          padding: 10px;
          font-size: 17px;
          font-weight: 300;
          background-color: #333333;
          color: white;
          font-style: oblique;
        }
      }
    }
    .button-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      background-color: white-space;
      button {
        padding: 10px;
        font-family: Arial;
        color: black;
        font-size: 20px;
        cursor: pointer;
      }
      button:hover {
        background-color: #92a8d1;
        color: white;
        border: 1px solid gray;
      }
    }
  }
`;
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
  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
  }
`;
