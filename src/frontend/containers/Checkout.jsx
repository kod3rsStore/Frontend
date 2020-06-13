/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import StripeCheckout from 'react-stripe-checkout';
import { deleteFromCart, emptyCart } from '../actions';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = (props) => {
  const { cart } = props;

  const handleDeleteElement = (itemId) => {
    props.deleteFromCart(itemId);
  };

  function handleToken(token) {
    //const payload = { stripeToken: token,
    //  stripeEmail: token.email,
    //  description: 'Compra en Kod3rsstore.com',
    //};
    //Esto se debe trabajar hasta que se este trabajando en el ssr
    //props.sendPayment(token.id, payload);
  }

  return (
    <>
      <Header />
      <div className='Checkout'>
        <div className='Checkout-content'>
          {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
          {cart.map(item => (
            <div className='Checkout-item' key={item.key}>
              <div className='Checkout-element'>
                <h4>{item.title}</h4>
                <span>
                  $
                  {item.price}
                </span>
              </div>
              <i className='fas fa-trash-alt' onClick={() => handleDeleteElement(item.key)} />

            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className='Checkout-sidebar'>
            <h3>Precio Total:</h3>
            <h4>
              $
              {cart.reduce((suma, item) => (suma + item.price), 0)}
            </h4>
          </div>
        )}
      </div>
      <div className='Checkout-payments'>
        <StripeCheckout
          stripeKey='pk_test_Qy6uIqE3a6pG8GzGH4Xx1QCr00SK89OIVE'
          token={handleToken}
          amount={cart.reduce((suma, item) => (suma + item.price), 0) * 100}
          name='Kod3rsstore.com'
        />

      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  deleteFromCart,
  emptyCart,
  //sendPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
