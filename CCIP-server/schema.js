const mongoose = require("mongoose")

const DBStoreSchema = new mongoose.Schema({
    ciphertext: { type: String },
    hash : {type : String}
});

const DBStore = mongoose.model("DBStore", DBStoreSchema);
module.exports = DBStore;