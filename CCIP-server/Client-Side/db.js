const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected");
    } catch (err) {
        console.log(err)
    }

}

module.exports = db