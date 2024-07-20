const file = "./trainees.json";
const fs = require("fs");

function createTrainee(req, res) {
    try {
        let data = fs.readFileSync(file, "utf8");
        let newData = JSON.parse(data);
        console.log(newData, typeof(newData));
        let traineeObj = {
            "id": 1,
            "name": "Name 1",
            "phone": "1234567890",
            "email": "srinanoo@gmail.com"
        }
        newData.push(traineeObj);

        fs.writeFileSync(file, JSON.stringify(newData));

        res.write("Trainee Created successfully!");
        res.end();
    } catch (err) {
        console.error(err.message);
        res.write("Unable to create trainee! Please try again!");
        res.end();
    }
}

function readAllTrainees(req, res) {
    try {
        fs.readFile(file, "utf8", (err, data) => {
            if(err) console.error(err.message);
            // console.log(JSON.parse(data));
            res.write(data);
            res.end();
        })
    } catch (err) {
        console.log(err.message);
        res.write("Unable to read trainee! Try again!");
        res.end();
    }
}

function readSpecificTrainee(name) {
    try {
        fs.readFile(file, "utf8", (err, data) => {
            if(err) console.error(err.message);
            let traineesData = JSON.parse(data);
            // let resultData = traineesData.filter(v => v.name === name);
            // console.log(resultData);
            let resultData = [];
            for(let i = 0; i < traineesData.length; i++) {
                if(traineesData[i].name === name) {
                    resultData.push(traineesData[i]);
                }
            }
            console.log(resultData);
        })
    } catch (err) {
        console.log(err.message);
    }
}

function deleteTrainee(id) {
    try {
        fs.readFile(file, "utf8", (err, data) => {
            if(err) console.error(err.message);
            let traineesData = JSON.parse(data);
            let resultData = traineesData.filter(v => v.id !== id);
            // console.log(resultData);

            fs.writeFileSync(file, JSON.stringify(resultData));
            console.log("Trainees deleted successfully!");
        })
    } catch (err) {
        console.log(err.message);
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