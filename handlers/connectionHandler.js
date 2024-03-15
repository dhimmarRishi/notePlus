const mongoose = require("mongoose");

function setConnection(url) {
  try {
    mongoose.connect(url);
    console.log("Successfully connected to database");
  } catch {
    console.log("Error in connection");
  }
}

module.exports = {
  setConnection,
};
