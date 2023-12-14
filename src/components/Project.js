import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
  return (
    <ProjectContainer>
      {/* {props.project?.image?.length>=1 &&
        <div className="project__image">
          {
            props.project.image.map(img => (
              <div className='image-container'>
                <img src={img} alt="img" />
              </div>
            ))
          }
        </div>
      } */}
      <div className="project__content">
        <h2>{props.project.name} </h2>
        <div className="project__tools">
          {props.project.skills.map((skill) => {
            return <span key={skill}>{skill}</span>;
          })}
        </div>
        <div className="project__definition">{props.project.description}</div>
        <div className="project__info">
          <strong>Position: </strong> {props.project.position}
        </div>
        <div className="project__info">
          <strong>Duration: </strong> {props.project.length}
        </div>
        <div className="project__info">
          <strong>Techs: </strong>
          {props.project.tools.map((skill) => {
            return <span key={skill}>{skill} </span>;
          })}
        </div>
        {props.project.link && (
          <div className="project__info">
            <strong>Link: </strong>
            <a
              href={props.project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.project.link}
            </a>
          </div>
        )}
      </div>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
  .project__image {
    width: 100%;
    display: flex;
    gap: 2rem;
    box-sizing: border-box;
    .image-container {
      width: 45%;
      height: 10rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .project__content {
    width: 100%;
    min-height: 27rem;
    display: flex;
    flex-direction: column;
    background: #222525;
    box-sizing: border-box;
    padding: 10px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    .project__tools {
      display: flex;
      // width: 60%;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
      flex-direction: row;
      span {
        background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        gap: 10px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 10px;
        line-height: 14px;
        color: #1f2626;
      }
    }
    .project__definition {
      margin-top: 10px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      letter-spacing: 0.04em;
      color: #bdebea;
      box-sizing: border-box;
      padding: 10px 0px;
    }
    .project__info {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */
      letter-spacing: 0.04em;
      color: #bdebea;
      box-sizing: border-box;
      padding-top: 10px;
      strong {
        font-weight: 600;
        font-size: 16px;
        font-weight: bold;
      }
      a {
        color: #00d9f5;
      }
    }
  }
`;
