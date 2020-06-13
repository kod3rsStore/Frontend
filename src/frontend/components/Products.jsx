import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Header from './Header';
import Footer from './Footer';

import '../styles/components/Products.styl';

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
  };

  return (
    <>
      <Header />
      <div className='Products'>
        <div className='Products-items'>
          {products.map(product => (
            <div className='Products-item' key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className='Products-item-info'>
                <h2>
                  {product.title}
                  <span>
                    $
                    {product.price}
                  </span>
                </h2>
                <p>{product.description}</p>
                <button type='button' onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
                <Link to={{
                  pathname: `/productDetail/${product.id}`,
                  product: props,
                }}
                >
                  <button type='button'>Ver Detalle</button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
