import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/containers/NotFound.styl';

const NotFound = () => (
  <>
    <Header />
    <section className='not-found__container'>
      <div className='animated not-found'>404</div>
      <div className='not-found__text'>Pagina no encontrada</div>
    </section>
    <Footer />
  </>

);
export default NotFound;
