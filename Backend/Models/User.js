const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const userSchema = new Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    match:[/.+\@.+\..+/,]
  },
  password:{
    type:String,
    required:true,
    minLength:6
  },
  role : {
    type:String,
    enum:["admin","customer"],
    default:"customer"
  }
},
{timestamps: true}
);
//Password hash middleware
userSchema.pre("save",async function (next){
  if(!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})
//Match User entered password to Hashed password
userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}
module.exports = mongoose.model("User",userSchema)