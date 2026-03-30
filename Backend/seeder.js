const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Product = require("./Models/Product.js");
const User = require("./Models/User.js");
const Cart = require("./Models/Cart.js");
const products = require("./Data/products.js")

mongoose.connect(process.env.MONGODB_URI);

const seedData = async ()=>{
  try{
  await Product.deleteMany();
  await User.deleteMany();
  await Cart.deleteMany();
   // default admin user
   const createUser = await User.create({
    name:"John",
    email:"dipanshuchaudhary13@gmail.com",
    password:"123456",
    role:"admin"
   })
   const userID = createUser._id;
   const sampleData = products.map((product)=>{
    return {...product,user:userID}
   });
   await Product.insertMany(sampleData)
   process.exit();
  }catch(err){
    console.log(err);
    process.exit(1);
  }

}
seedData();