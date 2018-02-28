const express = require('express')
const router = express.Router()
const category = require('../controller/Category')
const auth = require('../midleware/auth')

router.get('/',category.findAll)
router.post('/',auth.isLogin,auth.isAdmin,category.add)
router.delete('/:id',auth.isLogin,auth.isAdmin,category.remove)

module.exports = router