import React, { Component } from "react";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { AiFillSetting } from "react-icons/ai";
import { GrTools } from "react-icons/gr";
import { BsTools } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";

import styled from "styled-components";

export default class Skills extends Component {
  render() {
    return (
      <SkillContainer primary>
        <h2
          style={{
            fontStyle: "inherit",
            fontWeight: 500,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Experiences
        </h2>
        <hr width="70%" />
        <div className="skill-box-container">
          <div className="box-container">
            <div className="box">
              <DiReact size={100} color="skyblue" />
              <p className="text">
                Component-based structure and life cycle methods of this
                framework make it my favourite front-end tool.
                <BsTools size={25} />
              </p>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <DiNodejsSmall size={100} color="yellowgreen" />
              <p className="text">
                Nodejs is one of my favourite backend tools to work with and npm
                is best package management tool.
                <GrTools size={25} />
              </p>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <DiJavascript1 size={100} color="yellow" />

              <p className="text">
                Familiar with the latest updates on the language as well as
                hands-on experience with ES6, ES7 and ES8.
                <AiFillSetting size={25} />
              </p>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <DiMongodb color="yellowgreen" size={100} />

              <p className="text">
                Familiar with the latest updates on the language as well as
                hands-on experience with ES6, ES7 and ES8.
                <AiFillSetting size={25} />
              </p>
            </div>
          </div>
        </div>
      </SkillContainer>
    );
  }
}

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  background: white;
  .skill-box-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .box-container {
      width: 24%;
      height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border: 1px solid lightgray;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      background-color: white;
      animation: 0.3s ease-out forwards;
      @media (max-width: 768px) {
        width: 80%;
        margin-top: 15px;
        flex-direction: column;
      }
      .box {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .text {
          font-size: 15px;
          font-family: Palatino Linotype, Book Antiqua, Palatino, serif;
          text-align: center;
          padding: 5px;
        }
      }
    }
  }
`;
