require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const User = require("./models/user.model");

mongoose.connect(config.connectionString);

const app = express();
app.use(express.json());
app.use(cors({ origin: "*"}));

//Create Account
app.get("/create-account", async(req, res) => { 
    const { fullName, email, password } = req.body;

    if(!fullName || !email || !password) {
        return res
            .status(400)
            .json({ error: true, message:"All fields are required"});
    }
    const isUser = await User.findOne({ email });
    if(isUser) {
        return res
            .status(400)
            .json({ error: true, message: "User already exists" });
    }
});

app.listen(8000);
module.exports = app;

