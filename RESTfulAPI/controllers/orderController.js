const Order = require('../models/Order');
const Product = require('../models/Product');

// Create order
const createOrder = async (req, res) => {
  const { userId, products } = req.body;
  try {
    const totalAmount = await calculateTotalAmount(products);
    const order = new Order({ user: userId, products, totalAmount });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Calculate total amount of an order
const calculateTotalAmount = async (products) => {
  let totalAmount = 0;
  for (let item of products) {
    const product = await Product.findById(item.product);
    totalAmount += product.price * item.quantity;
  }
  return totalAmount;
};

module.exports = { createOrder };
