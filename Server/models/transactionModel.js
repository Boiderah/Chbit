const mongoose = require("mongoose");

const transactionschema = mongoose.Schema({
  quantity: {
    type: String,
    required: true,
  },
  coin: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
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
    type: String,
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
