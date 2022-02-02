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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addToCart } from '../../../redux/cartRedux';

const Component = ({ products, addToCart }) => {
  console.log('product', products);

  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('/') + 1);
  const product = products.find((product) => product._id === id);
  console.log('product', product);

  const randomNumber = () => {
    return '_' + Math.random().toString(36);
  };

  const [state, setState] = useState({
    data: {
      id: randomNumber(),
      name: product.name,
      amount: 1,
      priceSingle: product.priceFrom,
      price: product.priceFrom,
    },
  });

  const handleAmount = (event) => {
    const newPrice = event.target.value * product.priceFrom;
    console.log('new price', newPrice);
    setState({
      data: {
        ...state.data,
        amount: event.target.value,
        price: newPrice,
      },
    });
  };

  const handleText = (event) => {
    setState({
      data: {
        ...state.data,
        clientInput: event.target.value,
      },
    });
  };

  const handleSubmit = () => {
    console.log('state', state.data);
    addToCart(state.data);
  };

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
          {/* <AmountWidget
            onChange={(e) => handleAmount(e)}
            amount={state.data.amount}
          /> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.data.amount}
              label="Amount"
              onChange={handleAmount}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <h2>from {state.data.price} PLN</h2>
          <form>
            <TextField
              id="outlined-multiline-static"
              label="How do you want to personalize your product?"
              multiline
              className={styles.input}
              onChange={handleText}
            />
            <Button
              onClick={() => handleSubmit()}
              className={styles.button}
              variant="contained"
            >
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

export { ProductContainer as Product, Component as ProductComponent };
