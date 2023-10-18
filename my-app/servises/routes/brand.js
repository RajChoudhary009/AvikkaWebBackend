const express = require('express');
const route = express.Router();

const brandController = require('../controllers/brandController');

route.post('/brand', brandController.Addbrand)
route.get('/brand', brandController.getbrand)
route.get('/brand/product/:brandName', brandController.getbrandproduct)

module.exports = route;