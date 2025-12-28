const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        product:{
            type: mongoose.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            default: 1
        },
        totalPrice: {
            type: Number
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Cart", cartSchema)