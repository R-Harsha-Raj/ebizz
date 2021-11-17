const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

// route to get all products
router.route("/products").get(getAllProducts);

// route to create a product
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);

// route to update a product
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct)
  .get(getProductDetails);

module.exports = router;
