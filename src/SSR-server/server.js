/* eslint-disable camelcase */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import reducer from '../frontend/reducers';
import initialState from '../frontend/initialState';

import serverRoutes from '../frontend/routes/ServerRoutes';

import getManifest from './getManifest';

const express = require('express');
const webpack = require('webpack');
const helmet = require('helmet');

const passport = require('passport');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const { config } = require('../config/index');

/**
 * Constants of cookies lifetime in seconds
 */
const THIRTY_DAYS_IN_SEC = 2592000;
const TWO_HOURS_IN_SEC = 7200;

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

} else {
  app.use((req, res, next) => {
    //if (!req.hashManifest) req.hashManifest = getManifest();
    req.hashManifest = getManifest();
    next();
  });

  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return (`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="${mainStyles}" type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Kod3rs Store</title>
        
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="${mainBuild}" type="text/javascript"> </script>
        <script src="${vendorBuild}" type="text/javascript"> </script>
        <script src="https://kit.fontawesome.com/473d269aa9.js"></script>
      </body>
    </html>
  `);
};

const renderApp = (req, res) => {

  let initState;

  //getting the user data
  const { email, first_name, id_users, photo, cart } = req.cookies;
  let validatedCart;
  if (!cart) {
    validatedCart = [{}];
  } else {
    validatedCart = cart;
  }
  if (id_users) {
    initState = {
      ...initialState,
      user: {
        email, first_name, id_users, photo,
      },
      cart: JSON.parse(validatedCart),
    };
  } else {
    initState = initialState;
  }

  const store = createStore(reducer, initState);
  const preloadedState = store.getState();
  const isLogged = initState.user.id_users;
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes(isLogged))}
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

/**
 * Using a body parser to work with the information
 */
app.use(express.json());
/**
 * Using a cookie parser to work with the cookies of the client
 */
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

/**
 * We get the passport basic strategy to use the email password authentication
 */
require('./utils/auth/strategies/basic');

/**
 * Sign in Endpoint
 */
app.post('/auth/sign-in', async (req, res, next) => {
  /**
 * Get the rememberme attirbute
 * if rememberme is true we give 30 days lifetime to the cookie
 * if rememberme is false we give 2 hours lifetime to the cookie
*/
  const { rememberMe } = req.body;

  /**
 * Call to the basic authentication
*/
  passport.authenticate('basic', (error, data) => {
    try {
      /**
         * verifying the user authentication
        */
      if (error || !data) {
        next(boom.unauthorized());
      }

      req.login(data, { session: false }, async (err) => {
        if (err) {
          next(err);
        }
        /**
                 * Creating the cookie in the client browser
                */
        const { token, ...user } = data.body;
        res.cookie('token', token, {
          httpOnly: !(config.env === 'development'),
          secure: !(config.env === 'development'),
          maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC,
        });
        /**
         * Response to the user
        */
        res.status(200).json({ token, user });
      });
    } catch (err) {
      next(err);
    }

  })(req, res, next);
});
/**
 * Sign up Endpoint
 */
app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: 'post',
      data: {
        'email': user.email,
        'name': user.name,
        'password': user.password,
      },
    });
    /* *
         * Response to the user
        */
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.id,
    });

  } catch (error) {
    next(error);
  }
});

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server is running in the port ${PORT}`);
});

// const userAPI = require('./routes/userAPI');
// const productsAPI = require('./routes/productsAPI.js');
// const categoriesAPI = require('./routes/categoriesAPI');
// const addressesAPI = require('./routes/addressesAPI');
// const shopCartAPI = require('./routes/shopCartAPI');

// body-parser
// const bodyParser = require('body-parser')
// let urlencodedParser = bodyParser.urlencoded({ extended: false })

// /**
//  * We get the passport  strategy to use oauth authentication
//  */
// require('./utils/auth/strategies/oauth');

// /**
//  * We get the passport  strategy to use
//  * google authentication
//  */
// require('./utils/auth/strategies/google');

// /**
//  * request to google-oauth
//  */
// app.get(
//     "/auth/google-oauth",
//     passport.authenticate("google-oauth", {
//       scope: ["email", "profile", "openid"]
//     })
//   );
//   /**
//  * request to google-oauth callback
//  * Call to the basic authentication
//  */

// app.get(
//   "/auth/google-oauth/callback",
//   passport.authenticate("google-oauth", { session: false }),
//   function(req, res, next) {
//     if (!req.user) {
//       next(boom.unauthorized());
//     }

//     const { token, ...user } = req.user;
//   /**
//    * Creating the cookie in the client browser
//   */
//     res.cookie("token", token, {
//       httpOnly: !config.dev,
//       secure: !config.dev,
//       maxAge: THIRTY_DAYS_IN_SEC
//     });
//   /**
//    * Response to the user
//   */
//     res.status(200).json(user);
//   }
// );
// app.get(
//   '/auth/google',
//   (req, res, next) => {
//     console.log ('Generating Google Autentication');
//     next();
//   } ,
//   passport.authenticate('google', {
//     scope: ['email', 'profile', 'openid'],
//   }),
// );
// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { session: false }),
//   (req, res, next) => {
//     if (!req.user) {
//       next(boom.unauthorized());
//     }

//     const { token, ...user } = req.user;

//     res.cookie('email', user.user.email, {
//       httpOnly: !config.dev,
//       secure: !config.dev,
//     });
//     res.cookie('id', user.user.id_users, {
//       httpOnly: !config.dev,
//       secure: !config.dev,
//     });
//     res.cookie('name', user.user.first_name, {
//       httpOnly: !config.dev,
//       secure: !config.dev,
//     });

//     res.cookie('token', token, {
//       httpOnly: !config.dev,
//       secure: !config.dev,
//     });
//     res.redirect(req.headers.referer.replace('login',''));
//   },
// );

// app.post('/stripe/:userId',urlencodedParser,  async (req, res, next) => {
//   console.log(req);
//     try {
//       const { userId } = req.params;
//       const { token } = req.cookies;
//       console.log(`${config.apiUrl}/api/payment/stripe/checkout/${userId}`);
//       const body = await axios({
//         url: `${config.apiUrl}/api/payment/stripe/checkout/${userId}`,
//         headers: { Authorization: `Bearer ${token}` },
//         data: req.body,
//         method: 'post',
//       });
//       if (body.data.status !== 201) {
//         return next(boom.badImplementation());
//       }
//       res.status(201).json(body.data);
//     } catch (error) {
//       next(error);
//     }
//   });

// /**
//  * Launch the Server Side Rendering Server
// */

// userAPI(app);
// productsAPI(app);
// categoriesAPI(app);
// addressesAPI(app);
// shopCartAPI(app);

// app.get('/', (req, res) => {
//   res.send(`API auth v 0.01`);
// });

