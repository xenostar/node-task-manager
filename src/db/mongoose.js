const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: "Bryan",
//   age: "Mike",
// });

// me.save()
//   .then(me => console.log(me))
//   .catch(error => console.log("Error", error));

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const myTask = new Task({
  description: "Super amazing task!",
  completed: false,
});

myTask
  .save()
  .then(task => console.log(task))
  .catch(error => console.log("Error", error));
