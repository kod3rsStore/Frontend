import React from 'react';
import '../Styles/User2.css';

function shoot() {
  alert("Button operational");
}

function User2() {
  return (
    <div className="User2">
      <div className="User2__item1"><p>User Profile</p></div>
      <div className="User2__cont2">
      <form onSubmit={shoot}>
        <div>Edit account</div>
        <div className="User2__sub3"><input type="text" placeholder="User name..." /></div>
        <div className="User2__sub3"><input type="text" placeholder="Password..." /></div>
        <div className="User2__sub3"><input type="text" placeholder="User adress..." /></div>
        <div className="User2__sub3"><input type="text" placeholder="Credit card number..." /></div>
        <div className="User2__sub3"><button className="User2__sub4-btn">Submit</button></div>
      </form>
      </div>
    </div>
  );
}

export default User2;