const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const { config } = require("../config");
const { ENV, PORT } = process.env;
const app = express(); 

/**
 * Constants of cookies lifetime in seconds
 */
const THIRTY_DAYS_IN_SEC = 2592000;
const TWO_HOURS_IN_SEC = 7200;


/**
 * Using a body parser to work with the information
 */
app.use(express.json());
/**
 * Using a cookie parser to work with the cookies of the client
 */
app.use(cookieParser());

/**
 * We get the passport basic strategy to use the email password authentication 
 */
require('./utils/auth/strategies/basic');

/**
 * We get the passport  strategy to use tgoogle authentication 
 */
require('./utils/auth/strategies/oauth');

if(ENV === 'development'){
    console.log('development config');
}
/**
 * Sign in Endpoint
 */
app.post("/auth/sign-in", async function(req, res, next) {
/**
 * Get the rememberme attirbute 
 * if rememberme is true we give 30 days lifetime to the cookie 
 * if rememberme is false we give 2 hours lifetime to the cookie 
*/
    const { rememberMe } = req.body; 

/**
 * Call to the basic authentication
*/
    passport.authenticate("basic", function(error, data) {
        try{
        /**
         * verifying the user authentication
        */
            if(error || !data){
                next(boom.unauthorized());
            }
            
            req.login(data, { session: false }, async function(error){
                if(error){
                    next(error);
                }
                /**
                 * Creating the cookie in the client browser
                */
               const { token, ...user } = data;
                res.cookie("token", token, {
                    httpOnly: !config.dev,
                    secure: !config.dev,
                    maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC
                });
                /**
                 * Response to the user
                */
                res.status(200).json(user);
            })
        }catch(error) {
            next(error);
        }

    })(req, res, next)
});
/**
 * Sign up Endpoint 
 */
app.post("/auth/sign-up", async function(req, res, next) {
    const { body: user } = req;

    try{
        await axios({
            url: `${config.apiUrl}/api/auth/sign-up`,
            method: "post",
            data: user
        });
        /* *
         * Response to the user
        */
        res.status(201).json({ message: "user created "})

    }catch(error){
        next(error);
    }
});
/**
 * request to google-oauth
 */
app.get(
    "/auth/google-oauth",
    passport.authenticate("google-oauth", {
      scope: ["email", "profile", "openid"]
    })
  );
  /**
 * request to google-oauth callback
 * Call to the basic authentication
 */

  app.get(
    "/auth/google-oauth/callback",
    passport.authenticate("google-oauth", { session: false }),
    function(req, res, next) {
      if (!req.user) {
        next(boom.unauthorized());
      }
  
      const { token, ...user } = req.user;
    /**
     * Creating the cookie in the client browser
    */
      res.cookie("token", token, {
        httpOnly: !config.dev,
        secure: !config.dev,
        maxAge: THIRTY_DAYS_IN_SEC 
      });
    /**
     * Response to the user
    */
      res.status(200).json(user);
    }
);

/**
 * Launch the Server Side Rendering Server
*/

app.listen(PORT, (err) => {
    if(err) console.error(err);
    else console.log(`Server is running in the port ${PORT}`);
})