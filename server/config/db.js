const mongoose = require("mongoose");
const colors = require("colors");
const conectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb database ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongo Connection error ${error}`.bgRed);
  }
};

module.exports = conectDb;
