import React, { Component } from "react";
import image from "../../assets/image.jpg";
import { AiFillGithub, AiFillMessage } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { MdCardTravel } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";

import styled from "styled-components";

export default class About extends Component {
  render() {
    return (
      <MiddleContainer>
        <div className="profile">
          <div className="introduction">
            <img className="pic" src={image} alt="pic" />
            <div className="info-container">
              <AiFillGithub size={50} />
              <AiFillFacebook size={50} />
              <AiFillLinkedin size={50} />
              <AiFillMessage size={50} />
            </div>
          </div>
        </div>
        <div className="text">
          <div className="blog">
            <h3 style={{ margin: "15px 0 0 15px", textAlign: "center" }}>
              <strong>Welcome to my Area</strong>
            </h3>
            <div className="briefInfo">
              <p className="description">
                I am a Software developer with strong experience in Web as well
                as Mobile development, dedicated to learning and building
                projects with following areas:
              </p>
            </div>
            <div className="icons">
              <DiReact size={100} color="skyblue" />
              <DiNodejsSmall size={100} color="yellowgreen" />
              <DiJavascript1 size={100} color="yellow" />
              <DiMongodb size={100} color="yellowgreen" />
              {/* <DiPython size={100} color="" /> */}
            </div>
            <div className="briefInfo">
              <p className="description">
                Nowadays, I am working on with website which is about making
                reservation and getting tickets in train system for travellers
                <MdCardTravel size={20} color="skyblue" />
              </p>
            </div>
          </div>
        </div>
      </MiddleContainer>
    );
  }
}

const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
  .profile {
    width: 50%;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      margin-bottom: 15px;
    }
    .introduction {
      width: 70%;
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 15px;
      .pic {
        border-radius: 50px;
        margin-top: 15px;
        width: 250px;
        height: 250px;
        @media (max-width: 768px) {
          width: 200px;
          height: 200px;
        }
      }
      .info-container {
        margin-top: 5px;
      }
      @media (max-width: 768px) {
        width: 60%;
        flex-direction: column;
      }
    }
  }
  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    margin-bottom: 15px;
    .blog {
      width: 100%;
      display: flex;
      flex-direction: column;
      .briefInfo {
        width: 95%;
        margin: 0 0 0 15px;
        font-weight: 700;
        font-size: 20px;
        .description {
          font-family: Palatino Linotype, Book Antiqua, Palatino, serif;
          font-size: 25px;
          @media (max-width: 768px) {
            font-size: 20px;
          }
        }
      }
      .icons {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
`;
