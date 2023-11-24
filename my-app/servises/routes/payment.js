const express = require('express');
const route = express.Router();

const paymentController = require('../controllers/paymentController')

route.post('/create/order', paymentController.createOrder)
route.post('/card/details', paymentController.cardDetails)

module.exports = route