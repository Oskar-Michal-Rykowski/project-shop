import Axios from 'axios';
const API_HOST =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : '';
console.log('APIhost', API_HOST);
/* selectors */

export const getProducts = ({ products }) => products;
export const getProductById = ({ products }, id) =>
  products.find((product) => product._id === id);
/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchProducts = () => {
  return (dispatch, getState) => {
    try {
      // dispatch(fetchStarted());
      Axios.get(`${API_HOST}/api/products`).then((res) => {
        dispatch(fetchSuccess(res.data));
        // console.log('RRRR', typeof res.data);
      });
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
      };
    }
    case FETCH_SUCCESS: {
      return action.payload;
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
      };
    }
    default:
      return statePart;
  }
};
