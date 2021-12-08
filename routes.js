const express = require('express')
const router = express.Router()

//コントローラーファイルのよみこみ
const homeController = require('./controllers/HomeController')
const itemController = require('./controllers/ItemController')
const loginController = require('./controllers/LoginControllers')
const userController = require('./controllers/UserControllers')

//HomeController
router.get('/', homeController.index)
router.get('/profile', homeController.profile)

//ItemController
router.get('/item/:id', itemController.show)

//userController
router.get('/user/edit/:id', userController.edit)

//LoginController
router.get('/login', loginController.index)
router.post('/auth', loginController.auth)

module.exports = router