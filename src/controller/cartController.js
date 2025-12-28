const cartModel = require("../model/cart.model");

let addtoCartController = async (req, res) => {
  try {
    let {product, quantity} = req.body

    let cart = await cartModel({
        product,
        quantity
    })

    await cart.save()

    return res.status(201).json({success: true, message: "added to cart successfully", data: cart})
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: error.message
      });
  }
};

let allCartsController = async (req, res)=>{
    try {
       let carts = await cartModel.find({})

       return res.status(200).json({success: true, message: "All Carts Fetch Successfully", data: carts})
    } catch (error) {
       return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: error.message
      }); 
    }
}

module.exports = {
    addtoCartController,
    allCartsController
}
