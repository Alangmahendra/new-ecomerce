const mongoose = require('mongoose')
const Schema = mongoose.Schema

let keranjangSchema = new Schema({
  costumers_id : {type : Schema.Types.ObjectId,ref:'Costumers'},
  items : {
     type : Schema.Types.ObjectId,
     ref:'Items',
  },
  quantity : Number,
  total : Number
},{timestamps : {}})

let keranjangModel = mongoose.model('Carts',keranjangSchema)
module.exports = keranjangModel