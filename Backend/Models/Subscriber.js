const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subscriberSchema = new Schema({
  email : {
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  subscribeAt : {
    type:Date,
    default : Date.now()
  }
});
module.exports = mongoose.model("Subscriber",subscriberSchema);