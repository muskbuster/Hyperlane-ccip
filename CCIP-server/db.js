const mongoose = require("mongoose");

const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://<redacted>:<redacted>@cluster0.rsversr.mongodb.net/")
        console.log("DB Connected");
    } catch (err) {
        console.log(err)
    }

}

module.exports = db