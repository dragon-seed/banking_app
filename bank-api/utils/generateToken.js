//Created for token. I had to use npm i jsonwebtoken to install this on package.json 

const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = generateToken;

