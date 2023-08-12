var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Contact = module.exports = mongoose.model('contact', userSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}