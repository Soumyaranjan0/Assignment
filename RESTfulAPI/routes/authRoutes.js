const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { body } = require('express-validator');
const { validate } = require('../middleware/validateMiddleware');

const router = express.Router();

router.post(
  '/users',
  [body('email').isEmail().normalizeEmail(), body('password').isLength({ min: 6 })],
  validate,
  registerUser
);

router.post('/login', loginUser);

module.exports = router;