const express = require("express");
const {
  addProductController,
  deleteProductController,
} = require("../../../controller/productController");
const upload = require("../../../utils/upload");
const router = express.Router();



router.post("/addproduct", upload.single("product"), addProductController);

router.delete("/deleteproduct/:id", deleteProductController)

module.exports = router;
