import React from 'react';
import Header from '../../components/Header';
import MainScreen from '../../layout/MainScreen';

const Home = (props) => {
  return (
    <MainScreen>
      <Header />
      {props.children}
    </MainScreen>
  );
};
export default Home;
