const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', protect, createProduct);

module.exports = router;
