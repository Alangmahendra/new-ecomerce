const mongoose = require('mongoose')
const Schema = mongoose.Schema

let barangSchema = new Schema({
  item_names : {
    type : String,
    required : true
  },
  quantity : {
    type : Number,
    required : true
  },
  description:{
    type : String,
    required : true
  },
  categoryId : {
    type:Schema.Types.ObjectId,ref : 'Category'
  },
  cost : {
    type : Number,
    required : true
  },
  image : String,
  quantity_on_cart: {
    type: Number
  }
},{timestamps : {}})

let barangModel = mongoose.model('Items',barangSchema)

module.exports = barangModel