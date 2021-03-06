const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken')

//async handler will handle all the errors thrown at us 
const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password} = req.body;
    console.log(name, email, password);
    //check if user exists already
    const userExists = await User.findOne({email: email});

    if(userExists) {
        res.status(400)
        throw new Error("Invalid! User Already Exists");
    }
    
    const user = await User.create({
        name: name,
        email: email,
        password: password
    });
    //

    //if user doesn't exist 

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('An unexpected error occurred')
    }

    
});
//////////////////

//for login
const authUser = asyncHandler (async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    console.log(email, password)
    //find user in db
    const user = await User.findOne({ email: email });
    const passwordCheck = await user.matchPassword(password)
    console.log(passwordCheck)
    // if(user && (await user.matchPassword(password))) {
        if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            balance: user.balance,
            token: generateToken(),
        })
    } else {
        res.status(400)
        throw new Error('Incorrect email or password')
    }
    
});


//throwaway code 
const trackUser = asyncHandler (async (req, res) => {
    res.json({ 
        msg: "tracking users"  
      })
})
///

const depositMoney = asyncHandler (async ( req, res) => {
    const {email, amount} = req.body
    console.log(email, amount)
    const user = await User.findOne({ email: email });
    console.log(user)
    if (user){
        //check to make amount work with floats and decimals
        user.balance += parseFloat(amount)
        user.save()
        console.log(user.balance)
        res.json({
            _id: user._id,
            name: user.name,
            balance: user.balance,
        })
    } else {
        res.status(400)
        throw new Error('Requested user cannot access funds')
    }
})

const withdrawMoney = asyncHandler (async ( req, res) => {
    const {email, amount} = req.body
    console.log(email, amount)
    const user = await User.findOne({ email: email });
    console.log(user)
    if (user){
        //check to make amount work with floats and decimals
        user.balance -= parseFloat(amount)
        user.save()
        console.log(user.balance)
        // const readableBalance = formatFloatBalance(user.balance)
        res.json({
            _id: user._id,
            name: user.name,
            balance: user.balance,
        })
    } else {
        res.status(400)
        throw new Error('Requested user cannot access funds')
    }
})
const currentBalance = asyncHandler (async (req, res) => {
    console.log(req.body.email)
    const email = req.body.email
    console.log(email)
    const user = await User.findOne({ email: email });
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            balance: user.balance,
        })
    } else {
        res.status(400)
        throw new Error('User could not be located')
    }
})

module.exports = {registerUser, authUser, trackUser, depositMoney, withdrawMoney, currentBalance }