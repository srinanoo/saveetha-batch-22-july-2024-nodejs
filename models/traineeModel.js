const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const db = require('../db');
db.dbConnection();

const traineeSchema = new Schema({
    "name": {
        type: String,
        required: [true, "Please enter the Trainee Name"]
    },
    "gender": {
        type: String,
        required: true
    },
    "dob": Date,
    "phone": Number,
    "email": String,
    "active": Boolean
});

const TraineeModel = mongoose.model("Trainee", traineeSchema);

module.exports = {TraineeModel};