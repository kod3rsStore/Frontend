import React from 'react';
import ProductCardListSearch from '../Components/productCardListSearch.jsx';

const ListProductsSearch = (products) => {
  return (
    <div className="products-search-list__container">
        {products.body.map( item => 
          <ProductCardListSearch key={item.id_products} {...item} /> 
        )} 
    </div>
  );
};

export default ListProductsSearch;