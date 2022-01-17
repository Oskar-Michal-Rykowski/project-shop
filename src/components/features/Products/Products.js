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
// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';
import styles from './Products.module.scss';

const Component = () => {
  return (
    <Container maxWidth="xl">
      <Typography className={styles.title} variant="h4">
        Products
      </Typography>
      <div className={styles.products}>Products</div>
    </Container>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Products, Component as ProductsComponent };
