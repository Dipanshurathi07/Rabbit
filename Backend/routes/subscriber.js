const express = require("express");
const Subscriber = require("../Models/Subscriber");
const router = express.Router();
router.post("/",async(req,res)=>{
  try {
    const {email}=req.body;
    if(!email) return res.json({Message : "Email not found"});
    let newSubs = await Subscriber.findOne({email});
    if(newSubs) return  res.json({Message : "Email already subscribed"})
     newSubs = await Subscriber.create({
      email : email,
    });
    await newSubs.save();
    res.status(200).json({Message : "Successfully subscribed to newsletter"});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({Message : "Server Error"})
  }
})
module.exports = router;