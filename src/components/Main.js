import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import definition from "../assets/definition.jpg";
import image from "../assets/image.jpg";
import { AiFillGithub, AiFillMessage } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { MdDirectionsRailway } from "react-icons/md";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import "../App.css";

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <div className="main">
          {/* <img
            className="image"
            src={definition}
            alt="Banner"
            style={{ width: "100%", height: "100%", opacity: "0.7" }}
          /> */}
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ width: "100%", height: "100%", opacity: "0.7" }}
          />
        </div>

        <hr width="100%" />
        <div>
          <h2
            style={{
              fontStyle: "inherit",
              fontWeight: 500,
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            About me
          </h2>
        </div>
        <hr width="100%" />
        <div className="middle-container">
          <div className="profile">
            <div className="introduction">
              <img
                className="pic"
                src={image}
                alt="pic"
                style={{ width: "250px", height: "250px" }}
              />
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
              <h3 style={{ margin: "15px 0 0 15px" }}>
                <strong>Welcome to my Area</strong>
              </h3>
              <div className="briefInfo">
                <p>
                  I am a Software developer with strong experience in Web as
                  well as Mobile development, dedicated to learning and building
                  projects with following areas:
                </p>
              </div>
              <div className="icons">
                <DiReact size={100} color="skyblue" />
                <DiNodejsSmall size={100} color="yellowgreen" />
                <DiJavascript1 size={100} color="yellow" />
                <DiMongodb size={50} color="yellowgreen" />
                {/* <DiPython size={100} color="" /> */}
              </div>
              <div className="briefInfo">
                <p>
                  I am a Software developer with strong experience in Web as
                  well as Mobile development, dedicated to learning and building
                  projects with following areas:
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr width="90%" />
        <div class="skills-container">
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

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
            <div className="box-container">
              <DiNodejsSmall size={100} color="yellowgreen" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
            <div className="box-container">
              <DiJavascript1 size={100} color="yellow" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div class="skills-container">
          <h2
            style={{
              fontStyle: "inherit",
              fontWeight: 500,
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Portfolio
          </h2>
          <hr width="70%" />
          <div className="skill-box-container">
            <div className="box-container">
              <MdDirectionsRailway size={100} color="skyblue" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
            <div className="box-container">
              <MdYoutubeSearchedFor size={100} color="yellowgreen" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
            <div className="box-container">
              <FaLanguage size={100} color="yellow" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="header-container">
            <h1>Contact</h1>
            <p className="header-paragraph">
              Feel free to contact me in case of project or work suggestions
            </p>
          </div>
          <div className="message-form-container">
            <div className="message-form">
              <div className="message-left-container">
                <input placeholder="Your name please" />
                <input placeholder="Your email please" />
                <input placeholder="Your phone please" />
              </div>
              <div className="message-right-container">
                <textarea style={{ height: "200px" }}></textarea>
              </div>
            </div>
            <div className="button-container">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main {
    width: 100%;
    height: 300px;
    background-color: #333333;
  }
  .middle-container {
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    .profile {
      width: 50%;
      display: flex;
      position: relative;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .introduction {
        width: 70%;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .pic {
          border-radius: 50px;
        }
        .info-container {
          margin-top: 5px;
        }
      }
    }
    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: black;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
        }
        .briefInfo.p {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-weight: 700;
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
  }
  .skills-container {
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
        }
      }
    }
  }
  .contact {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #92a8d1;
    padding-bottom: 30px;
    .header-container {
      padding: 15px;
      text-align: center;
      color: white;
      font-size: 20px;
      font-family: Arial;
    }
    .message-form-container {
      width: 85%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: white;
      padding: 30px;
      .message-form {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-top: 30px;
        .message-left-container {
          width: 45%;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          input {
            height: 25px;
            width: 80%;
            padding: 10px;
            font-size: 17px;
            font-style: oblique;
            font-weight: 300;
            background-color: #333333;
            color: white;
          }
        }
        .message-right-container {
          width: 45%;
          display: flex;
          height: 200px;
          flex-direction: column;
          textarea {
            padding: 10px;
            font-size: 17px;
            font-weight: 300;
            background-color: #333333;
            color: white;
            font-style: oblique;
          }
        }
      }
      .button-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        background-color: white-space;
        button {
          padding: 10px;
          font-family: Arial;
          color: black;
          font-size: 20px;
          cursor: pointer;
        }
        button:hover {
          background-color: #92a8d1;
          color: white;
          border: 1px solid gray;
        }
      }
    }
  }
`;
