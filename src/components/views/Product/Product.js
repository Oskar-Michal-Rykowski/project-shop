import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Product.module.scss';

const Component = ({ products }) => {
  console.log('product', products);

  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('/') + 1);
  const product = products.find((product) => product.id === id);
  console.log('product', product);

  return (
    <Container maxWidth="xl">
      <div className={styles.baner}>
        <div className={styles.splash}>
          <Typography className={styles.slogan} varian={'h6'}>
            Free delivery from <span className={styles.price}>PLN 100</span>!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

Component.propTypes = {
  products: PropTypes.object,
};

// Dlaczego ownProps.match.params.id nie działa?

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log('ownProps 2', ownProps.match.params.id);
  return {};
};

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export { ProductContainer as Product, Component as ProductComponent };
