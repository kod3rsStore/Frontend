import React from 'react';
import '../Styles/ProductDtl.css';
import Button from './Atoms/Button';
import Banner from './Atoms/Banner';
import Spinner from './Atoms/Spinner';

function shoot() {
  alert("Button operational");
}

function ProductDtl() {
  return (
    <div className="prodtl">
      <Banner name={'Var Product Name'} />
      <div className="prodtl__item2"><img  src="/products/accesorio 1.jpg" className="prodtl__item2-img" alt="demo"  /></div>
      <Spinner />
      <div className="prodtl__item4"><Button clic={()=>shoot()} name={'Add to cart'} /></div>
      <div className="prodtl__item4"><Button clic={()=>shoot()} name={'Buy Now'} /></div>
    </div>
  );
}

export default ProductDtl;