require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: String,
});
module.exports = mongoose.model("user", User);
