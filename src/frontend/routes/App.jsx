import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from '../components/Products';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import ProductDetail from '../containers/productDetail';
import Profile from '../containers/Profile';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/productDetail/:id' component={ProductDetail} />
      <Route exact path='/checkout' component={isLogged ? Checkout : Login} />
      <Route exact path='/login' component={!isLogged ? Login : Home} />
      <Route exact path='/register' component={!isLogged ? Register : Home} />
      <Route exact path='/profile' component={!isLogged ? Login : Profile} />
      <Route exact path='/profile/:edit' component={!isLogged ? Login : Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
