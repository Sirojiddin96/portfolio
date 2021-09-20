import React from 'react';
import Home from '../home';
import styled from 'styled-components';
import { DiJavascript, DiReact, DiMongodb } from 'react-icons/di';
import skills from './data';
import {
  FaCss3,
  FaGit,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from 'react-icons/fa';

import star from './stars';

const icons = [
  <DiReact size={100} color="#61DBFB" />,
  <DiJavascript size={100} color="#f0db4f" />,
  <FaVuejs size={100} color="#42b883" />,
  <FaReact size={100} color="#61DBFB" />,
  <FaHtml5 size={100} color="#e34c26" />,
  <FaCss3 size={100} color=" #2965f1" />,
  <FaGit size={100} color="#f34f29" />,
  <FaNodeJs size={100} color="#3c873a" />,
  <DiMongodb size={100} color="#4DB33D" />,
];

const Skills = () => {
  return (
    <Home>
      <Content>
        <h2>Experiences</h2>
        <SkillBox>
          {skills.map((item, index) => {
            return (
              <div className="box-container" key={item.id}>
                <div className="box">
                  <div>{icons[index]}</div>
                  <div className="skills">
                    <div className="header">
                      <span>{item.name}</span>
                    </div>
                    <h3>Libraries I use:</h3>
                    <div className="context">
                      {item.lib && <li>{item.lib}</li>}
                      {item.lib2 && <li>{item.lib2}</li>}
                      {item.context && <li>{item.context}</li>}
                      {item.lan && <li>{item.lan}</li>}
                      {item.lan2 && <li>{item.lan2}</li>}
                    </div>
                  </div>
                  <p className="text">{item.description}</p>
                  <div>{star[index]}</div>
                </div>
              </div>
            );
          })}
        </SkillBox>
      </Content>
    </Home>
  );
};

export default Skills;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #42424211;
  h2 {
    font-style: inherit;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    animation: animating 4s ease-out infinite;
    color: #0d7e47c7;
    @keyframes animating {
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
        transform: translateX(-100%);
      }
    }
  }
`;

const SkillBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .box-container {
    width: 24%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    margin-top: 8px;
    opacity: 0.8;
    background-color: rgba(108, 206, 168, 0.26);
    //  animation: animateId 0.3s ease-out forwards;
    @media (max-width: 1000px) {
      width: 48%;
      margin-top: 15px;
      flex-direction: column;
    }
    @media (max-width: 768px) {
      width: 80%;
      margin-top: 15px;
      flex-direction: column;
    }
    :nth-child(even) {
      animation: animateId 1s ease-out forwards;
      @keyframes animateId {
        0% {
          opacity: 1;
          transform: translateX(100%);
        }
      }
    }
    :nth-child(odd) {
      animation: animateI 1s ease-out forwards;
      @keyframes animateI {
        0% {
          opacity: 0;
          transform: translateX(-100%);
        }
      }
    }
    .box {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .skills {
        width: 100%;
        height: 120px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: flex-start;
        padding: 0 10px;
        margin-bottom: 20px;
        .context {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          align-items: flex-start;
          padding: 5px 10px;
          li {
            font-weight: 600;
          }
          span {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
            font-size: 15px;
          }
        }
        .header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-size: 16px;
            font-weight: 600;
            // margin: 10px 0;
          }
        }
        h3 {
          margin: 0;
          padding: 0;
        }
        span {
          font-weight: 600;
          //color: #0b222567;
        }
      }
      .text {
        font-size: 15px;
        font-family: Palatino Linotype, Book Antiqua, Palatino, serif;
        text-align: center;
        padding: 5px;
        font-weight: 600;
        margin-top: 15px;
      }
    }
  }
`;
