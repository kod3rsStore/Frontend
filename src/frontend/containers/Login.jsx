/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/images/google.png';
import { loginUser } from '../actions';
//import {  loginUser, loginUserGoogle } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/containers/Login.styl';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  const handleGoogle = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    //props.loginUserGoogle('/');
  };

  return (
    <>
      <Header />
      <section className='login'>
        <section className='login__container'>
          <h2>Ingresar</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button' type='submit'>Iniciar Sesión</button>
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' name='rememberMe' id='cbox1' value='checkbox' />
                <span>Recuérdame</span>
              </label>

            </div>
          </form>
          <section className='login__container_social-media'>
            <button className='login__container_social-media--Google-button' onClick={handleGoogle}>
              <img src={googleIcon} alt='Google' />
            </button>
          </section>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          {' '}
          <Link to='/register'>Registrate</Link>
        </p>
      </section>
      <Footer />
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};
export default connect(null, mapDispatchToProps)(Login);
