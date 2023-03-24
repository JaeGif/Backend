const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 5,
  },
  important: { type: Boolean },
});

module.exports = mongoose.model('Note', NoteSchema);
