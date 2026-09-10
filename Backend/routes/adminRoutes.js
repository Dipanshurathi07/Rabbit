const express = require("express");
const {protect,admin} = require("../middleware/authMiddleware");
const User = require("../Models/User");
const router = express.Router();

router.get("/",protect,admin,async(req,res)=>{
try {
  const users = await User.find({});
  if(!users) return res.json({Message : "No user found"});
   res.status(200).json(users)
} catch (error) {
  console.log(error);
  res.status(500).json({Message : "Server Error"})
}
})

router.post("/",protect,admin,async(req,res)=>{
  const {name,email,password,role} = req.body;
  try {
    let newUser = await User.findOne({email});
    if(newUser) return res.status(400).json({Message : "User already registered"});
    newUser = await User.create({
      name : name,
      email : email,
      password : password,
      role: role || "customer",
    });
    await newUser.save();
    res.status(200).json({Message : "User registered Succesfully"},newUser)
  } catch (error) {
    console.log(error);
    res.status(500).json({Message : "Server Error "})
  }
})
router.put("/:id", protect, admin, async (req, res) => {

  try {

    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.role || user.role;

    await user.save();

    res.status(200).json({
      message: "User updated successfully",
      user
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }

});
router.delete("/:id",protect,admin,async(req,res)=>{
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully", id: req.params.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
})

module.exports = router;