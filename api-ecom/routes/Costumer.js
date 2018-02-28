const express = require('express')
const router = express.Router()
const custom = require('../controller/Costumers')
const midle = require('../midleware/auth')

router.get('/alluser',midle.isLogin,midle.isAdmin,custom.findAll)
router.post('/signup',custom.signup)
router.post('/signin',custom.signin)
router.post('/userapprove',midle.isLogin,midle.isAdmin,custom.create)

// router.get('/admin',midle.isLogin,midle.isAdmin,custom.adminPage)

module.exports = router