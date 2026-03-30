//App connect with DB
const mongoose = require('mongoose');
const connectDB = async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Done Connected")
  }catch(err){
    console.log(err);
  }
}
module.exports = connectDB