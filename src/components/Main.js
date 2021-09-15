import React from 'react';
import styled from 'styled-components';

import '../App.css';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import Banner from './Banner';

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Wrapper>
  );
};
export default Home;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
