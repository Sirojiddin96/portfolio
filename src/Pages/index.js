import React from 'react';
import Header from '../components/Header';
import Home from '../components/Main';
import Footer from '../components/Footer';
import MainScreen from '../layout/MainScreen';

const Main = () => {
  return (
    <MainScreen>
      <Header />
      <hr />
      <Home />
      <Footer />
    </MainScreen>
  );
};

export default Main;
