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
// import { FaVuejs } from "react-icons/fa";

import styled from "styled-components";

export default class About extends Component {
  render() {
    return (
      <MiddleContainer>
        <div className="profile">
          <div className="pic">
            <img src={image} alt="pic" />
          </div>
          <div className="info-container">
            <AiFillGithub size={50} />
            <AiFillFacebook size={50} />
            <AiFillLinkedin size={50} />
            <AiFillMessage size={50} />
          </div>
        </div>

        <div className="blog">
          <h3 style={{ margin: "15px 0 0 15px", textAlign: "center" }}>
            <strong>Welcome to my Area</strong>
          </h3>
          <div className="briefInfo">
            <p className="description">
              I am a Software developer with strong experience in Web as well as
              Mobile development, dedicated to learning and building projects
              with following areas:
            </p>
          </div>
          <div className="icons">
            <div className="react">
              <DiReact size={"100%"} color="skyblue" />
            </div>
            <div className="react">
              <DiNodejsSmall size={"100%"} color="yellowgreen" />
            </div>
            <div className="react">
              <DiJavascript1 size={"100%"} color="yellow" />
            </div>
            <div className="react">
              <DiMongodb size={"100%"} color="yellowgreen" />
            </div>

            {/* <DiPython size={100} color="" /> */}
          </div>
          <div className="briefInfo">
            <p className="description">
              Nowadays, I am working for a software company which outsources
              projects. Current project we are working on is Online Golf Retail
              tools website. I am the front-end developer for this online store.
              <MdCardTravel size={20} color="skyblue" />
            </p>
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
    display:flex;
    align-items:center;
    flex-direction: column;
  }
  .profile {
    width: 30%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 768px) {
      width: 100%;
      display:flex;
      flex-direction: column;
      margin-bottom: 15px;
      border:1px solid gray;
    }
    .pic {
        width:250px;
        margin: 5px;
        @media (max-width: 768px) {
          width:60%
        }
        img{
          width:100%
        }
      }
      .info-container {
        margin-top: 5px;
      }
      @media (max-width: 768px) {
        width: 80%;
        flex-direction: column;
      }
    }
  }
    .blog {
      width: 90%;
      display: flex;
      flex-direction: column;
      display: flex;
      flex-direction: column;
      color: black;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      margin-left: 15px;
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
        .react{
          width:10%
        }
      }
`;
