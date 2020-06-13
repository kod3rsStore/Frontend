import React, {useState, useEffect}  from 'react';
import { connect } from 'react-redux'
import { updateProduct, deleteProduct, addProduct } from '../actions/index';
import '../Styles/components/cartProductCard.css';
import { Link } from 'react-router-dom';

const url_dummy_img = "https://dummyimage.com/300x300/16c706/fff";

const CartProductCard = (props) => {
    const {pcs, title, cost, url, id_products} = props; 
    const [quantity,setQuantity]= useState(pcs);

    function updateQty(){
        props.updateProduct({id_products, pcs:quantity})
    }
    const hadleCount = (event) => {  
        setQuantity(Number(event.target.value));
      }

    function addCount(){
        setQuantity(quantity + 1)
    }
    const lessCount = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
        }
    }

    function handleDelete(e){
        props.deleteProduct(props.id_products);
    }

    useEffect(() => {
        updateQty();
    }, [quantity])

      return(
      
        <section className="Card-product-cart">
            <div className="Card-cart__container">
                <div className="Card-cart__image">
                    <img src={url? url:url_dummy_img} alt="our goods"/> 
                </div>
                <div className="Card-cart__info">
                    <Link to={{
                                pathname: '/productdtl',
                                product:props
                            }}   className="Card-cart__title"><div>{title}</div></Link>
                    <div>{cost} MXN</div>
                </div>
                <div className="Card-cart__delete"><button onClick={handleDelete} className="material-icons">delete</button></div>
            </div>
            <div className="SpinnerAtom">
                <button onClick={() => lessCount()} className="material-icons SpinnerAtom__btn1">remove</button>
                <input type="text" id='result' value={quantity} className="SpinnerAtom__num" readOnly onChange={hadleCount} />
                <button onClick={addCount} className="material-icons SpinnerAtom__btn2">add</button>
            </div>    
        </section>
      
    );
  }

  const mapDispatchToProps = {
    updateProduct,
    deleteProduct,
    addProduct,
  };
  export default connect(null, mapDispatchToProps)(CartProductCard);
