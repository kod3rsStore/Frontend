import React from 'react';
import '../Styles/Home.css';

function shoot() {
  alert("Button operational");
}

function Home() {
  return (
    <div className="home">
      <div className="home__item1"><img  src="/products/accesorio 1.jpg" className="home__img" alt="demo"  /></div>
      <div className="home__item2"><button onClick={shoot} className="home__cont2-btn">Sign Up</button></div>
      <div className="home__cont2">
        <div className="home__cont2-sub1"><p>Promotions</p></div>
        <div className="home__cont2-sub2"><img  src="/products/category men.jpg" className="home__img2" alt="demo"  /></div>
        <div className="home__cont2-sub3"><img  src="/products/category women.jpg" className="home__img2" alt="demo"  /></div>
      </div>
    </div>
  );
}

export default Home;