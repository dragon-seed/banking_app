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


);

//call a function before saving. It will be a middleware that has a next in it so after the operation is done it will move to the next one. 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', userSchema);

module.exports = User; 