const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

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
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400)
        throw new Error('An unexpected error occurred')
    }

    
});
//////////////////

//for login
const authUser = asyncHandler (async (req, res) => {
    const { email, password } = req.body;
    //find user in db
    const user = await User.findOne({ email: email });
    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400)
        throw new Error('Incorrect email or password')
    }
    
});

module.exports = {registerUser, authUser }