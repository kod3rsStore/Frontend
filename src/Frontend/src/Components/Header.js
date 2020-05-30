import React from 'react';
import '../Styles/Header.css';

function Header() {
  return (
    <div className="Headr">
        <div className="Headr__item1"><a href="/menu1" target="_self"><img src="/img/menuLgt.png" className="iconMenu" alt="twitter" /></a></div>
        <div className="Headr__item2"><img id="logoKod3rs" src="/img/logo1.png" alt=""/></div>
        <a href="https://google.com" className="Headr__item3">Home</a>
        <a href="https://google.com" className="Headr__item3">Login</a>
        <a href="https://google.com" className="Headr__item3">Dark</a>
        <a href="https://google.com" className="Headr__item3">Profile</a>
        <div className="Headr__item4"><img id="Cart" src="/img/cartLgt1.png" alt="" /></div>
        <div className="Headr__item5">
            <div className="wrapper"> 
                <div className="searchbtn"><img id="glass" src="/img/glass.png" alt=""/></div>
                <div><input type="text" className="input" placeholder="Buscar" /></div>
            </div>
        </div>
    </div>
  );
}

export default Header;