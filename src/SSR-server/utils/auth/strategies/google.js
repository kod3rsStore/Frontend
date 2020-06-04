const passport = require("passport");
const { OAuth2Strategy: GoogleStrategy } = require("passport-google-oauth");
const axios = require('axios');
const boom = require('@hapi/boom');

const { config } = require("../../../config/index");

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: `${config.ssrUrl}/auth/google/callback`
    },
    async (accessToken, refreshToken, {_json: profile } , cb) => {
        try{
            const { data, status } = await axios({
                url: `${config.apiUrl}/api/auth/sign-provider`,
                method: "post",
                data: {
                  first_name: profile.name,
                  email: profile.email,
                  password: profile.sub,
                  photo: profile.photo,
                  apiKeyToken: config.apiKeyToken
                }
              });
        
              if (!data || status !== 200) {
                return cb(boom.unauthorized(), false);
              }
        
              return cb(null, data);
        }catch(error){
            return cb(error);
        }

    }
  )
);