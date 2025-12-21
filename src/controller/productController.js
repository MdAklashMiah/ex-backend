let addProductController = async (req, res) => {
  try {
    res.send("added a product")

  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
  }
};


module.exports = {
    addProductController
}
