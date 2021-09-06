require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("613666f139761bb46d1e5aca", { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
