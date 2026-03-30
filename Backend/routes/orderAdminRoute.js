const express = require("express");
const { protect,admin } = require("../middleware/authMiddleware.js");
const router = express.Router();
const Order = require("../Models/Order.js");
router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("userId", "name email");
    if (orders.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.paymentStatus = req.body.paymentStatus || order.paymentStatus;
    order.status = req.body.status || order.status;

    await order.save();

    res.status(200).json({ message: "Updated successfully",order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await Order.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;