const express = require('express');
const peopleRoute = require('./routes/peopleRoute');
const app = express();

app.use(express.json());
app.use('/people', peopleRoute);

module.exports = app;