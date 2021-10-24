const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    level:Number,
    password: String
})
module.exports = mongoose.model('user', userSchema)