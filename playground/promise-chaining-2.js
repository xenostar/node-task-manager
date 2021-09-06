require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("61347b5090204464074281fe")
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
