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

module.exports = registerUser;