const Joi = require("joi");
const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  reps: {
    type: Number,
    required: true,
    min: 0,
    max: 30
  },
  sets: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  }
});

const Workout = mongoose.model(
  "Workouts",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50
    },
    exercises: {
      type: [exerciseSchema],
      minlength: 1,
      required: true
    }
  })
);

function validateWorkout(workout) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    exercises: Joi.array()
      .items(
        Joi.object().keys({
          name: Joi.string()
            .required()
            .min(5)
            .max(50),
          reps: Joi.number()
            .min(0)
            .max(30)
            .required(),
          sets: Joi.number()
            .min(0)
            .max(10)
            .required()
        })
      )
      .min(1)
  };

  return Joi.validate(workout, schema);
}

exports.Workout = Workout;
exports.validate = validateWorkout;
