import React, { useState, useEffect } from 'react';
import '../Styles/Products2.css';
import ListProductsSearch from '../Containers/listProductsSearch'
import Header from '../Components/Header';
import SearchBar from './SearchBar';

const api_search_products = 'https://api.kod3rsstore.com/api/products/search/';

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

function Products1(word) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const current_word = word.location.word;

  useEffect(() => {
    setProducts([]);
    setIsLoaded(false)
    fetch(api_search_products+current_word)
      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
        }
      )
  }, [current_word])

  return (
    <div className="productsResultSearch">
      <Header />
      <SearchBar />
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
      {
        (isLoaded && products.body.length>0) ?
          <ListProductsSearch {...products}/>:
          <div className="notFound">We have not found what you are looking for, try again</div>
      }
    </div>
  );
}

export default Products1;