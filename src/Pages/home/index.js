import React from 'react';
import Header from '../../components/Header';
import MainScreen from '../../layout/MainScreen';
import Main from './../../components/Main';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <MainScreen>
      <Header />
      <hr />
      <Main />
      <Footer />
    </MainScreen>
  );
};
export default Home;
