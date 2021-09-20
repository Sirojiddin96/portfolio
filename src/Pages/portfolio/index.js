import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Home from '../home';
import { projects } from './data';

import Content from '../../components/Content';
import WellFamily from '../../components/WellFamily';
import Golfzon from '../../components/Golzon';
import Admin from '../../components/Admin';

const Portfolio = () => {
  const [works, setWorks] = useState([]);

  const getAllProject = async () => {
    const resp = await projects;
    setWorks(resp);
  };

  useEffect(() => {
    getAllProject();
  }, [works]);

  return (
    <Home>
      <Wrapper>
        <PortfolioContainer>
          <h1>What I have done so far...</h1>
          <hr width="70%" />
          <div className="skill-box-container">
            <div className="content">
              <Content />
            </div>
            <div className="content2">
              <WellFamily />
            </div>
            <div className="content3">
              <Golfzon />
            </div>
            <div className="content4">
              <Admin />
            </div>
          </div>
        </PortfolioContainer>
      </Wrapper>
    </Home>
  );
};
export default Portfolio;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background-color: white;
`;

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ccc;
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
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;
    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
    @media (max-width: 400px) {
      width: 100%;
    }
    .content {
      width: 24%;
      animation: openModal 1s ease-out;

      @keyframes openModal {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
      }
      @media (max-width: 1000px) {
        width: 45%;
      }
      @media (max-width: 700px) {
        width: 45%;
      }
      @media (max-width: 600px) {
        width: 90%;
      }
    }
    .content2 {
      width: 24%;
      animation: openModal 1s ease-out;
      @keyframes openModal {
        0% {
          opacity: 0;
          transform: translateX(-100%);
        }
      }
      @media (max-width: 1000px) {
        width: 45%;
      }
      @media (max-width: 700px) {
        width: 45%;
      }
      @media (max-width: 600px) {
        width: 90%;
      }
    }
    .content3 {
      width: 24%;
      animation: openModal 1s ease-out;
      @keyframes openModal {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
      }
      @media (max-width: 1000px) {
        width: 45%;
      }
      @media (max-width: 700px) {
        width: 45%;
      }
      @media (max-width: 600px) {
        width: 90%;
      }
    }
    .content4 {
      width: 24%;
      animation: openModal 1s ease-out;
      @keyframes openModal {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
      }
      @media (max-width: 1000px) {
        width: 45%;
      }
      @media (max-width: 700px) {
        width: 45%;
      }
      @media (max-width: 600px) {
        width: 90%;
      }
    }
  }
`;
