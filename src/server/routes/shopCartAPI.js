const express = require('express');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const { config } = require("../config");

function shopCartApi(app) {
  const router = express.Router();
  app.use('/api/shopcarts', router);
  
  router.get('/:id', async function(req, res, next) {
    const id = req.params.id;
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/shopcarts/${id}`,
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


  router.patch('/', async function(req, res, next) {
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/shopcarts/`,
          headers: { Authorization: `Bearer ${token}` },
          method: 'pacth',
          data: req.body,
        });
    
        if (status !== 201) {
          return next(boom.badImplementation());
        }
        res.status(201).json(data);
      } catch (error) {
        next(error);
      }
  })
  router.post('/', async function(req, res, next) {
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/shopcarts/`,
          headers: { Authorization: `Bearer ${token}` },
          method: 'post',
          data: req.body,
        });
    
        if (status !== 201) {
          return next(boom.badImplementation());
        }
        res.status(201).json(data);
      } catch (error) {
        next(error);
      }
  })
}

module.exports = shopCartApi