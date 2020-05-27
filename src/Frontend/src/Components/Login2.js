import React from 'react';
import '../Styles/Login2.css';

function shoot() {
  alert("Button operational");
}

function Login2() {
  return (
    <div className="login1">
      <div className="login1__item1"><p>Welcome</p></div>
      <div className="login1__cont2">
      <form onSubmit={shoot}>
        <div>Create account</div>
        <div className="login1__sub3"><input type="text" placeholder="User name..." /></div>
        <div className="login1__sub3"><input type="text" placeholder="Password..." /></div>
        <div className="login1__sub3"><button className="login1__sub4-btn">Submit</button></div>
        <div className="login1__sub3"><p>By clicking the submit button I declare that I have read and accept the terms and conditions for this product</p></div>
      </form>
      </div>
    </div>
  );
}

export default Login2;