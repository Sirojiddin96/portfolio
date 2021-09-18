import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import '../App.css';
import Home from '../Pages/home';
const Main = (porps) => {
  const history = useHistory();

  const goToPortfolio = () => {
    history.push('/portfolio');
  };
  return (
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
            <button className="right">Hire Me</button>
          </div>
        </LeftContainer>
        <RightContainer>
          <div className="image__row">
            <div className="below__image">
              <img src={require('../assets/second.jpeg')} alt="main__first" />
            </div>
            <div className="below__image">
              <img src={require('../assets/third.jpeg')} alt="main__second" />
            </div>
          </div>
          <div className="image">
            <img src={require('../assets/first.jpeg')} alt="main__second" />
          </div>
        </RightContainer>
      </Wrapper>
    </Home>
  );
};
export default Main;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  @media (max-width: 700px) {
    padding-top: 100px;
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
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // position: relative;

  .image {
    width: 500px;
    height: 200px;
    position: absolute;
    margin-top: 100px;
    @media (max-width: 1000px) {
      width: 300px;
      height: 100px;
      margin-top: 10px;
      flex-direction: column;
    }
    @media (max-width: 700px) {
      width: 200px;
      height: 100px;
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .image__row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 1;
    .below__image {
      width: 300px;
      height: 200px;
      // transform: rotate(-15deg);
      margin-top: -130px;
      transform: skewX(20deg);
      @media (max-width: 1000px) {
        width: 200px;
        height: 100px;
      }
      @media (max-width: 700px) {
        width: 100px;
        height: 100px;
        margin-top: 10px;
        flex-direction: column;
      }
      @media (max-width: 400px) {
        flex-direction: column;
        transform: skewX(0deg);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
