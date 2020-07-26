import React, { Component } from "react";
import styled from "styled-components";

import "../App.css";
import About from "../Pages/Screens/About";
import Skills from "../Pages/Screens/Skills";
import Portfolio from "../Pages/Screens/Portfolio";
import Contact from "../Pages/Screens/Contact";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Banner />
        <About />
        <hr width="90%" />
        <Skills />
        {/* Portfolio */}
        <Portfolio />
        {/*  Contact   */}
        <Contact />
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
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 15px;
        .pic {
          border-radius: 50px;
          margin-top: 15px;
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
          font-family: '"Palatino Linotype", "Book Antiqua", Palatino, serif';
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
        flex-direction: column;
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
