const jwt = require('jsonwebtoken')
require('dotenv').config()

function isLogin (req, res, next) {
  jwt.verify(req.headers.authorization, process.env.SECRET_KEY, function (err, decoded) {
    if (!err) {
      req.otentik = decoded
      next()
    } else {
      res.status(500).json({message : 'get out!!!'})
    }
  })
}

function isAdmin (req, res, next) {
  let role = req.otentik.role
  if (role === 'admin') {
    next()
  }else {
    res.json({message : 'need permission'})
  }
}

function isSelf (req, res, next){
  let me = req.otentik._id
  if(req.params.id === me){
    next()
  }else {
    res.send('get out!!!!')
  }
}

module.exports = {
  isAdmin,
  isLogin,
  isSelf
}