const file = "./trainees.json";
const fs = require("fs");
const logger = require('../services/loggers');

const { TraineeModel } = require('../models/traineeModel');

async function createTrainee(req, res) {
    try {
        const trainee = new TraineeModel(req.body);
        await trainee.save();

        res.status(200).json({"data": "", "msg": "Trainee Created Successfully!", "error": ""});
    } catch (err) {
        // console.error(err.message);
        // res.send("Unable to create trainee! Please try again!");

        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

        res.status(500).json({"data": "", "msg": "", "error": err.message})
    }
}

async function readAllTrainees(req, res) {
    try {
        let results = await TraineeModel.find({});
        console.log(results);

        res.status(200).json({"data": results, "msg": "", "error": ""})
    } catch (err) {
        console.log(err.message);
        res.status(500).json({"data": "", "msg": "", "error": err.message})
    }
}

async function readSpecificTrainee(req, res) {
    try {
        let results = await TraineeModel.find({"_id": req.query.id});
        console.log(results);

        res.status(200).json({"data": results, "msg": "", "error": ""});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({"data": "", "msg": "", "error": err.message})
    }
}

async function deleteTrainee(req, res) {
    try {
        let results = await TraineeModel.deleteOne({"_id": req.params.id});
        console.log(results);

        if(results.deletedCount > 0)
            res.status(200).json({"data": "", "msg": "Trainee Deleted Successfully!", "error": ""});
        else
            res.status(401).json({"data": "", "msg": "", "error": "Unable to find Trainee!"});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({"data": "", "msg": "", "error": err.message})
    }
}

async function updateTrainee(req, res) {
    try {
        console.log(req.body);
        let results = await TraineeModel.updateOne({"_id": req.body._id}, {$set: req.body});
        console.log(results);

        if(results.modifiedCount > 0)
            res.status(200).json({"data": "", "msg": "Trainee Updated Successfully!", "error": ""});
        else
            res.status(401).json({"data": "", "msg": "", "error": "Unable to find Trainee!"});
    } catch (err) {
        res.status(500).json({"data": "", "msg": "", "error": err.message})
    }
}

module.exports = {
    createTrainee,
    readAllTrainees,
    readSpecificTrainee,
    updateTrainee,
    deleteTrainee
}