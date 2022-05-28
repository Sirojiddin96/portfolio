import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ContactForm from '../../components/ContactForm';
import emailjs from 'emailjs-com';
import apiKey from '../contact/emailKey';
import MainScreen from '../../layout/MainScreen';

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
      <MainScreen>
        <Wrapper>
          <IntroScreen>
            <LeftContainer>
              <span>WEB DEVELOPER</span>
              <div className="name">
                <h1>Sirojiddin Karimov</h1>
              </div>
              <div className="intro">
                Fully-passionate about coding and problem solving in programming
                area. Always eager to chase new challenges
              </div>
              <div className="buttons">
                <button className="right" onClick={openContactForm}>
                  Contact Me
                </button>
              </div>
            </LeftContainer>
            <RightContainer>
              <div className="image">
                <img
                  src={require('../../assets/image.png')}
                  alt="main__second"
                />
              </div>
            </RightContainer>
          </IntroScreen>
        </Wrapper>
      </MainScreen>
    </>
  );
};
export default Main;

const Contact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 100%;
  // height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 96px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const IntroScreen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // padding-top: 50px;
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
    align-items: flex-start;
    padding-top: 50px;
  }
  @media (max-width: 400px) {
    width: 100%;
    align-items: flex-start;
  }
  span {
    font-family: 'Tinos';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    color: #d7e5ec;
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
      background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent @media (max-width: 700px) {
        font-weight: 600;
        font-size: 15px;
      }
    }
  }
  .intro {
    width: 60%;
    margin-top: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    letter-spacing: 0.04em;
    /* text */
    color: #bdebea;
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

    .right {
      background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
      border-radius: 6px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 20px 13px;
      gap: 10p;
      border: none;
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
  box-sizing: border-box;
  .image {
    width: 500px;
    height: 500px;
    object-fit: cover;
    //  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    margin-top: 430px;
    margin-left: -170px;
    font-family: monospace;
    font-size: 15px;
    padding: 6px 8px;
    box-sizing: border-box;
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
