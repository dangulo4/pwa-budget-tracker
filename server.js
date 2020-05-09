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

// routes
app.use(require('./routes/api.js'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//Set up Mongo database.
const databaseUrl = process.env.MONGODB_URI || 'budget';
const collections = ['budget'];

//Set reference to our database.
const db = mongojs(databaseUrl, collections);

db.on('error', (error) => {
  console.log('Database Error:', error);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
