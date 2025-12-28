const productModal = require("../model/product.modal");
const fs = require("fs");
const path = require("path");
const { default: slugify } = require("slugify");

let addProductController = async (req, res) => {
  try {
    let { title, description, stock, price, discountPrice } = req.body;
    let slug = slugify(title, {
      replacement: "-",
      remove: undefined,
      lower: false,
      trim: true,
    });

    let { filename } = req.file;

    let newProduct = new productModal({
      title,
      description,
      stock,
      price,
      discountPrice,
      slug,
      image: `${process.env.SERVER_URL}/${filename}`,
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

let deleteProductController = async (req, res) => {
  try {
    let { id } = req.params;

    let product = await productModal.findOneAndDelete({ _id: id });

    let imgurl = product.image.split("/");

    let filepath = path.join(__dirname, "../../uploads");

    fs.unlink(`${filepath}/${imgurl[imgurl.length - 1]}`, (err) => {
      if (err) {
        return res.send(err);
      } else {
        return res
          .status(200)
          .json({ success: true, message: "product deleted successfully" });
      }
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
  deleteProductController,
};
