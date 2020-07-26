import React, { Component } from "react";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { AiFillSetting } from "react-icons/ai";
import { GrTools } from "react-icons/gr";
import { BsTools } from "react-icons/bs";

import styled from "styled-components";

export default class Skills extends Component {
  render() {
    return (
      <SkillContainer className="skills-container">
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
            <DiReact size={100} color="skyblue" />
            <p
              style={{
                fontSize: "25px",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                textAlign: "center",
              }}
            >
              Component-based structure and life cycle methods of this framework
              make it my favourite front-end tool.
              <BsTools size={25} />
            </p>
          </div>
          <div className="box-container">
            <DiNodejsSmall size={100} color="yellowgreen" />
            <p
              style={{
                fontSize: "25px",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                textAlign: "center",
              }}
            >
              Nodejs is one of my favourite backend tools to work with and npm
              is best package management tool.
              <GrTools size={25} />
            </p>
          </div>
          <div className="box-container">
            <DiJavascript1 size={100} color="yellow" />
            <p
              style={{
                fontSize: "25px",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                textAlign: "center",
              }}
            >
              Familiar with the latest updates on the language as well as
              hands-on experience with ES6, ES7 and ES8.
              <AiFillSetting size={25} />
            </p>
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
  .skill-box-container {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    .box-container {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border: 1px solid lightgray;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      margin-bottom: 20px;
      p {
        padding: 15px;
        font-family: '"Palatino Linotype", "Book Antiqua", Palatino, serif';
      }
    }
  }
`;
