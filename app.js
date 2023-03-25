const express = require('express');
const app = express();
require('dotenv').config();
const config = require('./utilities/config');
const notesRouter = require('./routes/notes');
app.use(express.json());
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = config.MONGO_URI;
const port = config.PORT;

console.log(url);

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });
app.use(cors());

app.use('/api', notesRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

module.exports = app;
