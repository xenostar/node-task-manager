require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("613666f139761bb46d1e5aca", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("613666f139761bb46d1e5aca", 5)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log("e", e);
  });
