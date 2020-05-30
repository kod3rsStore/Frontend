
import React, {useState} from 'react';
import '../Styles/components/productDetailCard.css';
import Button from './Atoms/Button/index';

const url_dummy_img = "https://dummyimage.com/300x300/16c706/fff";
const FeaturedProductCard = (props) => {
    const [quantity,setQuantity]= useState(1);
    const { title, url, cost, description, id_products} = props; 

    const hadleCount = (event) => {  
        setQuantity(Number(event.target.value));
      }
    
    const addCount = () => {
        setQuantity(quantity + 1)
    }
    const lessCount = () => {
        if(quantity !== 1){
            setQuantity(quantity - 1)
        }
    }

    function shoot() {
        alert("Button operational");
      }

      return(
        <section className="Card-detail-product">
            <div className="Card-detail-container">
                <div className="Card-detail__title">{title}</div>                
                <div className="Card-detail__image">
                    <img src={url? url : url_dummy_img} alt="our goods"/> 
                </div>
                <div className="Card-detail__price">{cost} MXN</div>
                <div className="Card-detail__description">{description}</div>
                <div className="SpinnerAtom">
                    <button onClick={() => lessCount()} className="material-icons SpinnerAtom__btn1">delete</button>
                    <input type="text" id='result' value={quantity} className="SpinnerAtom__num" readOnly onChange={hadleCount} />
                    <button onClick={() => addCount()} className="material-icons SpinnerAtom__btn2">add</button>
                </div>
                <Button clic={()=>shoot()} name={'Add to cart'} />
                <Button clic={()=>shoot()} name={'Buy Now'} />
            </div>
        </section>      
    );
  }
  
  export default FeaturedProductCard;