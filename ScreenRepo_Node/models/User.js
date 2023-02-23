require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  re_pass: String,
  agree_term: String,
});
module.exports = mongoose.model("user", User);
