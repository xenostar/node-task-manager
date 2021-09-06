require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("61347b5090204464074281fe")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("6134674be1653753fb231396")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log("e", e);
  });
