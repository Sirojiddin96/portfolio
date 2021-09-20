import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <BoxContainer>
      <div className="inner-box">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="image-container">
              <img src={require('../assets/dic/main.png')} alt="main" />
            </div>
            <div className="image-container">
              <img src={require('../assets/dic/search.png')} alt="search" />
            </div>
            <div className="image-container">
              <img
                src={require('../assets/dic/description.png')}
                alt="description"
              />
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
            <h1>Name: Language Learning App</h1>
            <span style={{ fontSize: 'medium', marginBottom: 15 }}>
              Status: on-going
            </span>
          </div>
          <p>
            It is a mobile app which is dedicated to make learning path and
            habit easier for learners in languages: English, Korean, Uzbek. We
            provide prepared and planned tasks for users which they do not have
            to think about. We sort and make list of words according to level.
            This app includes: Dictionay, Stories, Level Tests and many more. I
            can not describe project in 100% in detail since it has not been
            completed yet, would love to share in person', tech: 'React Native,
            Node.JS, MongoDB, AWS
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
  align-items: center;
  //  border: 1px solid lightgray;
  margin-right: 10px;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
  padding: 10px 8px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.05);
  @media (max-width: 1000px) {
    height: 600px;
  }
  @media (max-width: 700px) {
    height: 600px;
  }
  @media (max-width: 400px) {
    height: 600px;
  }
  .inner-box {
    //  width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    //  transform: skewX(6deg);
    .image-container {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      //  transform: skewX(-10deg);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    box-sizing: border-box;
    //  padding-left: 20px;
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
      font-size: 17px;
      font-weight: 600;
    }
  }
`;
