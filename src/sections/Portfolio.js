import React, { useState } from 'react';

import { MdYoutubeSearchedFor } from 'react-icons/md';
import { AiFillApi } from 'react-icons/ai';
import { FaSalesforce } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import styled from 'styled-components';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <>
      {isVisible ? (
        <OverLay onClick={openModal} className="overlay">
          <div className="inner-container">
            It is about Language Learning app which user can get 20 words daily
          </div>
        </OverLay>
      ) : (
        ''
      )}
      <PortfolioContainer>
        <h1>Portfolio</h1>
        <hr width="70%" />
        <div className="skill-box-container">
          <div className="box-container" onClick={openModal}>
            <MdLanguage
              size={100}
              color="skyblue"
              style={{ marginTop: '30px' }}
            />
            <div className="container">
              <p>Dictionary</p>
            </div>
          </div>
          <div className="box-container">
            <AiFillApi
              size={100}
              color="yellow"
              style={{ marginTop: '30px' }}
            />
            <div className="container">
              <p>Admin Dashboard</p>
              <a href="https://github.com/Sirojiddin96/axios">Code</a>
            </div>
          </div>
          <div className="box-container">
            <AiFillApi
              size={100}
              color="yellow"
              style={{ marginTop: '30px' }}
            />
            <div className="container">
              <p>Golfzon Retail market</p>
              <a href="https://github.com/Sirojiddin96/axios">Code</a>
            </div>
          </div>
          <div className="box-container">
            <MdYoutubeSearchedFor
              size={100}
              color="yellowgreen"
              style={{ marginTop: '30px' }}
            />
            <div className="container">
              <p>Search Engine</p>
              <a href="https://github.com/Sirojiddin96/searchEngine">Code</a>
            </div>
          </div>
          <div className="box-container">
            <FaSalesforce
              size={100}
              color="yellow"
              style={{ marginTop: '30px' }}
            />
            <div className="container">
              <p>Sale App in React native</p>
              <a href="https://github.com/Sirojiddin96/ReactNativeProject">
                Code
              </a>
            </div>
          </div>
          <div className="box-container">
            <AiFillApi
              size={100}
              color="yellow"
              style={{ marginTop: '30px' }}
            />
            <div className="container">
              <p>Axios Api</p>
              <a href="https://github.com/Sirojiddin96/axios">Code</a>
            </div>
          </div>
          <div className="box-container">
            <AiFillApi
              size={100}
              color="yellow"
              style={{ marginTop: '30px' }}
            />
            <div className="container">
              <p>WellFamily</p>
              <a href="https://github.com/Sirojiddin96/axios">Code</a>
            </div>
          </div>
        </div>
      </PortfolioContainer>
    </>
  );
};
export default Portfolio;

const OverLay = styled.div`
  width: 100%;
  // height: 80vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .inner-container {
    width: 50%;
    background-color: #fff;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 1;
  }
`;

const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;

  h1 {
    font-style: inherit;
    font-weight: 600;
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
  }
  .skill-box-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    @media (max-width: 768px) {
      width: 80%;
      flex-direction: column;
    }
    .box-container {
      width: 24%;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border: 1px solid lightgray;
      margin-right: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      margin-bottom: 20px;
      @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
      }
      .container {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        font-family: Palatino Linotype, Book Antiqua, Palatino, serif;
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
`;
