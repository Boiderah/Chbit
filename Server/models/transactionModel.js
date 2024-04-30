const mongoose = require("mongoose");

const transactionschema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  coin: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  AccountNumber: {
    type: Number,
    required: true,
  },
  AccountName: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: false,
  },
  SellerId: {
    type: String,
    required: true,
  },
  SellerName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default:"started"
  },
});

const Transaction = mongoose.model("Transactions", transactionschema);

module.exports = Transaction;
