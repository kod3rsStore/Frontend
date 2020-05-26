import React from 'react';
import '../Styles/Menu1.css';

function shoot() {
  alert("Button operational");
}

function Menu1() {
  return (
    <div className="Menu1">
     <div className="Menu1__item1"><p>Menu</p></div>
      <div className="Menu1__cont2">

        <div className="Menu1__cont2-sub1">
          <label for="menuChoice1">Home</label>
          <input type="radio" id="menuChoice1" name="menu" value="email" checked />
        </div>
        <div className="Menu1__cont2-sub1">
          <label for="menuChoice2">Login</label>	
          <input type="radio" id="menuChoice2"name="menu" value="phone" />
        </div>
        <div className="Menu1__cont2-sub1">
          <label for="menuChoice3">Dark Mode</label>
          <input type="radio" id="menuChoice3" name="menu" value="email" checked />
        </div>
        <div className="Menu1__cont2-sub1">
          <label for="menuChoice4">Cart</label>	
          <input type="radio" id="menuChoice4"name="menu" value="phone" />
        </div>
        <div className="Menu1__cont2-sub1">
          <label for="menuChoice5">Profile</label>	
          <input type="radio" id="menuChoice5"name="menu" value="phone" />
        </div>

      </div>
      <div className="Menu1__item3"><button onClick={shoot} className="Menu1__item3-btn">Continue</button></div>
    </div>
  );
}

export default Menu1;