require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// CONNECTION OF DATABASE
const MongoDB = require('./MongoDB')
MongoDB();

const connection = {
    origin: 'http://localhost:3000',
    credentials: true
}

const server = express();
server.use(cors(connection));
server.use(express.json());

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is LIVE! \nPORT: ${PORT}`);
});

server.get('/', (req, res) => {
    res.send("Server is Live");
});

// SIGN UP BACKEND


// SIGN IN BACKEND
const bcrypt = require('bcrypt');
const users = require('./userSchema');

server.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try{
        const user_email = await users.findOne({user_email});
        if(user_email){
            const match = await bcrypt.compare(password, user_email.password);
            if(match){
                res.json({ message: "Authorized", user_email });
            } 
            else{
                res.status(401).json({ message: "Unauthorized" });
            }
        }
    }
    catch(error){
        console.error("Unable to connect to the server: ", error);
    }
});

server.get("/login", async (req, res) => {
    try{
        const db = await users.find({});
        res.json(db);
    }
    catch(error){
        console.error("Unable to fetch: ", error);
    }
});