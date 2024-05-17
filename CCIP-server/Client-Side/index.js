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
        if (!hash) {
            return res.status(400).json({ error: 'Hash query parameter is required' });
        }
        // retrieve from DB
        const requestedCiphertext = await DBStore.findOne({ hash: hash });
        if (!requestedCiphertext) {
            return res.status(404).json({ error: 'Ciphertext not found' });
        }
        res.status(200).json({
            ciphertext: requestedCiphertext.ciphertext
        });
    } catch (err) {
        console.error(`Failed to fetch ciphertext: ${err}`);
        res.status(500).json({
            error: err.message
        });
    }
});

app.listen(3004, () => {
    console.log("App is running at 3000")
})