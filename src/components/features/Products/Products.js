import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
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
            price={product.price}
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
