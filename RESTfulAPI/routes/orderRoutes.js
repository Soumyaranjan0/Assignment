const express = require('express');
const { createOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/orders', protect, createOrder);

module.exports = router;