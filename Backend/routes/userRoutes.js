const express = require("express");
const User = require("../Models/User.js")
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js");
const { createToken } = require("../config/auth.js");
router.post("/register",async(req,res)=>{
  const name = req.body.name?.trim();
  const email = req.body.email?.trim().toLowerCase();
  const password = req.body.password;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email and password are required" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  try {
   let user  =await User.findOne({email});
   if(user){
    return res.status(409).json({ message: "An account with this email already exists" });
   }

   user = new User({name,email,password});
   await user.save();
   const token = createToken(user);
   res.status(201).json({
     user: {
       _id:user.id,
       name:user.name,
       email:user.email,
       role:user.role
     },
     token
   });
  }catch(err){
    console.error("Registration failed:", err);
    if (err.code === 11000) {
      return res.status(409).json({ message: "An account with this email already exists" });
    }
    res.status(500).json({ message: "Could not create account" });
  }
})
router.post("/login",async (req,res)=>{
  const email = req.body.email?.trim().toLowerCase();
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
  const user = await User.findOne({email});
  if(!user){
    return res.status(400).json({message:"Invalid Credential"});
  }
  const isMatch = await user.matchPassword(password);
  if(!isMatch){
     return res.status(400).json({message:"Invalid Credential"});
  }
    const token = createToken(user);
    res.status(200).json({
      user: {
        _id:user.id,
        name:user.name,
        email:user.email,
        role:user.role
      },
      token
    });
}catch(err){
  console.error("Login failed:", err);
  res.status(500).json({ message: "Could not log in" });
}
})
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});
module.exports = router;


