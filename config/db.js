const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017",
      {
        dbName: "polling-api",
      }
    );
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;