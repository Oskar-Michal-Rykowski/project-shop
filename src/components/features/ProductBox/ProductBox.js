import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styles from './ProductBox.module.scss';

const Component = () => {
  return (
    <Card className={styles.product}>
      <CardActionArea>
        <CardMedia
          className={styles.photo}
          component="img"
          image="https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            PLN 145
          </Typography>
        </CardContent>
      </CardActionArea>
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
