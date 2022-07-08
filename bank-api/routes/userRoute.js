const express = require('express')
const { registerUser, authUser, trackUser, depositMoney, withdrawMoney, currentBalance }  = require('../controllers/userController')
const router = express.Router();

//create an API endpoint. We're storing data in backend, so create a post request. 
router.route('/').post(registerUser)

router.route('/login').post(authUser)

router.route('/deposit').post(depositMoney)

router.route('/withdraw').post(withdrawMoney)

router.route('/currentbalance').post(currentBalance)


//throwaway code 
router.route('/track').get(trackUser)



module.exports = router