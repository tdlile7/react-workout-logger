const { Workout } = require("./models/workout");
const { User } = require("./models/user");
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

const userData = [
  {
    name: "Tommy",
    email: "tommy1234@gmail.com",
    password: "12345"
  },
  {
    name: "Joe",
    email: "joe1234@gmail.com",
    password: "12345"
  },
  {
    name: "Holly",
    email: "holly1234@gmail.com",
    password: "12345"
  }
];

//Initializes database with seed data
async function seed() {
  const db = config.get("db");
  mongoose.set("useCreateIndex", true);
  mongoose.connect(db, { useNewUrlParser: true });

  await Workout.deleteMany({});
  await User.deleteMany({});

  await Workout.insertMany(workoutData);
  await User.insertMany(userData);

  mongoose.disconnect();

  console.log("Database has been seeded!");
}

seed();
