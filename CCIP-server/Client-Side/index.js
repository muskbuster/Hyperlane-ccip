const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const ethers = require("ethers");
const db = require("./db")
const DBStore = require("./schema")

const app = express();
db()

app.use(bodyparser());

app.use(cors());

app.post("/token", async (req, res) => {
    try {
        const { ciphertext } = req.body;
        const hashOfCiphertext = ethers.id(ciphertext);
        // add to DB
        await DBStore.create({
            ciphertext: ciphertext,
            hash: hashOfCiphertext
        })
        res.status(200).json({
            hash: hashOfCiphertext
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
})

app.get("/token", async (req, res) => {
    try {
        const hash = req.query.hash;
        // retrieve from DB
        const requestedCIphertext = await DBStore.findOne({ hash: hash });
        res.status(200).json({
            ciphertext: requestedCIphertext.ciphertext
        })
    } catch (err) {
        res.status(500).json({
            err
        })
    }
})

app.listen(3000, () => {
    console.log("App is running at 3000")
})