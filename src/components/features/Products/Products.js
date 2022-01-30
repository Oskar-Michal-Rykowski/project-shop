import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';
import styles from './Products.module.scss';
import { ProductBox } from '../ProductBox/ProductBox';
import { connect } from 'react-redux';
import { fetchProducts, getProducts } from '../../../redux/productsRedux';

const Component = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  });
  // console.log('products', products);

  return (
    <Container className={styles.root}>
      <Typography className={styles.title} variant="h4">
        Products
      </Typography>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductBox
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.priceFrom}
            photo={product.photo}
          />
        ))}
      </div>
    </Container>
  );
};
Component.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export { ProductsContainer as Products, Component as ProductsComponent };
