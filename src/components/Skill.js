import React from 'react';
import styled from 'styled-components';

const Skill = (props) => {
  return (
    <PersonalSkill>
      <div className="skill__image">
        <img src={props.js} alt={props.js_title} />
      </div>
      <h3>{props.js_title}</h3>
    </PersonalSkill>
  );
};

export default Skill;

const PersonalSkill = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 47%;
  }
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.13538em;
    text-transform: uppercase;
    color: #bdebea;
    margin-top: 15px;
  }
  .skill__image {
    width: 120px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
