import React from 'react';
import '../Styles/ProductDtl.css';

import ProductDetailCard from '../Components/productDetailCard'

function shoot() {
  alert("Button operational");
}

function ProductDtl(product) {
  const current_product = product.location.product;
  console.log(current_product)
  return (
    <div className="prodtl">
      <ProductDetailCard {...current_product}/>
    </div>
  );
}

export default ProductDtl;