const Transaction = require("../models/transactionModel");
const emailSender = require("../utility/emailSender");
const generatetoken = require("../utility/generatetokenutility");

const createTransaction = async (req, res) => {
  const { quantity, coin, rate, phoneNumber, bankName, AccountNumber, AccountName  } = req.body;
  if (!quantity || !coin|| !rate|| !phoneNumber || !bankName || !AccountNumber || !AccountName ) {
    return res.status(400).send("Please fill all the fields");
  }
  console.log(req.user);
  const SellerId = req.user.id
  const SellerName = req.user.fullName
  const transaction = await Transaction.find({ SellerId: SellerId});
  const pending = transaction.filter((transaction) => transaction.status !== "completed")
  
  console.log(pending);

  if (pending.length > 0) {
    res.status(401).send("Already have a pending transaction");
} else {
    const newTransaction = await Transaction.create({
        quantity, 
        coin, 
        rate, 
        phoneNumber, 
        bankName, 
        AccountNumber, 
        AccountName,
        SellerId,
        SellerName,
        status: "started"
    });
    
    if (newTransaction) {
        res.send({ message: "successfully created" });
    }
    else{
        res.status(401).send("failed to creaate transaction");
    }
  }
};
const getMyTransaction = async (req, res) => {
  

  const SellerId = req.user.id
  const transaction = await Transaction.find({ SellerId: SellerId});
  
  if (transaction) {
      return res.status(200).json(transaction);
    } else {
        return res.status(200).send("You have no pending transacctions");
    }
};
const getMyPendingTransaction = async (req, res) => {
  const SellerId = req.user.id
  const transaction = await Transaction.find({ SellerId: SellerId});
  const pending = transaction.filter((transaction) => transaction.status !== "completed")
  if (pending.length > 0) {
      return res.status(200).json(pending);
    } else {
        return res.status(400).send("You have no pending transacctions");
    }
};
const getAllTransactions = async (req, res) => {
    console.log("i got here");
    try {
        console.log("i got here");
        const transactions = await Transaction.find();
        return res.status(200).json(transactions);
    } catch (error) {
        res.status(401).json(error);
    }
};
const completedPayment = async (req, res) => {
    try {
        const SellerId = req.user.id
        const transaction = await Transaction.findOne({SellerId: SellerId});
        if (transaction.status === "started"){
            transaction.status = "awaiting admin confirmation"
            console.log(transaction.status);
            const added = await transaction.save();
            console.log(transaction.status);
            console.log("Saved transaction");

            emailSender("emmanuelokezie101@gmail.com", transaction.SellerName, `http://localhost:4000/transaction/adminverify/${transaction._id}/${process.env.VERIFICATION_CODE}`)
            console.log("sent mail");
            return res.status(200).send("successfull, awaiting admin confirmation");
        }
        else{
            return res.status(401).send("You have no started transactions");
        }
    } catch (error) {
        console.log("failed");
        res.status(401).send(error);
    }
};
const adminVerifyPayment = async (req, res) => {
    console.log("req.params.id");
    try {
        const transaction = await Transaction.findById(req.params.id);
        const codeConfirmed = req.params.code === process.env.VERIFICATION_CODE
        if (transaction.status === "awaiting admin confirmation" && codeConfirmed){
            transaction.status = "approved";
            const added = await transaction.save();
            return res.status(200).send("transaction approved");
        }
        else{
            return res.status(401).send("this transaction is not awaiting admin confirmation");
        }
    } catch (error) {
        console.log("failed");
        res.status(401).send(error);
    }
};

module.exports = { createTransaction, getMyTransaction, getAllTransactions, completedPayment, adminVerifyPayment, getMyPendingTransaction};

