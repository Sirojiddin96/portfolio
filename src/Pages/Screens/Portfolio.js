import React, { Component } from "react";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { MdDirectionsRailway } from "react-icons/md";
import styled from "styled-components";

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioContainer>
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
                height: "auto",
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
      </PortfolioContainer>
    );
  }
}

const PortfolioContainer = styled.div`
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
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
    .box-container {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border: 1px solid lightgray;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      margin-bottom: 20px;
      @media (max-width: 768px) {
        width: 80%;
        flex-direction: column;
      }
    }
  }
`;
