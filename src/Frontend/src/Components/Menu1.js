import React from 'react';
import '../Styles/Menu1.css';
import Button from './Atoms/Button';
import Banner from './Atoms/Banner';

function shoot() {
  alert("Button operational");
}

function Menu1() {
  return (
    <div className="Menu1">
    <Banner name={'Menu'} />
    <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Home'} /></div>
    <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Login'} /></div>
    <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Dark Mode'} /></div>
    <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Cart'} /></div>
    <div className="Menu1__item3"><Button clic={()=>shoot()} name={'Profile'} /></div>
    </div>
  );
}

export default Menu1;