const express = require('express')
const { registerUser, authUser, trackUser, depositMoney }  = require('../controllers/userController')
const router = express.Router();

//create an API endpoint. We're storing data in backend, so create a post request. 
router.route('/').post(registerUser)

router.route('/login').post(authUser)

router.route('/deposit').post(depositMoney)


//throwaway code 
router.route('/track').get(trackUser)



module.exports = router