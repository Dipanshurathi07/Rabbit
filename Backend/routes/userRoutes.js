const express = require("express");
const User = require("../Models/User.js")
const jwt = require("jsonwebtoken")
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js");
router.post("/register",async(req,res)=>{
  const {name,email,password}=req.body;
  try {
   let user  =await User.findOne({email});
   if(!user){
    user = new User({name,email,password});
    await user.save();
    const payload = {
      user : {
        id:user._id,
        role: user.role
      }
    }
    jwt.sign(payload,process.env.JWT_SECRET,{expiresIn :"40h"},(err,token)=>{
      if(err) throw err;
      res.status(201).json({
        user: {
          _id:user.id,
          name:user.name,
          email:user.email,
          role:user.role
        },
        token
      })
    })
   }
  }catch(err){
    console.log(err);
    res.status(500).send("Server Error");
  }
})
router.post("/login",async (req,res)=>{
  const {name,email,password}=req.body;
  try {
  const user = await User.findOne({email});
  if(!user){
    return res.status(400).json({message:"Invalid Credential"});
  }
  const isMatch = await user.matchPassword(password);
  if(!isMatch){
     return res.status(400).json({message:"Invalid Credential"});
  }
  const payload = {
      user : {
        id:user._id,
        role: user.role
      }
    }
    jwt.sign(payload,process.env.JWT_SECRET,{expiresIn :"40h"},(err,token)=>{
      if(err) throw err;
      res.status(201).json({
        user: {
          _id:user.id,
          name:user.name,
          email:user.email,
          role:user.role
        },
        token
      })
    })
}catch(err){
  res.status(500).send("Server Error");
}
})
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});
module.exports = router;


