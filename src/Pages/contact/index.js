import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import apiKey from './emailKey';
import emailjs from 'emailjs-com';
import MainScreen from '../../layout/MainScreen';

const Contact = () => {
  const history = useHistory();
  const form = useRef();
  const formSubmit = (e) => {
    console.log(form)
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
    <MainScreen>
      <ContactContainer>
        <form className="message-form" ref={form} onSubmit={formSubmit}>
          <FormContainer>
            <div className="message-left-container">
              <div className='input-box'>
                <span>Name</span>
                <Label>
                  <input
                    placeholder="Your name please"
                    type="text"
                    name="name"
                    required
                  />
                </Label>
              </div>
              <div className='input-box'>
                <span>Email</span>
                <Label>
                  <input
                    type="email"
                    size="30"
                    name="email"
                    placeholder="Your email please"
                    required
                  />
                </Label>
              </div>
            </div>
            <div className="message-right-container">
              <span>Message</span>
              <Label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Enter your message here"
                  required
                />
              </Label>
               <button onSubmit={(e) => formSubmit(e)}>Send</button>            
            </div>
          </FormContainer>
        </form>
      </ContactContainer>
    </MainScreen>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 100%;
  height: calc(100%-150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #041F31;
  padding-bottom: 30px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
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
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        @media (max-width: 768px) {
          width: 100%;
          flex-direction: column;
          margin-bottom: 15px;
        }
        .input-box{
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          span{
            color: #BDEBEA;
            font-size: 1.4rem;
            font-family: 'Montserrat';
          }
          input {
            width: 100%;
            font-size: 1.4rem;
            font-weight: 600;
            background-color: transparent;
            color: #919B9B;
            border: none;
            outline: none;
            font-family: 'Montserrat';
            @media (max-width: 768px) {
              width: 100%;
              flex-direction: row;
            }
          }
      }
      }
      .message-right-container {
        width: 45%;
        display: flex;
        flex-direction: column;
        span{
            color: #BDEBEA;
            font-size: 1.4rem;
            font-family: 'Montserrat';
            margin-bottom: 1rem;
          }
        @media (max-width: 768px) {
          width: 100%;
          flex-direction: row;
        }
        textarea {
          width: 100%;
          height: 10rem;
          padding: 10px;
          font-size: 17px;
          font-weight: 600;
          background-color: transparent;
          color: #fff;
          font-family: 'Montserrat';
          border: none;
          outline: none;
        }
        
          button {
            width: 100%;
            font-weight: 700;
            padding: 1rem 0;
            font-family: 'Montserrat';
            color: #252728;
            font-size: 1.6rem;
            cursor: pointer;
            border: none;
            background: #00F5A0;
            border-radius: 0.6rem;
            margin-top: 2rem;
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
      }
    }
`;
const Label = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px  solid #bdebea;
  border-radius: 0.6rem;
  padding: 1rem 1.8rem;
  box-sizing: border-box;
`;
const FormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
  }
`;
