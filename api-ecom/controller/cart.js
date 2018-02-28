const Model = require('../models/Carts')

class Cart {
  static getAllbyUser (req, res) {
    Model.find({costumers_id:req.otentik._id}).populate('costumers_id').populate('items')
    .then(cart => {
      res.status(200).json({message : 'your cart',data : cart})
    })
    .catch(err => {
      res.status(500).json({message :err})
    })
  }

  static getAll (req, res) {
    Model.find().populate('costumers_id').populate('items')
    .then(cart => {
      res.status(200).json({message : 'all cart',data : cart})
    })
    .catch(err => {
      res.status(500).json({message :err})
    })
  }

  static add (req, res) {
    // let getItem = [];
    // req.body.chart.forEach(element => {
    //   Model.findById(element.id).then((getItem) => {
        
    //   })
    //   .catch(err => {

    //   })
    //   let setData = {
    //     itemId:element.id,
    //     jumlah:element.jumlah
    //   }

    //   getItem.push(setData)
    // });

    let obj = {
      costumers_id : req.otentik._id,
      items : req.body.items,
      total : req.body.total,
      quantity :req.body.quantity
    }
    Model.create(obj)
    .then(data => {
      res.status(200).json({message : 'succes',data : data})
    })
    .catch(err => {
      res.status(500).json({message : err})
    })
  }
}

module.exports = Cart