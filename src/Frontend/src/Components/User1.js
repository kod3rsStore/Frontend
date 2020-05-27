import React from 'react';
import '../Styles/User1.css';

function shoot() {
  alert("Button operational");
}

function User1() {
  return (
    <div className="User1">
     <div className="User1__item1"><p>Menu</p></div>
      <div className="User1__cont2">

        <div className="User1__cont2-sub1">
          <label for="menuChoice1">User Name<br/>var name</label>
          <input type="radio" id="menuChoice1" name="menu" value="email" checked />
        </div>
        <div className="User1__cont2-sub1">
          <label for="menuChoice2">User Adress<br/>var adress</label>	
          <input type="radio" id="menuChoice2"name="menu" value="phone" />
        </div>
        <div className="User1__cont2-sub1">
          <label for="menuChoice3">Credit card number<br/>1234-5678-1234-5678</label>
          <input type="radio" id="menuChoice3" name="menu" value="email" checked />
        </div>
        <div className="User1__cont2-sub1">
          <select class="User1__filter" name="filter" id="filter">
            <option value="paypal">Paypal</option>
            <option value="stripe">Stripe</option>
          </select>
        </div>
      </div>
      <div className="User1__item3"><button onClick={shoot} className="Menu1__item3-btn">Continue</button></div>
    </div>
  );
}

export default User1;