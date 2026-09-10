const User = require("../Models/User")
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/auth.js");

const protect = async (req,res,next)=>{
  let token;
  if(
    req.headers.authorization && 
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token,jwtSecret);
      req.user = await User.findById(decoded.user.id).select("-password");
      next();
    }catch(err){
      console.log("Token verification failed : ",err)
      res.status(401).json({message:"Not authorized,token failed"})
    }
  }else{
    res.status(401).json({message:"Not login"})
  }
}
const admin =async (req,res,next)=>{
  if(req.user && req.user.role=="admin"){
    next();
  }else{
    res.status(401).json({Message : "Not authorized as a admin"});
  }
}
module.exports = {protect,admin}