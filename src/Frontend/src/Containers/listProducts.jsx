import React from 'react';
import ProductCardList from '../Components/productCardList.jsx';
import '../Styles/components/listProducts.css';
import '../Styles/components/media.css';
//import HeaderCustomer from '../components/HeaderCustomer';


const listProducts = () => {
    const initialState = {
        "products":[
          {"id":1,"title":"leather shoes black","cost":"67.00 USD","description":"Fusce posuere felis sed lacus.","url_photo":"https://dummyimage.com/300x300/2476a3/1b46da.png"},
          {"id":2,"title":"leather shoes white","cost":"66.00 USD","description":"Fusce posuere felis sed lacus.","url_photo":"https://dummyimage.com/300x300/6d93a8/2b46db.png"},
          {"id":3,"title":"leather shoes blue","cost":"65.00 USD","description":"Fusce posuere felis sed lacus.","url_photo":"https://dummyimage.com/300x300/4455c2/3b46dc.png"},
          {"id":4,"title":"leather shoes green","cost":"64.00 USD","description":"Fusce posuere felis sed lacus.","url_photo":"https://dummyimage.com/300x300/b733bd/4b46dd.png"},
          {"id":5,"title":"leather shoes gray","cost":"63.00 USD","description":"Fusce posuere felis sed lacus.","url_photo":"https://dummyimage.com/300x300/2476a3/1b46da.png"},
          {"id":6,"title":"leather shoes yellow","cost":"62.00 USD","description":"Fusce posuere felis sed lacus.","url_photo":"https://dummyimage.com/300x300/6d93a8/2b46db.png"},
          {"id":7,"title":"leather shoes pink","cost":"61.00 USD","description":"Fusce posuere felis sed lacus.","url_photo":"https://dummyimage.com/300x300/4455c2/3b46dc.png"},
          {"id":8,"title":"leather shoes orange","cost":"60.00 USD","description":"Fusce posuere felis sed lacus.","url_photo":"https://dummyimage.com/300x300/b733bd/4b46dd.png"},
        ]
      }
  return (
    <div className="products-list-container">
        {initialState.products.map( item => 
          <ProductCardList key={item.id} {...item} /> 
        )} 
    </div>
  );
};

export default listProducts;
