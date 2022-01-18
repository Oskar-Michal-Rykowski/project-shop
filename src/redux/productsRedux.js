/* selectors */

export const getProducts = ({ products }) => products;
export const getProductById = ({ products }, id) =>
  products.find((product) => product.id === id);
/* action name creator */

/* action types */

/* action creators */

/* thunk creators */

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
