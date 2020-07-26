import React, { Component } from "react";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { AiFillSetting } from "react-icons/ai";
import { GrTools } from "react-icons/gr";
import { BsTools } from "react-icons/bs";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
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
      </div>
    );
  }
}
