const express = require('express');
const app = express();
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const transactions = require('./routes/transactions')

app.use('/transactions', transactions)

dotenv.config({ path: './config/config.env' })

connectDB()

app.use(express.json())

const PORT =  process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("henlo")
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))