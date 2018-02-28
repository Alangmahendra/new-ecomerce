const mongoose = require('mongoose')
const Schema = mongoose.Schema

let categorySchema = new Schema({
  category : String
},{timestamps : {}})

let categoryModel = mongoose.model('Category',categorySchema)

module.exports = categoryModel