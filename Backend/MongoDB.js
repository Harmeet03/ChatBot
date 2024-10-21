const mongoose = require('mongoose');

const database = async() => {
    try{
        await mongoose.connect(process.env.DATABASE_CONNECTION);
        console.log("MongoDB Connected");
    }
    catch(error){
        console.log("Error in MongoDB Connection: ", error);
    }
}

module.exports = database;