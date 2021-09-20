import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <BoxContainer1>
      <div className="inner-box">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="image-container">
              <img src={require('../assets/family/main.PNG')} alt="main" />
            </div>
            <div className="image-container">
              <img
                src={require('../assets/family/section.PNG')}
                alt="section"
              />
            </div>
            <div className="image-container">
              <img
                src={require('../assets/family/exercises.PNG')}
                alt="exercies"
              />
            </div>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <h1>Name: Language Learning App</h1>
            <span style={{ fontSize: 'medium', marginBottom: 15 }}>
              Status: on-going
            </span>
          </div>
          <p>
            WellFamily house is the mobile app project which is used between
            family members to communicate and control the health of old people
            in the Family. App contains: Family section, Health Check-up test,
            Health Exercises, Memory test game, Creating and communicating with
            Members, and many more. I would like to describe it in detail in
            Person
          </p>
        </div>
      </div>
    </BoxContainer1>
  );
};

export default Content;

const BoxContainer1 = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px 8px;
  margin-bottom: 20px;
  animation: openModal1 1s ease-out;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    height: 600px;
  }
  @media (max-width: 700px) {
    height: 600px;
  }
  @media (max-width: 400px) {
    height: 600px;
  }
  @keyframes openModal1 {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
  .inner-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    .image-container {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 20px;
    box-sizing: border-box;
    //  padding-left: 20px;
    font-family: Palatino Linotype, Book Antiqua, Palatino, serif;
    a {
      text-decoration: none;
      color: black;
    }
    span {
      font-size: 30px;
      font-weight: 600;
    }
    p {
      margin-top: 5px;
      padding: 0;
      font-size: 15px;
      font-weight: 600;
    }
  }
`;
