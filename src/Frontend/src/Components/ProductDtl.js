import React from 'react';
import '../Styles/ProductDtl.css';

function shoot() {
  alert("Button operational");
}

function ProductDtl() {
  return (
    <div className="prodtl">
      <div className="prodtl__item1"><p>Var Product Name</p></div>
      <div className="prodtl__item2"><img  src="/products/accesorio 1.jpg" className="prodtl__item2-img" alt="demo"  /></div>
      <div className="prodtl__item3"><img  src="/img/cuantityLgt.png" className="prodtl__item3-img" alt="demo"  /></div>
      <div className="prodtl__item4"><button onClick={shoot} className="prodtl__btn">Add to cart</button></div>
      <div className="prodtl__item4"><button onClick={shoot} className="prodtl__btn">Buy now</button></div>
    </div>
  );
}

export default ProductDtl;