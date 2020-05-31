import React from 'react';
import '../Styles/components/featuredProductCard.css';
import { Link } from 'react-router-dom';

const url_dummy_img = "https://dummyimage.com/300x300/16c706/fff";
const FeaturedProductCard = (props) => {
    const { title, url} = props; 

      return(
      
        <section className="Card-featured-product">
            <div className="Card-featured-container">                
                <div className="Card-featured-image">
                    <img src={url? url : url_dummy_img} alt="our goods"/> 
                </div>
                
                <div className="Card-featured-info">
                    <Link to={{
                                    pathname: '/productdtl',
                                    product:props
                                }}>
                        <div>{title}</div>
                    </Link>
                </div>
            </div>
        </section>
      
    );
  }
  
  export default FeaturedProductCard;