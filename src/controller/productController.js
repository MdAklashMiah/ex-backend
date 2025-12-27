const productModal = require("../model/product.modal");

let addProductController = async (req, res) => {
  try {
    let { title, description, stock, price, discountPrice } = req.body;

    let {filename} = req.file

    let newProduct = new productModal({
      title,
      description,
      stock,
      price,
      discountPrice,
      image: `${process.env.SERVER_URL}/${filename}`
    });
    

    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "product created successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
      
    });
  }
};

module.exports = {
  addProductController,
};
