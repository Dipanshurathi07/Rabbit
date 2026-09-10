const express = require("express");
const {protect,admin} = require("../middleware/authMiddleware");
const Product = require("../Models/Product");
const router = express.Router();

router.get("/",protect,admin,async(req,res)=>{
  try {
    const products = await Product.find({});
    if(!products) return res.status(400).json({Message : "Products not found"});
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({Message : "Server Error"});
  }
})
//Update the product in database

router.delete("/:id",protect,admin,async(req,res)=>{
   try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          message: "Product not found"
        });
      }
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Product deleted successfully", id: req.params.id });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
})

module.exports = router;