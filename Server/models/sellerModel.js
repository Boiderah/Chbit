const mongoose = require("mongoose");

const Sellerschema = mongoose.Schema({
    quantity: {
        type: String,
        required: true
    },
    coin: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    AccountNumber: {
        type: String,
        required: false
    },
    AccountName: {
        type: String,
        required: true
    },
    // AccountName: {
    //     type: String,
    //     required: true
    // },
    // AccountName: {
    //     type: String,
    //     required: true
    // },

});

const User = mongoose.model("Seller", Sellerschema);

module.exports = Seller;