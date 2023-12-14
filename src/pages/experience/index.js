import React from 'react';
import MainScreen from '../../layout/MainScreen';
import styled from 'styled-components';

import works from './works';

const Experience = () => {
  return (
    <MainScreen>
      <ExperienceLayout>
        <div className="top-container">
          <div className="title">My Experience</div>
          <div className="title education">My Education</div>
        </div>
        {works.map((work) => (
          <div className="bottom-container">
            <div className="experience-years">
              <span>{work.start}</span>
              <span>to</span>
              <span>{work.end}</span>
            </div>
            <div className="middle-line">
              <span className="round" />
            </div>
            <div className="right-container">
              <span className="place">{work.workPlace}</span>
              <span>{work.name}</span>
              <span>{work.place}</span>
              <span>{work.type}</span>
            </div>
          </div>
        ))}
      </ExperienceLayout>
    </MainScreen>
  );
};

export default Experience;

const ExperienceLayout = styled.div`
  width: 100%;
  height: 87%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 2rem;
  background-image: -webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%);
  @media (max-width: 768px) {
    height: auto;
    box-sizing: border-box;
  }
  .top-container {
    width: 30rem;
    justify-content: center;
    display: flex;
    gap: 3rem;
    @media (max-width: 768px) {
      width: auto;
      box-sizing: border-box;
    }
    .title {
      margin: 0px;
      line-height: 50px;
      border-radius: 5px;
      padding: 0px 40px;
      font-size: 13px;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      border: 1px solid #9ab5f5;
      background: #fff;
      color: #222222;
      font-weight: 600;
      box-sizing: border-box;
    }
    .education {
      color: #fff;
      font-family: 'Roboto', sans-serif;
      border: transparent;
      background: rgba(255, 255, 255, 0.1);
    }
  }
  .middle-line {
    width: 5px;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    position: relative;
    .round {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      display: block;
      background: rgba(255, 255, 255, 0.2);
      position: absolute;
      left: 46%;
      top: 23px;
      transform: translateX(-50%);
    }
    .round::after {
      background-color: #fff;
      content: '';
      height: 7px;
      width: 7px;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      left: 52%;
      top: 4px;
      transform: translateX(-50%);
    }
  }
  .bottom-container {
    width: 30rem;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    box-sizing: border-box;
    @media (max-width: 768px) {
      width: auto;
      box-sizing: border-box;
    }

    .experience-years {
      width: 12rem;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      color: rgba(255, 255, 255, 0.75);
      font-weight: 600;
      padding: 0 1rem;
      font-size: 1.2rem;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      @media (max-width: 768px) {
        font-size: 0.9rem;
        width: auto;
      }
    }
    .right-container {
      width: 12rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
      font-size: 1.2rem;
      padding-top: 1rem;
      font-family: 'Roboto', sans-serif;
      color: rgba(255, 255, 255, 0.75);
      .place {
        margin-bottom: 1rem;
        font-size: 21px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
      }
      > span {
        font-size: 16px;
        margin-top: 0.3rem;
      }
    }
  }
`;
