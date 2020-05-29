import React, { useState, useEffect} from 'react';
import '../Styles/Home.css';
import Button from './Atoms/Button';
//import Banner from './Atoms/Banner';
import FeaturedProduct from '../Components/featuredProductCard';
import LatesProductsList from '../Containers/listProducts';

const api_latest_products = 'http://127.0.0.1:3006/api/products/latest?q='

function shoot() {
  alert("Button operational");
}

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(api_latest_products+'10')
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
  }, [])
  const dataProduct = {
    title: "Leather shoes, to go wherever you want",
    url: "https://dummyimage.com/300x300/16c706/fff"
  }

  return (
    <div className="home">
      {isLoaded
        ? <div> <FeaturedProduct {...products.body[2]}/> </div>
        : <div> <FeaturedProduct {...dataProduct}/> </div>
      }
      <div className="home__item2"><Button clic={()=>shoot()} name={'Sign Up'} /></div>
      <div className="home__cont2">
        <div className="home__cont2-sub1"><p>Promotions</p></div>
      </div>
      {isLoaded &&
         <LatesProductsList {...products} />
      }
    </div>
  );
}

export default Home;