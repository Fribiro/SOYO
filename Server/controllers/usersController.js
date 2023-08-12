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

exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: user
        });
    });
};

exports.update = function (req, res) {Contact.findById(req.params.contact_id, function (err, user) {
        if (err)
            res.send(err);user.name = req.body.name ? req.body.name : user.name;
        user.gender = req.body.gender;
        user.email = req.body.email;
        user.phone = req.body.phone;// save the user and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};

exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};