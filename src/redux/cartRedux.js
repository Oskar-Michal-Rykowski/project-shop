/* selectors */

export const getCart = ({ cart }) => cart;

/* action name creator */
/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const EDIT_CART = createActionName('EDIT_CART');

/* action creators */
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const removeFromCart = (payload) => ({
  payload,
  type: REMOVE_FROM_CART,
});
export const editCart = (payload) => ({ payload, type: EDIT_CART });

/* thunk creators */

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      statePart.push(action.payload);
      // console.log('dupa', statePart);
      return statePart;
    }
    default:
      return statePart;
  }
};
