import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Headr">
        <div className="Headr__item1"><a href="/menu1" target="_self"><img src="/img/menuLgt.png" className="iconMenu" alt="twitter" /></a></div>
        <div className="Headr__item2"><a href="/home" target="_self"><img id="logoKod3rs" src="/img/logo1.png" alt=""/></a></div>
        <a href="https://google.com" className="Headr__item3">Home</a>
        <a href="https://google.com" className="Headr__item3">Login</a>
        <a href="https://google.com" className="Headr__item3">Dark</a>
        <a href="https://google.com" className="Headr__item3">Profile</a>
        <div className="Headr__item4"><img id="Cart" src="/img/cartLgt1.png" alt="" /></div>
    </div>
  );
}

export default Header;