const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  old: Number,
  place: String,
  email: String,
  password: String,
});
module.exports = mongoose.model("user", userSchema);
