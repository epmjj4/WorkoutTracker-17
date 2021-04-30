const router = require ("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req,res) => {
    Workout.find().then(results => {
        res.json(results)
    })
    .catch(err => {
        res.json(err)
    })

});
