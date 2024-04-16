const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    phoneNumber: {
        type: String,
        required: false
    },
},
{
    timestamps: true
})
userschema.methods.matchPassword = async function (enteredPasswords) {
    return await bcrypt.compare(enteredPasswords, this.password);
}

userschema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model("User", userschema);


module.exports = User;