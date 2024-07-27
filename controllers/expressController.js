const file = "./trainees.json";
const fs = require("fs");
const logger = require('../services/loggers');

function createTrainee(req, res) {
    try {
        let data = fs.readFileSync(file1, "utf8");
        let newData = JSON.parse(data);
        console.log(newData, typeof(newData));
        let traineeObj = req.body;
        newData.push(traineeObj);

        fs.writeFileSync(file, JSON.stringify(newData));

        // let obj = {
        //     "msg": "Trainees Created Successfully!",
        //     "data": "",
        //     "error": ""
        // }
        // res.send(obj);

        res.status(200).json({"data": "", "msg": "Trainees Created Successfully!", "error": ""});
    } catch (err) {
        // console.error(err.message);
        // res.send("Unable to create trainee! Please try again!");

        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

        res.status(500).json({"data": "", "msg": "", "error": "Unable to create trainee! Please try again!"})
    }
}

function readAllTrainees(req, res) {
    try {
        fs.readFile(file, "utf8", (err, data) => {
            if(err) console.error(err.message);
            // console.log(JSON.parse(data));
            res.send(data);
        })
    } catch (err) {
        console.log(err.message);
        res.send("Unable to read trainee! Try again!");
    }
}

function readSpecificTrainee(req, res) {
    try {
        console.log(req.query);
    
        fs.readFile(file, "utf8", (err, data) => {
            if(err) console.error(err.message);
            let traineesData = JSON.parse(data);
            // let resultData = traineesData.filter(v => v.name === name);
            // console.log(resultData);
            let resultData = [];
            for(let i = 0; i < traineesData.length; i++) {
                if(traineesData[i].id === parseInt(req.query.id) || traineesData[i].id === req.query.id) {
                    resultData.push(traineesData[i]);
                }
            }
            res.send(resultData);
        })
    } catch (err) {
        console.log(err.message);
        res.send(err.message);
    }
}

function deleteTrainee(req, res) {
    try {
        fs.readFile(file, "utf8", (err, data) => {
            if(err) console.error(err.message);
            let traineesData = JSON.parse(data);
            let resultData = traineesData.filter(v => v.id !== parseInt(req.params.id));
            // console.log(resultData);

            fs.writeFileSync(file, JSON.stringify(resultData));
            res.send("Trainees deleted successfully!");
        })
    } catch (err) {
        console.log(err.message);
        res.send(err.message);
    }
}

function updateTrainee() {
    try {
        fs.readFile(file, "utf8", (err, data) => {
            if(err) console.error(err.message);
            let traineesData = JSON.parse(data);
            // console.log(resultData);
            let newData = {
                "id": 1,
                "name": "Name 1",
                "email": "name1@gmail.com"
            }
            for(let i = 0; i < traineesData.length; i++) {
                if(traineesData[i].id === newData.id) {
                    // traineesData[i].id = newData.id;
                    // traineesData[i].name = newData.name;
                    traineesData[i] = {...traineesData[i], ...newData};
                }
            }

            fs.writeFileSync(file, JSON.stringify(traineesData));
            console.log("Trainee updated successfully!");
        })
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    createTrainee,
    readAllTrainees,
    readSpecificTrainee,
    updateTrainee,
    deleteTrainee
}