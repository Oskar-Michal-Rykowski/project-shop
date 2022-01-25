import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ImgsViewer from 'react-images-viewer';
import styles from './Product.module.scss';
import { AmountWidget } from '../../features/AmountWidget/AmountWidget';

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
      <div className={styles.product}>
        {/* <ImgsViewer
          imgs={product.photos.map((photo) => [{ src: photo }])}
          imgs={[
            {
              src: 'https://images.pexels.com/photos/9109343/pexels-photo-9109343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
          ]}
          currImg={0}
          isOpen={true}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={true}
        /> */}
        <div className={styles.photos}>
          {product.photos.map((photo) => (
            <div key={photo} className={styles.photo}>
              <img src={photo} alt="product"></img>
            </div>
          ))}
        </div>
        <div className={styles.content}>
          <h1>{product.name}</h1>
          <p>{product.describtion}</p>
          <AmountWidget amount={2} />
          <h2>from {product.priceFrom} PLN</h2>
          <form>
            <TextField
              id="outlined-multiline-static"
              label="How do you want to personalize your product?"
              multiline
              className={styles.input}
            />
            <Button className={styles.button} variant="contained">
              Add to cart
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

Component.propTypes = {
  products: PropTypes.array,
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
