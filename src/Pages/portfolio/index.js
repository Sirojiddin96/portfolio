import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Home from '../home';
import { projects } from './data';

import Content from '../../components/Content';
import WellFamily from '../../components/WellFamily';
import Golfzon from '../../components/Golzon';
import Admin from '../../components/Admin';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [works, setWorks] = useState([]);
  const [single, setSingle] = useState('');

  const getAllProject = async () => {
    const resp = await projects;
    setWorks(resp);
  };

  useEffect(() => {
    getAllProject();
  }, [works]);

  const openModal = (id) => {
    const singleProject = works.find((work) => work.id === id);
    setSingle(singleProject);
    console.log('Single', single);
    setIsVisible((prevState) => !prevState);
  };

  return (
    <>
      {isVisible ? (
        <OverLay onClick={openModal} className="overlay">
          <div className="inner-container">
            <span>sdgsd</span>
            It is about Language Learning app which user can get 20 words daily
          </div>
        </OverLay>
      ) : (
        ''
      )}
      <Home>
        <Wrapper>
          <PortfolioContainer>
            <h1>What I have done so far...</h1>
            <hr width="70%" />
            <div className="skill-box-container">
              <Content />
              <WellFamily />
              <Golfzon />
              <Admin />
            </div>
          </PortfolioContainer>
        </Wrapper>
      </Home>
    </>
  );
};
export default Portfolio;

const OverLay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .inner-container {
    width: 50%;
    background-color: #fff;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  //height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  position: relative;
  background-color: #e5e5e5;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @media (max-width: 768px) {
      width: 80%;
      flex-direction: column;
    }
  }
`;
