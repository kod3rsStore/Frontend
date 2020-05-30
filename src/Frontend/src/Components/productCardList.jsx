import React from 'react';
import '../Styles/components/productCardList.css';
import { Link } from 'react-router-dom';

const url_dummy_img = "https://dummyimage.com/300x300/16c706/fff";

const ProductCardList = (props) => {
    const { title, description, cost, url, id_products} = props; 
    
    function handleHandleAddToCartClick(e) {
        e.preventDefault();
        console.log('The link was clicked.'+id_products);

      }

      return(
      
        <section className="Card-product">
            <div className="Card-container">
                    <div className="Card-image">
                        <img src={url? url+'png':url_dummy_img} alt="our goods"/> 
                    </div>
                    <Link to={{
                                    pathname: '/productdtl',
                                    product:props
                                }}>
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