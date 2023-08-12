Contact = require('../models/userModel');

exports.new = async (req, res) => {
    try {
        var user = new Contact();
        user.name = req.body.name ? req.body.name : user.name;
        user.email = req.body.email;
        user.phone = req.body.phone;
        await user.save();
        res.status(200).json({
            status: "SUCCESS",
            data : user
        })
    } catch (error) {
        res.status(500).send("An internal server error occured.")
        error ? console.log(error) : null;
    }
};