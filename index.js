
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

var routes = require('./route');
routes(app);
app.use=(bodyParser.json());
app.listen(9000, () => {
    console.log('Server is up and running on port number 9000');
});