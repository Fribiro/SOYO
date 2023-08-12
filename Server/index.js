const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const apiRoutes = require("./routes");
const mongoose = require("mongoose")

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', apiRoutes)


mongoose.connect('mongodb://localhost/4000', { useNewUrlParser: true});
var db = mongoose.connection;
db ? console.log("Db connected successfully") : console.log("Error connecting db")

app.listen(process.env.PORT, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
});