const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const notesRouter = require('./routes/notes');
app.use(express.json());

app.use('/api', notesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
