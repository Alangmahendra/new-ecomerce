const express = require('express')
const router = express.Router()
const cart = require('../controller/cart')
const auth = require('../midleware/auth')
const image = require('../midleware/image')

router.get('/',auth.isLogin,auth.isAdmin,cart.getAll)
router.get('/mycarthistory',auth.isLogin,cart.getAllbyUser)
router.post('/',auth.isLogin,cart.add)

module.exports = router