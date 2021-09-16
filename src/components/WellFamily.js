import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <BoxContainer>
      <h1>Language Learning App</h1>
      <div className="inner-box">
        <div className="container">
          <span>About</span>
          <p>
            WellFamily house is the mobile app project which is used between
            family members to communicate and control the health of old people
            in the Family. App contains: Family section, Health Check-up test,
            Health Exercises, Memory test game, Creating and communicating with
            Members, and many more. I would like to describe it in detail in
            Person
          </p>
        </div>
        <div className="image-container">
          <img src={require('../assets/family/main.PNG')} alt="main" />
        </div>
        <div className="image-container">
          <img src={require('../assets/family/section.PNG')} alt="section" />
        </div>
        <div className="image-container">
          <img src={require('../assets/family/exercises.PNG')} alt="exercies" />
        </div>
        <div className="image-container">
          <img src={require('../assets/family/sidebar.PNG')} alt="sidebar" />
        </div>
      </div>
    </BoxContainer>
  );
};

export default Content;

const BoxContainer = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid lightgray;
  margin-right: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
  background-color: #f0efeb;
  animation: openModal 1s ease-out forwards;
  @keyframes openModal {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 1;
      transform: translateX(90%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .inner-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    transform: skewX(6deg);
    .image-container {
      width: 25%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: skewX(-10deg);
      img {
        width: 50%;
        height: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  .container {
    width: 20%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 20px;
    box-sizing: border-box;
    padding-left: 20px;
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
