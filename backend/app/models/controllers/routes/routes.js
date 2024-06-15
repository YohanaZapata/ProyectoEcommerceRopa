const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const OrderController = require('../controllers/OrderController');

router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);
router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.post('/orders', OrderController.createOrder);
router.get('/orders/:userId', OrderController.getOrdersByUser);

module.exports = router;