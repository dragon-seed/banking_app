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
        },

        balance: {
            type: Number,
            // required: true,
            default: 0,

        }
    },
    {
        timestamps: true,
    }


);

//This is for encrypting the password. Pre refers to calling a function before saving. It will be a middleware that has a next in it so after the operation is done it will move to the next one. 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
})
//

//Decrypting the password. Create a method call matchPassword. Bcrypt compares the password from our DB and the entered password. 
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
   
}

const User = mongoose.model('User', userSchema);

module.exports = User; 