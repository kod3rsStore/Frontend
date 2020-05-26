import React from 'react';
import '../Styles/Products6.css';

function shoot() {
  alert("Button operational");
}

function Products6() {
  return (
    <div className="prod">
      <div className="prod__item1">Filter by</div>
      <div className="prod__item2">
        <select class="prod__item2-filter" name="filter" id="filter">
        <option value="category">Category</option>
        <option value="price">Price</option>
		    </select>
      </div>
      <div className="prod__cont2">
        <div className="prod__sub1">Write the amounts</div>
        <form onSubmit={shoot}>
          <div className="prod__sub2"><input type="text" placeholder="Lowest price..." /></div>
          <div className="prod__sub2"><input type="text" placeholder="Highest price..." /></div>
          <button className="prod__sub2-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Products6;