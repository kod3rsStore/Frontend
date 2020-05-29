import React from 'react';
import '../Styles/components/featuredProductCard.css';
import { Link } from 'react-router-dom';

const FeaturedProductCard = (props) => {
    const { title, url_photo} = props; 

      return(
      
        <section className="Card-featured-product">
            <div className="Card-featured-container">                
                <div className="Card-featured-image">
                    <img src={url_photo} alt="our goods"/> 
                </div>
                
                <div className="Card-featured-info">
                    <Link to="/productDetail">
                        <div>{title}</div>
                    </Link>
                </div>
            </div>
        </section>
      
    );
  }
  
  export default FeaturedProductCard;