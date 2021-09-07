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

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "nodejsissuperfun", { expiresIn: "7 days" });
//   console.log(token);

//   const data = jwt.verify(token, "nodejsissuperfun");
//   console.log(data);
// };

// myFunction();
