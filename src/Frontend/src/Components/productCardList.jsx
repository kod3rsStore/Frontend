import React from 'react';
import '../Styles/components/productCardList.css';
import { Link } from 'react-router-dom';

const ProductCardList = (props) => {
    const { title, description, cost, url_photo, id} = props; 
    
    function handleHandleAddToCartClick(e) {
        e.preventDefault();
        console.log('The link was clicked.'+id);

      }

      return(
      
        <section className="Card-product">
            <div className="Card-container">
                <Link to="/productDetail">
                    <div className="Card-image">
                        <img src={url_photo} alt="our goods"/> 
                    </div>
                    <div className="Card-info">
                        <div>{title}</div>
                        <div>{cost}</div>
                    </div>
                </Link>
                <div className="Card-add-to-cart">
                        <button onClick={handleHandleAddToCartClick}>Add to cart</button>
                </div>
            </div>
        </section>
      
    );
  }
  
  export default ProductCardList;