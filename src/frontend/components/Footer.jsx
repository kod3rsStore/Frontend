import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.styl';

import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import facebook from '../assets/icons/facebook.png';

const Footer = () => (
  <div className='Footer'>
    <div className='Footer__navContainer'>
      <Link to='./'>Términos de uso</Link>
      <Link to='./'>Declaración de privacidad</Link>
      <Link to='./'>Centro de ayuda</Link>
    </div>
    <div className='Footer__socialContainer'>
      <span>Follow us:</span>
      <Link to='./'>
        <img src={instagram} alt='instagram icons' />
      </Link>
      <Link to='./'>
        <img src={twitter} alt='twitter icons' />
      </Link>
      <Link to='./'>
        <img src={facebook} alt='facebook icons' />
      </Link>
    </div>

  </div>
);

export default Footer;
