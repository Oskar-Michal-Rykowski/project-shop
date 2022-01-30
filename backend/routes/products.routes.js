const express = require('express');

const router = express.Router();
const ProductsController = require('../controllers/products.controller');

router.get('/products', ProductsController.getAll);

module.exports = router;
