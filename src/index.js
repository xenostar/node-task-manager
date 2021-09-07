const express = require("express");
require("./db/mongoose");
const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT || 9000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled.");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   if (process.env.MODE === "maintenance") {
//     res.status(503).send("Server currently under maintenance.");
//   } else {
//     next();
//   }
// });

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
  console.log(`Launch the app at: http://localhost:${port}`);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("6136cf8609330c21321aeafa");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("6136ceb5f4933a205734ff75");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
