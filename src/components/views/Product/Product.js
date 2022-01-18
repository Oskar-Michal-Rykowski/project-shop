import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Product.module.scss';
import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';

const Component = ({ product }) => {
  console.log('product', product);
  return <h1>PRODUCT</h1>;
};

Component.propTypes = {
  product: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  return {
    product: getProductById(state, ownProps.match.params.id),
  };
};

const mapDispatchToProps = (state, ownProps) => {
  console.log('ownProps 2', ownProps);
  return {};
};

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export { ProductContainer as Product, Component as ProductComponent };
