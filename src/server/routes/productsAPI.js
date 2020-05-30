const express = require('express');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const { config } = require("../../config");

function productsApi(app) {
  const router = express.Router();
  app.use('/api/products', router);

  router.get('/', (req, res) => {
    res.send(`API products v 0.01`);
  });
  
  router.get('/:id', async function(req, res, next) {
    const id = req.params.id;
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/products/${id}`,
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

  router.get('/', async function(req, res, next) {
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/products/`,
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
  router.get('/latest', async function(req, res, next) {
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/products/latest`,
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
  router.get('/search/name', async function(req, res, next) {
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/products/search/name`,
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
  router.get('/search/category', async function(req, res, next) {
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/products/search/category`,
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
  router.get('/search/price', async function(req, res, next) {
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/products/search/price`,
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





  router.put('/', async function(req, res, next) {
    try {
        const { token } = req.cookies;
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/products/`,
          headers: { Authorization: `Bearer ${token}` },
          method: 'put',
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
          url: `${config.apiUrl}/api/products/`,
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

module.exports = productsApi