const http = require('http');
const trainees = require('./fsModule');

http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if(req.url === "/api/v1/createTrainee" && req.method === "POST") {
        trainees.createTrainee(req, res);
    } else if(req.url === "/api/v1/readAllTrainees") {
        trainees.readAllTrainees(req, res);
    } else {
        res.write("No Route Match found!")
        res.end()
    }

    // res.write("Server has been called");
    // res.end();
}).listen(4000, () => console.log('Server is running on port: 4000'));