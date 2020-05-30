import React from 'react';
import '../Styles/Home.css';
import Button from './Atoms/Button';


function shoot() {
  alert("Button operational");
}

function Home() {
  return (
    <div className="home">
      <div className="home__item1"><img  src="/products/accesorio 1.jpg" className="home__img" alt="demo"  /></div>
      <div className="home__item2"><Button clic={()=>shoot()} name={'Sign Up'} /></div>
      <div className="home__cont2">
        <div className="home__cont2-sub1"><p>Runway</p></div>
        <div className="home__cont2-sub2"><img  src="/products/category men.jpg" className="home__img2" alt="demo"  /></div>
        <div className="home__cont2-sub3"><img  src="/products/category women.jpg" className="home__img2" alt="demo"  /></div>
      </div>
    </div>
  );
}

export default Home;