import React from 'react';
import Promotions from '../components/Promotions';
import Categories from '../components/Categories';
import '../styles/containers/Home.styl';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <>
      <Header />
      <div className='Main'>
        <Promotions />
        <Categories />
      </div>
      <Footer />
    </>
  );
};

export default Home;
