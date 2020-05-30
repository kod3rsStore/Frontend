import React from 'react';
import '../Styles/Products2.css';
import ListProductsSearch from '../Containers/listProductsSearch'

const dataProduct = {
  body: [
    {
      title: "Leather shoes, to go wherever you want",
      url: "https://dummyimage.com/300x300/16c706/fff",
      description: "hola mundo cruel y despiadado, dame una pista, una señal, algo!!!!",
      id_products: 1,
      cost: 120,
    },
    {
      title: "Leather shoes, to go wherever you want",
      url: "https://dummyimage.com/300x300/16c706/fff",
      description: "hola mundo cruel y despiadado, dame una pista, una señal, algo!!!! -:)",
      id_products: 2,
      cost: 150,
    }
  ]
}

function Products1() {
  return (
    <div>
      <div className="prod1">
        <div className="prod1__item1">Filter by</div>
        <div className="prod1__item2">
          <select className="prod1__item2-filter" name="filter" id="filter">
          <option value="category">Category</option>
          <option value="price">Price</option>
          </select>
        </div>
        <div className="prod1__item3"><p>Var Products Results</p></div>
      </div>
      <ListProductsSearch {...dataProduct}/>
    </div>
  );
}

export default Products1;