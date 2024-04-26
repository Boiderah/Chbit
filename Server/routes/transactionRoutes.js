const express = require("express");
const { createTransaction, getMyTransaction, getAllTransactions, completedPayment, adminVerifyPayment } = require("../controller/transactioncontroller");
const { protect } = require("../middleWare/authMiddleWare");

const router = express.Router();

router.route("/")
.post(protect, createTransaction)
.get(protect, getMyTransaction)
router.get("/all",getAllTransactions)
router.put("/completed", protect, completedPayment)
router.get("/adminverify/:id/:code", adminVerifyPayment)
// .put(completeTransction)
// router.put("completed",completedPayment)


// router.route("/login").post(authUser);

module.exports = router;
