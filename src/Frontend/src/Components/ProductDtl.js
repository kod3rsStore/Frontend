import React from 'react';
import '../Styles/ProductDtl.css';

import ProductDetailCard from '../Components/productDetailCard'
import Header from '../Components/Header';

function shoot() {
  alert("Button operational");
}

function ProductDtl(product) {
  const current_product = product.location.product;
  console.log(current_product)
  return (
    <div className="prodtl">
      <Header />
      <ProductDetailCard {...current_product}/>
    </div>
  );
}

export default ProductDtl;