import React from 'react';
import '../Styles/Cart1.css';

function shoot() {
  alert("Button operational");
}

function Cart1() {
  return (
    <div className="cart">
      <div className="cart__item1"><img  src="/img/krt.png" className="cart__img" alt="demo"  /></div>
      <div className="cart__item2"><p>Your cart is empty</p></div>
      <div className="cart__item3"><button onClick={shoot} className="cart__item3-btn">Sign Up</button></div>
      <div className="cart__item4"><button onClick={shoot} className="cart__item3-btn">Sign In</button></div>
    </div>
  );
}

export default Cart1;