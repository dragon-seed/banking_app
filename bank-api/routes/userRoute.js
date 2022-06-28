const express = require('express')
const registerUser  = require('../controllers/userController')
const router = express.Router();

//create an API endpoint. We're storing data in backend, so create a post request. 
router.route('/').post(registerUser)

module.exports = router