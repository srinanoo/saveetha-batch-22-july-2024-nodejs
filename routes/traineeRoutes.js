const router = require('express').Router();

const trainees = require('../controllers/expressController');

router.get("/readAllTrainees", trainees.readAllTrainees);
router.post("/createTrainee", trainees.createTrainee);
router.get("/readSpecificTrainee", trainees.readSpecificTrainee);
router.put("/updateTrainee", trainees.updateTrainee);
router.delete("/deleteTrainee/:id", trainees.deleteTrainee);

module.exports = router;