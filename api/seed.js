// const { Workout } = require("./models/workout");
const { User } = require("./models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const config = require("config");

const workoutData = [
  {
    title: "Arm Day",
    exercises: [
      {
        name: "Bicep Curls",
        reps: 8,
        sets: 3
      },
      {
        name: "Tricep Extensions",
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    title: "Leg Day",
    exercises: [
      {
        name: "Squats",
        reps: 6,
        sets: 3
      },
      {
        name: "Lunges",
        reps: 8,
        sets: 3
      }
    ]
  },
  {
    title: "Back Day",
    exercises: [
      {
        name: "Pull Ups",
        reps: 6,
        sets: 5
      },
      {
        name: "Mid Rows",
        reps: 8,
        sets: 3
      }
    ]
  }
];

//Initializes database with seed data
async function seed() {
  const db = config.get("db");
  mongoose.set("useCreateIndex", true);
  mongoose.connect(db, { useNewUrlParser: true });

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash("12345", salt);

  const userData = [
    {
      username: "Tommy",
      email: "tommy1234@gmail.com",
      password: hashPassword,
      workouts: workoutData,
      isAdmin: true
    },
    {
      username: "Joe",
      email: "joe1234@gmail.com",
      password: hashPassword,
      workouts: workoutData
    },
    {
      username: "Holly",
      email: "holly1234@gmail.com",
      password: hashPassword,
      workouts: workoutData
    }
  ];

  // await Workout.deleteMany({});
  await User.deleteMany({});

  // await Workout.insertMany(workoutData);
  await User.insertMany(userData);

  mongoose.disconnect();

  console.log("Database has been seeded!");
}

seed();
