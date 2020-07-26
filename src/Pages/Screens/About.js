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
export default class About extends Component {
  render() {
    return (
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
              <p
                style={{
                  fontSize: "25px",
                  fontFamily:
                    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                }}
              >
                I am a Software developer with strong experience in Web as well
                as Mobile development, dedicated to learning and building
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
              <p
                style={{
                  fontSize: "25px",
                  fontFamily:
                    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
                }}
              >
                Nowadays, I am working on with website which is about making
                reservation and getting tickets in train system for travellers
                <MdCardTravel size={20} color="skyblue" />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
