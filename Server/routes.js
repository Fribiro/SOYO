let router = require('express').Router();

router.get('/', function (req, res) {
    res.status(200).send("App is running");
});

var contactController = require('./controllers/usersController');

router.route('/contacts').post(contactController.new);

module.exports = router;