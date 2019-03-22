const Joi = require("joi");
const mongoose = require("mongoose");

const roundSchema = new mongoose.Schema({
  reps: {
    type: Number,
    required: true,
    min: 0,
    max: 30
  },
  weight: {
    type: Number,
    required: true,
    min: 0,
    max: 150
  }
});

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  data: {
    type: [roundSchema],
    minlength: 1,
    required: true
  }
});

const logSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 50
  },
  records: {
    type: [exerciseSchema],
    minlength: 1,
    required: true
  }
});

function validateLog(log) {
  const schema = {
    title: Joi.string()
      .required()
      .min(1)
      .max(50),
    records: Joi.array()
      .items(
        Joi.object().keys({
          name: Joi.string()
            .required()
            .min(5)
            .max(50),
          data: Joi.array()
            .items(
              Joi.object().keys({
                reps: Joi.number()
                  .required()
                  .min(0)
                  .max(30),
                weight: Joi.number()
                  .required()
                  .min(0)
                  .max(150)
              })
            )
            .min(1)
        })
      )
      .min(1)
  };

  return Joi.validate(log, schema);
}

exports.logSchema = logSchema;
exports.validate = validateLog;
