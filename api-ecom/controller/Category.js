const Model = require('../models/Category')

class Category {
  static findAll (req, res) {
    Model.find({}).then(data => {
      res.status(200).json({message : 'all category',data : data})
    }).catch(err => {
      res.status(500).json({message : err})
    })
  }

  static add (req, res) {
    let obj = {
      category : req.body.category
    }
    Model.create(obj).then(data => {
      res.status(200).json({message : 'kaetgory added',data : data})
    })
    .catch(err => {
      res.status(500).json({message : err})
    })
  }

  static remove (req, res) {
    Model.findByIdAndRemove(req.params.id).then(data => {
      res.status(200).json({message : 'category deleted'})
    }).catch(err => {
      res.status(500).json({message : err})
    })
  }
}

module.exports = Category