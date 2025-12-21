const express = require("express")
const { addProductController } = require("../../../controller/productController")

const router = express.Router()

router.post("/addproduct", addProductController)



module.exports = router