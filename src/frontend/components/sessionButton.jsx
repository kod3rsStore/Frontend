import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';

const ButtonSession = (props) => {
  const { user } = props;
  const hasUser = user ;
  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'first_name=';
    document.cookie = 'id_users=';
    document.cookie = 'photo=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };
  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className='Header__menu--session'>
      <input
        type='button'
        className='text'
        value={hasUser ? 'Cerrar sesión' : 'Iniciar sesión'}
        onClick={hasUser ? handleLogout : handleLogin}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonSession);
