const { Workout, validate } = require("../models/workout");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const workouts = await Workout.find().sort("name");
  res.send(workouts);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const workout = new Workout({
    title: req.body.title,
    exercises: req.body.exercises
  });
  await workout.save();

  res.send(workout);
});

router.put("/:id", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const workout = await Workout.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      exercises: req.body.exercises
    },
    { new: true }
  );

  if (!workout)
    return res.status(404).send("The workout with the given ID was not found.");

  res.send(workout);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const workout = await Workout.findByIdAndRemove(req.params.id);

  if (!workout)
    return res.status(404).send("The workout with the given ID was not found.");

  res.send(workout);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout)
    return res.status(404).send("The workout with the given ID was not found.");

  res.send(workout);
});

module.exports = router;
