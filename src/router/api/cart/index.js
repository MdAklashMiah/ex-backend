const express = require("express")
const { addtoCartController, allCartsController } = require("../../../controller/cartController")
const router = express.Router()

router.post("/addtocart", addtoCartController)
router.get("/allcarts", allCartsController)


module.exports = router