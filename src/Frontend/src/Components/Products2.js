import React from 'react';
import '../Styles/Products2.css';

function shoot() {
  alert("Button operational");
}

function Products1() {
  return (
    <div className="prod1">
      <div className="prod1__item1">Filter by</div>
      <div className="prod1__item2">
        <select class="prod1__item2-filter" name="filter" id="filter">
        <option value="category">Category</option>
        <option value="price">Price</option>
		    </select>
      </div>
      <div className="prod1__item3"><p>Var Products Results</p></div>
      <div className="prod1__cont2">
        <div className="prod1__cont2-sub1"><img  src="/products/ropa mujer 3.jpeg" className="prod1__cont2-sub1-img" alt="demo"  /></div>
        <div className="prod1__cont2-sub2"><p>Var Product name</p></div>
        <div className="prod1__cont2-sub3"><p>var Product characteristics</p></div>
      </div>
      <div className="prod1__cont3">
        <div className="prod1__cont3-sub1"><img  src="/products/ropa mujer 2.jpg" className="prod1__cont2-sub1-img" alt="demo"  /></div>
        <div className="prod1__cont3-sub2"><p>Var Product name</p></div>
        <div className="prod1__cont3-sub3"><p>var Product characteristics</p></div>
      </div>
    </div>
  );
}

export default Products1;