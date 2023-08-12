const mongoose = require("mongoose");

const Answers = new mongoose.Schema({
    questionOne: {
        type: String,
        required: false
    },
    questionTwo: {
        type: String,
        required: false
    },
    questionT: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Answers", Answers);