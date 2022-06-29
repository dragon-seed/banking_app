const express = require('express')
const { registerUser, authUser }  = require('../controllers/userController')
const router = express.Router();

//create an API endpoint. We're storing data in backend, so create a post request. 
router.route('/').post(registerUser)

router.route('/login').post(authUser)

module.exports = router