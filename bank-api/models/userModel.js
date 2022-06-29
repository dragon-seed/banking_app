const mongoose = require("../connection.js") //no need to connect to 'mongoose' since it's already connected in connection.js 
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String, 
            required: true, 
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    {
        timestamps: true,
    }


)

const User = mongoose.model('User', userSchema);

module.exports = User; 