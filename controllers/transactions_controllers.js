// @desc Get all transactions
// @routes GET /transactions
exports.getTransactions = (req, res, next) => {
    res.send("GET transactions")
}

// @desc Add transaction
// @routes PORT /transactions
exports.addTransactions = (req, res, next) => {
    res.send("POST transactions")
}

// @desc Delete transactions
// @routes DELETE /transactions/:id
exports.deleteTransactions = (req, res, next) => {
    res.send("DELETE transactions")
}
