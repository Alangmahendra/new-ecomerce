const Model = require('../models/Items')

class Items {
  static findAll (req, res){
    Model.find({}).populate('categoryId').then(data => {
      res.status(200).json({message : 'all items',data : data})
    })
    .catch(err=> {
      res.status(500).json({message : err})
    })
  }

  static create (req, res) {
    console.log('masuk create')
    let obj = {
      item_names:req.body.item_names,
      quantity : req.body.quantity,
      description : req.body.description,
      cost : req.body.cost,
      image : req.file.cloudStoragePublicUrl,
      categoryId : req.body.categoryId
    }
    Model.create(obj).then(item => {
      console.log('masuk then',item);
      
      res.status(200).json({message : 'item has been created', data : item})
    })
    .catch(err => {
      res.status(500).json({message : err})
    })
  }

  static remove (req, res) {
    Model.findByIdAndRemove(req.params.id).then(user=>{
      res.status(200).json({message : 'items has been deleted',data : user})
    }).catch(err=>{
      res.status(500).json({message : err})
    })
  }


  static update (req, res) {
    let obj = {
      item_names:req.body.item_names,
      quantity : req.body.quantity,
      description : req.body.description,
      cost : req.body.cost,
      image : req.file.cloudStoragePublicUrl,
      categoryId : req.body.categoryId
    }
    Model.findByIdAndUpdate(req.params.id,obj,{new:true}).then(item => {
      res.status(200).json({message : 'item has been updated', data : item})
    })
    .catch(err => {
      res.status(500).json({message : err})
    })
  }

  static findone (req, res) {
    Model.findById(req.params.id).populate('categoryId').then(data => {
      res.status(200).json({message : 'data finded',data : data})
    })
    .catch(err => {
      res.status(500).json({message : err})
    })
  }

  static category (req, res){
    console.log('masuk category')
    Model.find({categoryId : req.params.categoryId}).populate('categoryId').then(data => {
      console.log('masuk category then', data)
      console.log(req.params.categoryId)
      res.status(200).json({message : 'item with category finded',data : data})
    })
    .catch(err => {
      res.status(500).json({message : err})
    })
  }
}

module.exports = Items
