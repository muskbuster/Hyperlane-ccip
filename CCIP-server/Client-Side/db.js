const mongoose = require("mongoose");

const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://vastas2002:cKaGxQ07XsKVJYXn@cluster0.rsversr.mongodb.net/")
        console.log("DB Connected");
    } catch (err) {
        console.log(err)
    }

}

module.exports = db