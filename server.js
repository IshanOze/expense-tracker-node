const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const app = express()
const connectDB = require('./config/db')
const transactions = require('./routes/transactions')

connectDB()

app.use(express.json())
app.use('/transactions', transactions)
dotenv.config({ path: './config/config.env'})
PORT = process.env.PORT || 5000



app.get('/', (req, res) => {
    res.send("Hello from server")
})

app.listen(PORT, console.log(`Server running at ${PORT}`))