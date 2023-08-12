const mongoose = require("mongoose");

const User = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("User", User);