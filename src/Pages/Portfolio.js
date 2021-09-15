import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { AiFillApi } from 'react-icons/ai';
import { FaSalesforce } from 'react-icons/fa';
import { MdDirectionsRailway } from 'react-icons/md';
import styled from 'styled-components';
export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioContainer>
        <h2
          style={{
            fontStyle: 'inherit',
            fontWeight: 500,
            fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
          }}
        >
          Portfolio
        </h2>
        <hr width="70%" />
        <div className="skill-box-container">
          <Link className="box-container" to="/details">
            <MdDirectionsRailway
              size={100}
              color="skyblue"
              style={{ marginTop: '30px' }}
            />
            <div className="container">
              <p>Rail</p>
              <a href="https://github.com/Sirojiddin96/rail">Code</a>
            </div>
          </Link>
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
              <p>Sale App</p>
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
        </div>
      </PortfolioContainer>
    );
  }
}

const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  .skill-box-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    @media (max-width: 768px) {
      width: 80%;
      flex-direction: column;
    }
    .box-container {
      width: 24%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border: 1px solid lightgray;
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
