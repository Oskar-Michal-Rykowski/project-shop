import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';
import styles from './Products.module.scss';
import { ProductBox } from '../ProductBox/ProductBox';
import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux';

const Component = ({ products }) => {
  return (
    <Container className={styles.root}>
      <Typography className={styles.title} variant="h4">
        Products
      </Typography>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductBox
            key={product.id}
            id={product.id}
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
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

const mapDispatchToProps = () => ({});

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export { ProductsContainer as Products, Component as ProductsComponent };
