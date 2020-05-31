import React from 'react';
import { connect } from 'react-redux'
import '../Styles/Cart2.css';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar'
import ShoppingCart from '../Containers/shoppingCart';



function Cart2(shopping_cart) {
  
  function shoot() {
    
  }

  function getTotal(total, product){
    return total + (product.cost*product.pcs); 
  }
  const totalCost = shopping_cart.shopping_cart.reduce(getTotal,0)

  return (
    <div className="Cart2">
      <Header />
      <SearchBar />
      <div className="Cart-info">
        {shopping_cart.shopping_cart.length > 0 &&
          <div className="Cart-total-cost">
            <div>Total</div>
            <div className="Cart-cost">{totalCost} MXN</div>
          </div>
        }
        <div>
          {shopping_cart.shopping_cart.length > 0 ?
             <p>Products in your cart-->   {shopping_cart.shopping_cart.length}</p> :
             <p>Your cart is empty, for now :)</p>
          }
        </div>        
      </div>
      <div className="Cart2__item2"><button onClick={shoot} className="Cart2__item2-btn">Buy now</button></div>
      { shopping_cart.shopping_cart.length > 0 &&
        <ShoppingCart  {...shopping_cart} />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shopping_cart: state.shopping_cart,
  };
};

export default connect(mapStateToProps, null)(Cart2);