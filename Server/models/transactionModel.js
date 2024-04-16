const mongoose = require("mongoose");

const transactionschema = mongoose.Schema({
    quantity: {
        type: String,
        required: true
    },
    coin: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    AccountNumber: {
        type: String,
        required: true
    },
    AccountName: {
        type: String,
        required: true
    },
    buyer: {
        type: String,
        required: true
    },
    Seller: {
        type: String,
        required: true
    },

});

const Seller = mongoose.model("Seller", transactionschema);

module.exports = Seller;