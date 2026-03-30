const express = require("express");
const Product = require("../Models/Product.js");
const Cart = require("../Models/Cart.js");
const products = require("../Data/products.js");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();
const Order = require("../Models/Order.js");
const Checkout = require("../Models/Checkout.js");

router.post("/", protect, async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod, totalPrice ,quantity} = req.body;
  try {
    if (!checkoutItems || checkoutItems.length === 0) {
      return res.status(400).json("No items in checkOut");
    } else {
      const checkOut = await Checkout.create({
        userId: req.user._id,
        checkoutItems: checkoutItems,
        shippingAddress,
        paymentMethod,
        paymentStatus: "pending",
        totalPrice,
        quantity
      })
      await checkOut.save();
      res.status(200).json(checkOut);
    }

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
})
router.put("/:id/pay", protect, async (req, res) => {
  const { paymentDetails, paymentStatus } = req.body;
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (!checkout) {
      res.status(404).json({ Message: "No checkOut find" });
    }
    if (paymentStatus === "paid") {
      checkout.isPaid = true,
        checkout.paidAt = Date.now()
      checkout.paymentDetails = paymentDetails,
        checkout.paymentStatus = paymentStatus
      await checkout.save();
      res.status(200).json(checkout);
    } else {
      res.status(400).json({ Message: "Payment status failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
})
router.post("/:id/finalize", protect, async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (checkout && !checkout.isFinalized) {
      const finalOrder = await Order.create({
        userId: checkout.userId,
        orderItems: checkout.checkoutItems,
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: checkout.totalPrice,
        isPaid: true,
        paidAt: checkout.paidAt,
        isDelivered: false,
        paymentStatus: "paid",
        paymentDetails: checkout.paymentDetails
      })
      checkout.isFinalized = true,
        checkout.finalizedAt = Date.now();
      await checkout.save();
      await finalOrder.save();
      await Cart.findOneAndDelete({ userId: checkout.userId })
      res.status(200).json(finalOrder)
    } else if (checkout.isFinalized) {
      res.status(400).json({ Message: "Already finalized" });
    } else {
      res.status(400).json({ Message: "Not paid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
})
module.exports = router;