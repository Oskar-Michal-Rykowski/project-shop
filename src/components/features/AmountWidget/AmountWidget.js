import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Component = ({ amount }) => {
  const [number, setAmount] = React.useState(amount);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Amount</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={number}
        label="Amount"
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
    </FormControl>
  );
};
Component.propTypes = {
  amount: PropTypes.number,
};

// const mapStateToProps = (state) => ({
//   products: getProducts(state),
// });

// const mapDispatchToProps = () => ({});

// const ProductsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Component);

export { Component as AmountWidget };
