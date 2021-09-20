import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <BoxContainer>
      <div className="inner-box">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="image-container">
              <img src={require('../assets/admin.png')} alt="main" />
            </div>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <h1>Name: Hanhwa Total</h1>
            <span style={{ fontSize: 'medium', marginBottom: 15 }}>
              Status: on-going
            </span>
          </div>
          <p>
            Hanhwa Total Admin Dashboard is the website which works for showing
            data which comes from Big data. What I did in this project mainly
            was architecturing project fundament, and guiding to co-workers,
            Written in Vue.JS
          </p>
        </div>
      </div>
    </BoxContainer>
  );
};

export default Content;

const BoxContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // border: 1px solid lightgray;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px 8px;
  margin-bottom: 20px;
  box-sizing: border-box;
  animation: openModal 1s ease-out forwards;
  @media (max-width: 1000px) {
    height: 600px;
  }
  @media (max-width: 700px) {
    height: 600px;
  }
  @media (max-width: 400px) {
    height: 600px;
  }
  @keyframes openModal {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
  .inner-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 20px;
    box-sizing: border-box;
    // padding-left: 20px;
    font-family: Palatino Linotype, Book Antiqua, Palatino, serif;
    a {
      text-decoration: none;
      color: black;
    }
    span {
      font-size: 30px;
      font-weight: 600;
    }
    p {
      margin-top: 5px;
      padding: 0;
      font-size: 15px;
      font-weight: 600;
    }
    .image-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
