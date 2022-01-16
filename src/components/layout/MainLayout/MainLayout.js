import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import styles from './MainLayout.module.scss';

const Component = ({ className, children }) => (
  <div>
    <h1>MainLayout</h1>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as MainLayout, Component as MainLayoutComponent };
