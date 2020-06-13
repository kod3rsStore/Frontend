/* eslint-disable no-undef */
const reducer = (state, action) => {
  let index = 0;
  let userCart;
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.length > 0) {
        index = state.cart.slice(state.cart.length - 1)[0].key + 1;
      }
      userCart = [...state.cart, Object.assign({}, action.payload, { key: index })];
      document.cookie = `cart = ${JSON.stringify(userCart)} `;
      return {
        ...state,
        cart: [...state.cart, Object.assign({}, action.payload, { key: index })],
      };
    case 'DELETE_FROM_CART':
      userCart = state.cart.filter(items => items.key !== action.payload);
      document.cookie = `cart = ${JSON.stringify(userCart)}`;
      return {
        ...state,
        cart: state.cart.filter(items => items.key !== action.payload),
      };
    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      };
    case 'SET_ERROR':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: [],
      };
    case 'TOGGLE_CHANGE':
      document.getElementById('toggle').checked = false;
      return {
        ...state,
        isChecked: false,
      };
    default:
      return state;
  }
};

export default reducer;
