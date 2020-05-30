import React from 'react';
import ProductCardList from '../Components/productCardList.jsx';
import '../Styles/components/listProducts.css';
import '../Styles/components/media.css';
//import HeaderCustomer from '../components/HeaderCustomer';


const listProducts = (products) => {
  return (
    <div className="products-list-container">
        {products.body.map( item => 
          <ProductCardList key={item.id_products} {...item} /> 
        )} 
    </div>
  );
};

export default listProducts;
