const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ethers = require("ethers");
const db = require("./db");
const DBStore = require("./schema");
const dotenv = require('dotenv')

const app = express();
db();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Endpoint to store ciphertext and hash it
app.post("/token", async (req, res) => {
    try {
        const { ciphertext } = req.body;
        if (!ciphertext) {
            return res.status(400).json({ error: 'Ciphertext is required' });
        }

        const inputBytes = ethers.utils.arrayify(ciphertext);
        const hashOfCiphertext = ethers.utils.keccak256(inputBytes);

        // Save to DB
        await DBStore.create({
            ciphertext: ciphertext,
            hash: hashOfCiphertext
        });

        res.status(200).json({
            hash: hashOfCiphertext
        });
    } catch (err) {
        console.error(`Failed to store ciphertext: ${err}`);
        res.status(500).json({
            error: 'Failed to store ciphertext'
        });
    }
});

// Endpoint to retrieve ciphertext by hash
app.get("/token", async (req, res) => {
    try {
        const hash = req.query.hash;
        if (!hash) {
            return res.status(400).json({ error: 'Hash query parameter is required' });
        }

        // Retrieve from DB
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
            error: 'Failed to fetch ciphertext'
        });
    }
});

// Start the server
const PORT = 3004;
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});
