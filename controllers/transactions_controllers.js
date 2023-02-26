const Transaction = require('../models/transaction')


// @desc Get all transactions
// @routes GET /transactions
exports.getTransactions = (req, res, next) => {
    try{
        const transactions = Transaction.find()
        return res.status(200).json({
            success: true,
            data: transactions
        })
    } catch(err){
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}

// @desc Add transaction
// @routes PORT /transactions
exports.addTransactions = async (req, res, next) => {
    try{
        const { text, amount } = req.body
        const transaction = await Transaction.create(req.body)
        return res.status(201).json({
            success: true,
            data: transaction
,        })
    }catch(err)
    {
        res.status(500).json({
            success: false,
            data: "Server Error"
        })
    }
}

// @desc Delete transactions
// @routes DELETE /transactions/:id
exports.deleteTransactions = (req, res, next) => {
    res.send("DELETE transactions")
}
