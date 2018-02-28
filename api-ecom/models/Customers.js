const mongoose = require('mongoose')
const Schema = mongoose.Schema

  let userSchema = new Schema({
    username : {
      type : String,
      required : true
    },
    password : {
      type : String,
      required : true
    },
    role : String
  },{timestamps : {}})

  let userModel = mongoose.model('Costumers',userSchema)

  module.exports = userModel