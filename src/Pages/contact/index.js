import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../home';
import apiKey from './emailKey';
import emailjs from 'emailjs-com';

const Contact = () => {
  const history = useHistory();
  const form = useRef();
  console.log(form);
  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        apiKey.SERVICE_ID,
        apiKey.TEMPLATE_ID,
        form.current,
        apiKey.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            history.push('/');
          }
        },
        (error) => {
          console.log('Error', error);
          alert('An error occurred, Please try again', error);
        }
      );
    form.current = '';
  };
  return (
    <Home>
      <ContactContainer>
        <div className="header-container">
          <h1>Contact</h1>
          <p className="header-paragraph">
            Feel free to contact me in case of project or work suggestions
          </p>
        </div>
        <div className="message-form-container">
          <form className="message-form" ref={form} onSubmit={formSubmit}>
            <FormContainer>
              <div className="message-left-container">
                <Label>
                  <input
                    placeholder="Your name please"
                    type="text"
                    name="name"
                    required
                  />
                </Label>
                <Label>
                  <input
                    type="email"
                    size="30"
                    name="email"
                    placeholder="Your email please"
                    required
                  />
                </Label>
                <Label>
                  <input
                    type="number"
                    name="number"
                    placeholder="Your phone number please"
                    required
                  />
                </Label>
              </div>
              <div className="message-right-container">
                <Label>
                  <textarea
                    style={{ width: '100%', height: '180px' }}
                    type="text"
                    name="message"
                    placeholder="Enter your message here"
                    required
                  />
                </Label>
              </div>
            </FormContainer>
            <div className="button-container">
              <button onSubmit={(e) => formSubmit(e)}>Send</button>
            </div>
          </form>
        </div>
      </ContactContainer>
    </Home>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-bottom: 30px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  .header-container {
    padding: 15px;
    text-align: center;
    color: #003249;
    font-size: 20px;
    font-family: sans-serif;
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
    background-color: rgba(108, 206, 168, 0.26);
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
          background-color: white;
          color: #003249;
          border: none;
          outline: none;
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
          background-color: white;
          color: #003249;
          font-style: oblique;
          border: none;
          outline: none;
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
        width: 14%;
        padding: 10px;
        font-family: Arial;
        color: white;
        font-size: 20px;
        cursor: pointer;
        border: none;
        background: #003249;
        @media (max-width: 1000px) {
          width: 30%;
        }
        @media (max-width: 700px) {
          width: 30%;
        }
        @media (max-width: 400px) {
          width: 30%;
        }
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
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
  }
`;
