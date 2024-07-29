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
        required: [true, "Please enter the Gender"]
    },
    "dob": Date,
    "phone": Number,
    "email": String,
    "active": Boolean
});

const TraineeModel = mongoose.model("trainees", traineeSchema);

module.exports = {TraineeModel};