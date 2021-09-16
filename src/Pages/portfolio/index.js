import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from '../home';
import { projects } from './data';

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
    // setIsVisible((prevState) => !prevState);
  };
  return (
    <>
      {isVisible ? (
        <OverLay onClick={openModal} className="overlay">
          <div className="inner-container">
            <span>{single}sdgsd</span>
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
              {works.map((work) => {
                return (
                  <div
                    className="box-container"
                    key={work.id}
                    onClick={() => openModal(work.id)}
                  >
                    <div>{work.icon}</div>
                    <div className="container">
                      <p>{work.name}</p>
                      <span>Code</span>
                    </div>
                  </div>
                );
              })}
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
  .inner-container {
    width: 50%;
    background-color: #fff;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 100;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  position: relative;
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
