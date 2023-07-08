import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MainScreen from '../../layout/MainScreen';
import Project from '../../components/Project';
import Skill from '../../components/Skill';
import SkillData from './skills';
import ProjectData from './project';

const Main = () => {
  const history = useHistory();

  const openContactForm = () => {
   history.push('/contact')
  };

  return (
    <>
      <MainScreen>
        <Wrapper>
          <IntroScreen>
            <LeftContainer>
              <span>FULL-STACK WEB DEVELOPER</span>
              <div className="name">
                <h1>Sirojiddin Karimov</h1>
              </div>
              <div className="intro">
                Fully-passionate about coding and problem solving in programming
                area. Always eager to chase new challenges
              </div>
              <div className="buttons">
                <button className="right" onClick={openContactForm}>
                  Contact Me
                </button>
              </div>
            </LeftContainer>
            <RightContainer>
              <div className="image">
                <img
                  src={require('../../assets/image.png')}
                  alt="main__second"
                />
              </div>
            </RightContainer>
          </IntroScreen>
          <About>
            <h2>About Me</h2>
            <div className="text__container">
              <p>
                FrontEnd Web and Mobile developer who has full passion on
                working with frontend softwares. I have been working for this
                area for 3 years, spending time on mostly frontend part of
                projects, however, I have familiar knowledge of backend services
                as well. I am a JS man who dedicates his most of time of
                Javascript and its framework and libraries. I am always open to
                discuss things, So, always feel free to contact me, Thank you.
              </p>
            </div>
          </About>
          <Projects>
            <h2>Projects</h2>
            <div className="projects">
              {ProjectData.map((project) => {
                return <Project key={project.id} project={project} />;
              })}
            </div>
            {/* <div className="see__more">
              <button onClick={()=>{}}>SEE ALL PROJECT</button>
            </div> */}
          </Projects>
          <Skills>
            <h2>Skills</h2>
            <div className="personal__skills">
              {SkillData.map((skill) => {
                return (
                  <Skill
                    key={skill.id}
                    js={skill.image}
                    js_title={skill.name}
                  />
                );
              })}
            </div>
          </Skills>
          <ContactDiv>
            <div className="contact__list">
              <div className="account">
                <img
                  src={require('../../assets/contact/gmail.png')}
                  alt="gmail"
                />
                <a href={`mailto:sirojiddin960417@gmail.com`}>Gmail</a> 
              </div>
              <div className="account">
                <img src={require('../../assets/contact/in.png')} alt="in" />
                <a
                  href="https://www.linkedin.com/in/karimov-sirojiddin-930b65195/"
                  target="_blank" rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="account">
                <img
                  src={require('../../assets/contact/github.png')}
                  alt="git"
                />
                <a href="https://github.com/Sirojiddin96" target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </div>
            <Title>WEB DEVELOPER 2023</Title>
          </ContactDiv>
        </Wrapper>
      </MainScreen>
    </>
  );
};
export default Main;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 76px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const IntroScreen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const About = styled.div`
  width: 90%;
  h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #bdebea;
  }
  .text__container {
    width: 80%;
    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0.04em;
      color: #bdebea;
    }
  }
`;

const Projects = styled.div`
  width: 90%;
  margin-top: 20px;
  h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #bdebea;
  }
  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }
  .see__more{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      width: 20rem;
      height: 4rem;
      background-color: #00F5A0;
      border: none;
      border-radius: 0.6rem;
      color: #252728;
      font-weight: 600;
      font-size: 1.2rem;
      font-family: 'Montserrat';
      cursor: pointer;
    }
  }
`;

const Skills = styled.div`
  width: 90%;
  h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #bdebea;
  }
  .personal__skills {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ContactDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 30px;
  .contact__list {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .account {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 37px;
        height: 37px;
      }
      a {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 11px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #bdebea;
        text-decoration: none;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
`;

const Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #bdebea;
  margin-top: 30px;
`;

const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 70%;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
    width: 50%;
    align-items: flex-start;
    padding-top: 50px;
  }
  @media (max-width: 400px) {
    width: 100%;
    align-items: flex-start;
  }
  span {
    font-family: 'Tinos';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    color: #d7e5ec;
    @media (max-width: 700px) {
      font-weight: 600;
      font-size: 15px;
    }
  }
  .name {
    margin-top: 10px;
    h1 {
      margin: 0;
      padding: 0;
      background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      @media (max-width: 700px) {
        font-weight: 600;
        font-size: 15px;
      }
    }
  }
  .intro {
    width: 60%;
    margin-top: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    letter-spacing: 0.04em;
    /* text */
    color: #bdebea;
    @media (max-width: 700px) {
      width: 200px;
      font-size: small;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    @media (max-width: 700px) {
      justify-content: center;
      flex-direction: column;
    }

    .right {
      background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
      border-radius: 6px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 20px 13px;
      gap: 10px;
      border: none;
      @media (max-width: 700px) {
        margin-left: 0px;
        margin-top: 10px;
      }
    }
  }
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .image {
    width: 500px;
    height: 500px;
    object-fit: cover;
    //  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 1000px) {
      width: 500px;
      height: 400px;
      margin-top: 10px;
      flex-direction: column;
    }
    @media (max-width: 700px) {
      width: 400px;
      height: 330px;
      position: relative;
    }
    @media (max-width: 400px) {
      width: 300px;
      height: 230px;
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    position: absolute;
    background: white;
    margin-top: 430px;
    margin-left: -170px;
    font-family: monospace;
    font-size: 15px;
    padding: 6px 8px;
    box-sizing: border-box;
    animation: title 3s ease-out;
    @media (max-width: 1000px) {
      margin-top: 360px;
      font-size: 14px;
    }
    @media (max-width: 700px) {
      margin-top: 290px;
      font-size: 12px;
      margin-left: -140px;
      padding: 4px 5px;
    }
    @media (max-width: 400px) {
      margin-top: 190px;
      font-size: 10px;
      padding: 3px 4px;
      margin-left: -70px;
    }
    @keyframes title {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
    }
  }
`;
