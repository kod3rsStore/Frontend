import React from 'react';
import '../Styles/Cart2.css';

function shoot() {
  alert("Button operational");
}

function Cart2() {
  return (
    <div className="Cart2">
      <div className="Cart2__item1"><p>Total $var</p></div>
      <div className="Cart2__item2"><button onClick={shoot} className="Cart2__item2-btn">Buy now</button></div>
      <div className="Cart2__cont2">
        <div className="Cart2__cont2-sub1"><img  src="/products/ropa hombre 2.jpeg" className="Cart2__cont2-sub1-img" alt="demo"  /></div>
        <div className="Cart2__cont2-sub2"><p>Var Product name</p></div>
        <div className="Cart2__cont2-sub3"><p>var Product characteristics</p></div>
      </div>
      <div className="Cart2__item4"><img  src="/img/cuantityLgt.png" className="Cart2__item4-img" alt="demo"  /></div>
      <div className="Cart2__cont2">
        <div className="Cart2__cont2-sub1"><img  src="/products/ropa hombre 2.jpeg" className="Cart2__cont2-sub1-img" alt="demo"  /></div>
        <div className="Cart2__cont2-sub2"><p>Var Product name</p></div>
        <div className="Cart2__cont2-sub3"><p>var Product characteristics</p></div>
      </div>
      <div className="Cart2__item4"><img  src="/img/cuantityLgt.png" className="Cart2__item4-img" alt="demo"  /></div>
    </div>
  );
}

export default Cart2;