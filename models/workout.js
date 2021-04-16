const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [{
            type: {
                type: String,
                require: "Please enter exercise type you want to do.",
                trim: true,
            },
            name: {
                type: String,
                require: "Please enter the name of the exercise you would like to do.",
                trim: true,
            },
            weight: {
                type: Number,

            },
            reps: {
                type: Number,

            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            duration: {
                type: Number,
                required: "Please enter how long you would like to train for in minutes."
            },

        }]
    }, {
        toJSON: {
            virtuals: true
        }
    }



)