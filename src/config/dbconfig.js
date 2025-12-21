const { default: mongoose } = require("mongoose");

let dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.taly7jm.mongodb.net/${process.env.DB_USERNAME}?appName=Cluster0`
    )
    .then(() => {
      console.log("Database Connection Succesfully");
    })
    .catch((err) => {
      console.log(err.message || "Database Connection Fail");
    });
};

module.exports = dbConnection;
