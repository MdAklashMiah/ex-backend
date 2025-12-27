const express = require("express");
const {
  addProductController,
} = require("../../../controller/productController");
const upload = require("../../../utils/upload");
const router = express.Router();



router.post("/addproduct", upload.single("product"), addProductController);

module.exports = router;
