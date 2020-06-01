import React from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import Checkout from '../Components/CheckOut';

const CheckoutPage = (data) => {
  return (
    <div className="check-out-page">
        <Header />
        <SearchBar />
        <Checkout {...data}/>
    </div>
  );
};

export default CheckoutPage;