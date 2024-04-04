const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

const User = mongoose.model("User", userschema);


module.exports = User;