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
const bcrypt = require('bcrypt');
const users = require('./userSchema');

server.post("/register", async (req, res) => {
    try{
        const encryption = await bcrypt.hash(req.body.password, 10);
        const user_data = await users.create(
            {
                email: req.body.email,
                name: req.body.name,
                password: encryption
            }
        );
        res.status(201).json({ message: "Created", user_data });
        console.log("Data sent");
    }
    catch(error){
        console.error(`Error while registering user: ${error}`);
    }
});

// SIGN IN BACKEND

server.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try{
        const user_email = await users.findOne({email});
        if(user_email){
            const match = await bcrypt.compare(password, user_email.password);
            if(match){
                res.json({ message: "Authorized", user_email });
                console.log('Authorized');
            } 
            else{
                res.status(401).json({ message: "Unauthorized" });
                console.log('Password Unauthorized');
            }
        }
        else{
            console.log('Email Unauthorized');
        }
    }
    catch(error){
        console.error(`Unable to connect to the server: ${error}`);
    }
});

server.get("/register", async (req, res) => {
    try{
        const db = await users.find({});
        res.json(db);
    }
    catch(error){
        console.error(`Unable to fetch: ${error}`);
    }
});

// CHATBOT NODE BACKEND (WHERE NODE WILL SEND DATA/MESSAGE TO PYTHON'S BACKEND/SERVER)
const messages = require('./messageSchema');

const axios = require('axios')

server.post("/chatbot", async (req, res) => {
    const { message } = req.body;

    try{
        const content = await messages.create(
            {
                message: req.body.message
            }
        );
        res.json(content);
        console.log("Message recieved");

        const response = await axios.post("http://localhost:5001/chatbot", { message });
        res.json(response.data)
    }
    catch(e){
        console.log(`Unable to recieve message: ${e}`);
    }
});

server.get("/chatbot", async (req, res) => {
    try{
        const message = await messages.find({});
        res.json(message);
    }
    catch(e){
        console.log(`Unable to get message: ${e}`);
    }
});