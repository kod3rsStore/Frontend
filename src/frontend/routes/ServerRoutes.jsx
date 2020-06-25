import Products from '../components/Products';
import Checkout from '../containers/Checkout';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: Home,
    }, {
      exact: true,
      path: '/products',
      component: Products,
    }, {
      exact: true,
      path: '/checkout',
      component: isLogged ? Checkout : Login,
    }, {
      exact: true,
      path: '/login',
      component: !isLogged ? Login : Home,
    }, {
      exact: true,
      path: '/register',
      component: isLogged ? Register : Home,
    }, {
      exact: true,
      path: '/profile',
      component: !isLogged ? Login : Profile,
    }, {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
