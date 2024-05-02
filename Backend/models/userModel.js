const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profile: {
        type: String,
        default: "https://i.pinimg.com/736x/8a/49/c2/8a49c25be4f98b48753e6ab17ed0c911.jpg"
    }
})

module.exports = mongoose.model("User", userSchema)