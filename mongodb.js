// CRUD create read update delete 3.1.10
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users")
    //   .updateOne({ _id: new ObjectID("6132afdcfd093e8f7bba882d") }, { $inc: { age: 1 } })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .deleteMany({ age: 32 })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .deleteOne({ _id: new ObjectID("6132ba9f37df070ce80fffbb") })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
);
