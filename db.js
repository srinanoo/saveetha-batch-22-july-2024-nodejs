const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnection() {
    try {
        // await mongoose.connect("mongodb://localhost:27017/TraineesDB");
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected!");
    } catch(e) {
        console.log(e.message);
    }
}

module.exports = { dbConnection };