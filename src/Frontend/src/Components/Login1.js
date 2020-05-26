import React from 'react';
import '../Styles/Login1.css';

function shoot() {
  alert("Button operational");
}

function Login1() {
  return (
    <div className="login1">
      <div className="login1__item1"><p>Welcome</p></div>
      <div className="login1__cont2">
      <form onSubmit={shoot}>
        <div className="login1__sub1">
          <input type="radio" id="contactChoice1" name="contact" value="email" checked />
          <label for="contactChoice1">Sing in</label>
        </div>
        <div className="login1__sub1">
          <input type="radio" id="contactChoice2"name="contact" value="phone" />
          <label for="contactChoice2">Sing up</label>	
        </div>
        <div className="login1__sub3"><input type="text" placeholder="User name..." /></div>
        <div className="login1__sub3"><button className="login1__sub4-btn">Submit</button></div>
        <div className="login1__sub3"><p>By clicking the submit button I declare that I have read and accept the terms and conditions for this product</p></div>
      </form>
      </div>
    </div>
  );
}

export default Login1;