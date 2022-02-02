import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { getCart, removeFromCart } from '../../../redux/cartRedux';
import { Container } from '@mui/material';
import { AmountWidget } from '../AmountWidget/AmountWidget';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';

const Component = ({ amount, cart, removeFromCart }) => {
  const handleTrash = (id) => {
    removeFromCart(id);
  };
  return (
    <Container>
      <h1>Cart</h1>
      {cart.map((order) => (
        <Card key={order.id} className={styles.cart}>
          <CardContent>
            <Typography variant="h5" component="div">
              {order.name}
            </Typography>
            <TextField
              className={styles.input}
              id="outlined-multiline-static"
              label="How do you want to personalize your product?"
              defaultValue={order.clientInput}
              multiline
            />
            <div className={styles.amount}>
              <AmountWidget amount={order.amount} />
            </div>
            <Typography className={styles.price} variant="h6" component="div">
              from {order.priceSingle} PLN
            </Typography>
            <Button
              onClick={() => handleTrash(order.id)}
              className={styles.trash}
            >
              <Icon baseClassName="far" className="fa-trash-alt" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
Component.propTypes = {
  amount: PropTypes.number,
  cart: PropTypes.array,
  removeFromCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (element) => dispatch(removeFromCart(element)),
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export { CartContainer as Cart, Component as CartComponent };
