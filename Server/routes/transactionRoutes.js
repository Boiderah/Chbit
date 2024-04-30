const express = require("express");
const { createTransaction, getMyTransaction, getAllTransactions, completedPayment, adminVerifyPayment, getMyPendingTransaction } = require("../controller/transactioncontroller");
const { protect } = require("../middleWare/authMiddleWare");

const router = express.Router();

router.route("/")
.post(protect, createTransaction)
.get(protect, getMyTransaction)
router.get("/all",protect, getAllTransactions)
router.get("/pending",protect, getMyPendingTransaction)
router.put("/completed", protect, completedPayment)
router.get("/adminverify/:id/:code", adminVerifyPayment)
// .put(completeTransction)
// router.put("completed",completedPayment)


// router.route("/login").post(authUser);

module.exports = router;
