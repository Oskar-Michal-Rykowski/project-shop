import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './ProductBox.module.scss';

const Component = ({ name, price, photo, id }) => {
  return (
    <Card id={id} className={styles.product}>
      <Link to={`products/${id}`}>
        <CardActionArea>
          <CardMedia
            className={styles.photo}
            component="img"
            image={photo}
            alt="green iguana"
          />
          <CardContent className={styles.content}>
            <Typography
              className={styles.name}
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography
              className={styles.price}
              variant="body2"
              color="text.secondary"
            >
              PLN {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
Component.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  photo: PropTypes.string,
  id: PropTypes.string,
};

export { Component as ProductBox, Component as ProductBoxComponent };
