const express = require('express');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const { config } = require("../../config");


function userApi(app) {
    const router = express.Router();
    app.use('/api/users', router);
    router.get('/', (req, res) => {
      res.send(`API users v 0.01`);
    });
    router.get('/:id', async function(req, res, next) {
        const id = req.params.id;
        try {
            const { token } = req.cookies;
            const { data, status } = await axios({
              url: `${config.apiUrl}/api/users/${id}`,
              headers: { Authorization: `Bearer ${token}` },
              method: 'get',
            });
        
            if (status !== 200) {
              return next(boom.badImplementation());
            }
            res.status(200).json(data);
          } catch (error) {
            next(error);
          }

    })
}

module.exports = userApi