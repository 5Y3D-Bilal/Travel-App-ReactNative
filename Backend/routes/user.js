const router = require('express').Router()
const userContorller = require('../controllers/userController')
const { verifyToken } = require('../middlewares/jwt_token')

router.delete('/', verifyToken, userContorller.deleteUser)
router.get('/', verifyToken, userContorller.getUser)
router.get('/Users' , userContorller.getAllUsers)

module.exports = router