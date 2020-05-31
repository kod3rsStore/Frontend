import React from 'react';
import CartProductCard from '../Components/CartProductCard';

const ShoppingCart = (products) => {
  return (
    <div className="shopping-cart__container">
        {products.shopping_cart.map( item => 
          <CartProductCard key={item.id_products} {...item} /> 
        )} 
    </div>
  );
};

export default ShoppingCart;