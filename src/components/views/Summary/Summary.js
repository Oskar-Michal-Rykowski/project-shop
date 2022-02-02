import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux';
import Container from '@mui/material/Container';

import styles from './Summary.module.scss';

import { addToCart } from '../../../redux/cartRedux';
import { Cart } from '../../features/Cart/Cart';

const Component = ({ products, addToCart }) => {
  return (
    <Container maxWidth="xl">
      <Cart></Cart>
    </Container>
  );
};

Component.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

// Dlaczego ownProps.match.params.id nie działa?

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (element) => dispatch(addToCart(element)),
});

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export { ProductContainer as Summary, Component as SummaryComponent };
