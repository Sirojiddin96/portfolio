import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import '../App.css';
import Home from '../Pages/home';
import ContactForm from './ContactForm';

import emailjs from 'emailjs-com';
import apiKey from '../Pages/contact/emailKey';

const Main = () => {
  const form = useRef();
  const history = useHistory();
  const [openContact, setOpenContact] = useState(false);

  const goToPortfolio = () => {
    history.push('/portfolio');
  };
  const openContactForm = () => {
    setOpenContact((prevState) => !prevState);
  };

  const submitFormHander = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        apiKey.SERVICE_ID,
        apiKey.TEMPLATE_ID,
        form.current,
        apiKey.USER_ID
      )
      .then(
        (result) => {
          console.log(result);
          if (result.text === 'OK') {
            setOpenContact((prevState) => !prevState);
          }
        },
        (error) => {
          console.log('Error', error);
          alert('An error occurred, Please try again', error);
        }
      );
  };

  return (
    <>
      {openContact && (
        <Contact>
          <ContactForm
            header="Reach me out"
            onSubmit={submitFormHander}
            form={form}
            cancel={openContactForm}
          />
        </Contact>
      )}
      <Home>
        <Wrapper>
          <LeftContainer>
            <span>Try Every Single Chance</span>
            <div className="name">
              <h1>I am Developer</h1>
              <h1>Sirojiddin Karimov</h1>
            </div>
            <div className="intro">
              Fully-passionate about coding and problem solving in programming
              area. Always eager to chase new challenges
            </div>
            <div className="buttons">
              <button className="left" onClick={goToPortfolio}>
                Learn more
              </button>
              <button className="right" onClick={openContactForm}>
                Hire Me
              </button>
            </div>
          </LeftContainer>
          <RightContainer>
            <div className="image">
              <img src={require('../assets/personal.jpg')} alt="main__second" />
            </div>
            <span className="title">Are you looking for a developer?</span>
          </RightContainer>
        </Wrapper>
      </Home>
    </>
  );
};
export default Main;

const Contact = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  box-sizing: border-box;
  background-color: #e5e5e5;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 70%;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
    width: 50%;
    align-items: center;
    padding-top: 50px;
  }
  @media (max-width: 400px) {
    width: 100%;
    align-items: center;
  }
  span {
    color: #14213d;
    font-weight: 600;
    font-size: 20px;
    @media (max-width: 700px) {
      font-weight: 600;
      font-size: 15px;
    }
  }
  .name {
    margin-top: 10px;
    h1 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-family: sans-serif;
      color: #001d3d;
      @media (max-width: 700px) {
        font-weight: 600;
        font-size: 15px;
      }
    }
  }
  .intro {
    width: 60%;
    margin-top: 10px;
    color: #577590;
    font-weight: 600;
    font-size: large;
    font-family: sans-serif;
    @media (max-width: 700px) {
      width: 200px;
      font-size: small;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    @media (max-width: 700px) {
      justify-content: center;
      flex-direction: column;
    }
    .left {
      width: 130px;
      height: 40px;
      background-color: #c9184a;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 3px;
      font-size: 16px;
      font-weight: 600;
    }
    .right {
      width: 130px;
      height: 40px;
      background-color: none;
      color: white;
      border: none;
      cursor: pointer;
      margin-left: 5px;
      border-radius: 3px;
      font-size: 16px;
      border: 1px solid #ccc;
      color: #001d3d;
      font-weight: 600;
      @media (max-width: 700px) {
        margin-left: 0px;
        margin-top: 10px;
      }
    }
  }
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image {
    width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 1000px) {
      width: 500px;
      height: 400px;
      margin-top: 10px;
      flex-direction: column;
    }
    @media (max-width: 700px) {
      width: 400px;
      height: 330px;
      position: relative;
    }
    @media (max-width: 400px) {
      width: 300px;
      height: 230px;
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    position: absolute;
    background: white;
    margin-top: 420px;
    margin-left: -170px;
    font-family: monospace;
    font-size: 15px;
    padding: 6px 8px;
    animation: title 3s ease-out;
    @media (max-width: 1000px) {
      margin-top: 360px;
      font-size: 14px;
    }
    @media (max-width: 700px) {
      margin-top: 290px;
      font-size: 12px;
      margin-left: -140px;
      padding: 4px 5px;
    }
    @media (max-width: 400px) {
      margin-top: 190px;
      font-size: 10px;
      padding: 3px 4px;
      margin-left: -70px;
    }
    @keyframes title {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
    }
  }
`;
