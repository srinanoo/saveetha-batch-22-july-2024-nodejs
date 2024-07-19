const file = "./trainees.json";
const fs = require("fs");

function createTrainee() {
    try {
        let data = fs.readFileSync(file, "utf8");
        console.log(typeof(data));
        let newData = JSON.parse(data);
        console.log(newData, typeof(newData));
        let traineeObj = {
            "id": 1,
            "name": "Name 1",
            "phone": "1234567890",
            "email": "srinanoo@gmail.com"
        }
        newData.push(traineeObj);
        console.log(newData);

        fs.writeFileSync(file, JSON.stringify(newData));
    } catch (err) {
        console.error(err.message);
    }
}
// createTrainee();

function readAllTrainees() {
    try {
        fs.readFile(file, "utf8", (err, data) => {
            if(err) console.error(err.message);
            console.log(JSON.parse(data));
        })
    } catch (err) {
        console.log(err.message);
    }
}
readAllTrainees();