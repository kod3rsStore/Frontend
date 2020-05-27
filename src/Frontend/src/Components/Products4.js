import React from 'react';
import '../Styles/Products4.css';

function shoot() {
  alert("Button operational");
}

function Products4() {
  return (
    <div className="prod4">
      <div className="prod4__item1">Filter by</div>
      <div className="prod4__item2">
        <select class="prod4__item2-filter" name="filter" id="filter">
        <option value="category">Category</option>
        <option value="price">Price</option>
		    </select>
      </div>
      <div className="prod4__item3"><button onClick={shoot} className="prod4__item-btn">Accesories</button></div>
      <div className="prod4__item4"><button onClick={shoot} className="prod4__item-btn">Men</button></div>
      <div className="prod4__item5"><button onClick={shoot} className="prod4__item-btn">Women</button></div>
    </div>
  );
}

export default Products4;