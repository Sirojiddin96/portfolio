import React, { Component } from "react";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { MdDirectionsRailway } from "react-icons/md";
import SkillContainer from "./Skills";

export default class Portfolio extends Component {
  render() {
    return (
      <SkillContainer className="skills-container">
        <h2
          style={{
            fontStyle: "inherit",
            fontWeight: 500,
            fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
          }}
        >
          Portfolio
        </h2>
        <hr width="70%" />
        <div className="skill-box-container">
          <div className="box-container">
            <MdDirectionsRailway
              size={100}
              color="skyblue"
              style={{ marginTop: "30px" }}
            />
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "20px",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
              }}
            >
              <p>Website</p>
              <p>Code</p>
            </div>
          </div>
          <div className="box-container">
            <MdYoutubeSearchedFor
              size={100}
              color="yellowgreen"
              style={{ marginTop: "30px" }}
            />
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "20px",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
              }}
            >
              <p>Website</p>
              <p>Code</p>
            </div>
          </div>
          <div className="box-container">
            <FaLanguage
              size={100}
              color="yellow"
              style={{ marginTop: "30px" }}
            />
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "20px",
                fontFamily:
                  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
              }}
            >
              <p>Website</p>
              <p>Code</p>
            </div>
          </div>
        </div>
      </SkillContainer>
    );
  }
}
