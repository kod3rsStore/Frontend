/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

import ProductDetailCard from '../components/ProductDetailCard';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = (props) => {
  const { id } = props.match.params;
  const { products } = props;
  const product = products.filter(item => item.id === id);
  return (
    <>
      <Header />
      <ProductDetailCard {...product} />
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(ProductDetail);
