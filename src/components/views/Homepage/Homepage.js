import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import clsx from "clsx";
import styles from './Homepage.module.scss';
import { Products } from '../../features/Products/Products';

const Component = () => (
  <Container maxWidth="xl">
    <div className={styles.baner}>
      <img
        src={
          'https://images.pexels.com/photos/2860807/pexels-photo-2860807.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        }
        alt="e-shop-baner"
      ></img>
      <div className={styles.splash}>
        <Typography className={styles.slogan} variant="h3">
          Watch how your time flows!
        </Typography>
        <Button className={styles.button} variant="contained">
          Browse
        </Button>
      </div>
    </div>
    <Products />
  </Container>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Homepage, Component as HomepageComponent };
