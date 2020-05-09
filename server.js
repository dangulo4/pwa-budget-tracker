const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const compression = require('compression');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// If deployed, use the deloyed database. Otherwise use the local mongo workout database"
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/budget';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require('./routes/api.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
