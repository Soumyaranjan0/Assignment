const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/products", protect, createProduct);
router.post("/getProduct", getProduct);
router.patch("/updateProduct", updateProduct);
router.delete("/deleteProduct", deleteProduct);

module.exports = router;
