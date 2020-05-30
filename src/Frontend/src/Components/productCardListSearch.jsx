import React  from 'react';
import '../Styles/components/cardProductsSearch.css';
import { Link } from 'react-router-dom';

const url_dummy_img = "https://dummyimage.com/300x300/16c706/fff";

const ProductCardSearchList = (props) => {
    const { title, description, cost, url, id_products} = props; 
    let new_description;
        if(description.length > 30){
            new_description = description.substring(0, 30) + "...";
        }

      return(
      
        <section className="Card-product-search">
            <div className="Card-search__container">
                    <div className="Card-search__image">
                        <img src={url? url+'png':url_dummy_img} alt="our goods"/> 
                    </div>
                    <div className="Card-search__info">
                        <Link to={{
                                    pathname: '/productdtl',
                                    product:props
                                }}><div>{title}</div></Link>
                        <div>{new_description}</div>
                        <div>{cost} MXN</div>
                    </div>
            </div>
        </section>
      
    );
  }
  
  export default ProductCardSearchList;