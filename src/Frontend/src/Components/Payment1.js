import React from 'react';
import '../Styles/Payment1.css';

function shoot() {
  alert("Button operational");
}

function Payment1() {
  return (
    <div className="pay1">
      <div className="pay1__item1"><p>Total $var</p></div>
      <div className="pay1__item2"><button onClick={shoot} className="pay1__item2-btn">Buy now</button></div>
      <div className="pay1__cont2">
        <div className="pay1__cont2-sub1"><img  src="/products/ropa hombre 2.jpeg" className="pay1__cont2-sub1-img" alt="demo"  /></div>
        <div className="pay1__cont2-sub2"><p>Var Product name</p></div>
        <div className="pay1__cont2-sub3"><p>var Product characteristics</p></div>
      </div>
      <div className="pay1__item4"><img  src="/img/cuantityLgt.png" className="pay1__item4-img" alt="demo"  /></div>
    </div>
  );
}

export default Payment1;