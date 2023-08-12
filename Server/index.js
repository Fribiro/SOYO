const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("App is running");
});


const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
})
.catch((error) => console.log(`${error} did not connect`));
