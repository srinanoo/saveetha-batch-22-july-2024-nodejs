const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const trainees = require('./expressController');

app.get("/api/v1/readAllTrainees", trainees.readAllTrainees);
app.post("/api/v1/createTrainee", trainees.createTrainee);
app.get("/api/v1/readSpecificTrainee", trainees.readSpecificTrainee);
app.put("api/v1/updateTrainee", trainees.updateTrainee);
app.delete("/api/v1/deleteTrainee/:id", trainees.deleteTrainee);

app.use("/*", (req, res) => res.send("No Route Match Found!"));

app.listen(4000, () => console.log("Server is listening on 4000"));