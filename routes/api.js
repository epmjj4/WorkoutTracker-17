const router = require ("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req,res) => {
    // Workout.find().then(results => {
    //     res.json(results)
    // })
    // .catch(err => {
    //     res.json(err)
    // })
    Workout.aggregate([
        {
            $addFields:{
                totalDuration: {
                    $sum:'$exercises.duration'
                }
            }
        }
    ]).then((data) => {
        console.log(data);
        res.json(data);
    })
});

router.put("/api/workouts/:id", (req,res) => {
    Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body }},
        function(err, result) {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        }
      );
    
});

router.post('/api/workouts', (req, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields:{
                totalDuration: {
                    $sum:'$exercises.duration'
                }
            }
        }
    ]).then((data) => {
        console.log(data);
        res.json(data);
    });
  })
module.exports = router;