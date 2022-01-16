import React from 'react';
import PropTypes from 'prop-types';
// import clsx from "clsx";
// import styles from "./Header.module.scss";

const Component = () => (
  <div>
    <h1>Homepage</h1>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Homepage, Component as HomepageComponent };
