const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rnegi0598:hNSc9UrmcQ73MeJT@cluster0.j0elyxo.mongodb.net/?retryWrites=true&w=majority",
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