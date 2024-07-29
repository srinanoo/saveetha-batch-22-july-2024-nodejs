const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const traineesRoutes = require('./routes/traineeRoutes');
app.use('/api/v1/trainees', traineesRoutes);

// const trainersRoutes = require('./routes/traineeRoutes');
// app.use('/api/v1/trainers', traineesRoutes);

// const classesRoutes = require('./routes/traineeRoutes');
// app.use('/api/v1/classes', traineesRoutes);

// const companyRoutes = require('./routes/traineeRoutes');
// app.use('/api/v1/company', traineesRoutes);



// Trainees DB
    // Trainees
    // Trainers
    // Classes
    // Batch
    // Company
    // Branch


app.use("/*", (req, res) => res.send("No Route Match Found!"));

app.listen(4000, () => console.log("Server is listening on 4000"));