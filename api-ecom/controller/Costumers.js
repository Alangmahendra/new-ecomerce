const Model = require('../models/Customers')
const jwt =  require('jsonwebtoken')
const bcrypt =  require('bcryptjs')
require('dotenv').config()

class Costumers {
  static signup (req, res){
    console.log('masuk signup');
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        let obj = {
          username : req.body.username,
          password : hash,
          role : req.body.role || 'user'
        }
        Model.create(obj, (err, rows) => {
          if (err) {
            res.status(500).json({message : err})
          } else {
            res.status(200).json({message : 'terdaftar',data : rows})
          }
        })
      })
    })
  }

  static signin (req, res) {
    Model.findOne({username : req.body.username}, function (err, user) {
      if(err){
        res.status(500).json({message : err})
      }else{
        bcrypt.compare(req.body.password, user.password, function (err, data) {
          if(!err){
            let payload = {
              _id : user._id,
              username : user.username,
              role : user.role
            }
            jwt.sign(payload,process.env.SECRET_KEY,function(err, token) {
              if(err){
                res.status(500).json({message : err})
              }else {
                res.status(200).json({token : token,role : user.role})
              }
            })
          }
          else {
            res.status(500).json({message : err})
          }
        })
      }
    })
  }

  static create (req, res){
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        let obj = {
          username : req.body.username,
          password : hash,
          role : req.body.role || 'admin'
        }
        Model.create(obj, (err, rows) => {
          if (err) {
            res.status(500).json({message : err})
          } else {
            res.status(200).json({message : 'didaftarkan admin',data : rows})
          }
        })
      })
    })
  }

  static findAll(req, res){
    Model.find({}).then(user => {
      res.status(200).json({message : 'all user',data : user})
    })
    .catch(err => {
      res.status(500).json({message : err})
    })
  }

  // static adminPage (req ,res) {
  //   Model.findOne({role : 'admin'})
  //   .then(data => {
  //     res.status(200).json({message : 'role cocok',data : data})
  //   })
  //   .catch(err => {
  //     res.status(500).json({message : err})
  //   })
  // }

  
}

module.exports = Costumers