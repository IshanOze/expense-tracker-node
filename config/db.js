const mongoose = require('mongoose')


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("mongoDB connected")
    } catch(err)
    {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB