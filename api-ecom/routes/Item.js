const express = require('express')
const router = express.Router()
const item = require('../controller/Items')
const auth = require('../midleware/auth')
const image = require('../midleware/image')

router.get('/',item.findAll)
router.post('/',auth.isLogin,auth.isAdmin,image.multer.single('image'),image.sendUploadToGCS,item.create)
router.get('/:id',item.findone)
router.put('/:id',auth.isLogin,auth.isAdmin,image.multer.single('image'),image.sendUploadToGCS,item.update)
router.delete('/:id',auth.isLogin,auth.isAdmin,item.remove)
router.get('/category/:categoryId',item.category)
module.exports = router