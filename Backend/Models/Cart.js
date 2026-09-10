const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  name: String,
  image: String,
  price: { type: Number, required: true },
  size: String,
  color: String,
  quantity: {
    type: Number,
    default: 1
  }
}, { _id: false }
)
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required:true
  },
  guestId: {
    type: String
  },
  products: [cartItemSchema],
  totalPrice: {
    type: Number,
    required: true,
    defualt: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);