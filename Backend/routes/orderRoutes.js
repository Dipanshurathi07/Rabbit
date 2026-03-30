const express = require("express");
const Order = require("../Models/Order.js")
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();
router.get("/my-orders",protect,async (req,res)=>{
  try {
    const orders = await Order.find({userId : req.user._id}).sort({createdAt : -1});
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({Message : "Server Error"})
  }
})
//full order details
router.get("/:id",protect,async(req,res)=>{
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate("userId",
      "name email"
    )
    if(!order){
      res.status(400).json({Message : "Order not found"})
    }else{
      res.status(200).json(order);
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({Message : "Server Error"})
  }
})

module.exports = router;
