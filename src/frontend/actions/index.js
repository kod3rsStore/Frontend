/* eslint-disable no-undef */
import axios from 'axios';

export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});
export const deleteFromCart = payload => ({
  type: 'DELETE_FROM_CART',
  payload,
});
export const emptyCart = payload => ({
  type: 'EMPTY_CART',
  payload,
});
export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const deteleFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});
export const redirect = (redirectUrl) => {
  window.location.href = redirectUrl;
};

export const toggleChange = payload => ({
  type: 'TOGGLE_CHANGE',
  payload,
});
export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch(error => dispatch(setError(error)));
  };
};

export const loginUser = ({ email, password, rememberMe }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
      data: {
        rememberMe,
      },
    })
      .then(({ data }) => {
        const { user, token } = data;
        document.cookie = `email=${user.user.email}`;
        document.cookie = `first_name=${user.user.first_name}`;
        document.cookie = `id_users=${user.user.id_users}`;
        document.cookie = `photo=${user.user.photo}`;
        document.cookie = `token=${token}`;
        dispatch(loginRequest(user.user));
      })
      .then(() => {
        dispatch(redirect(redirectUrl));
      })
      .catch(err => dispatch(setError(err)));
  };
};

export { setFavorite as default };
