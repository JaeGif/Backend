const mongoose = require('mongoose');
const Note = require('../models/note');

let notes = [
  { id: 1, content: 'HTML is easy', important: true },
  { id: 2, content: 'Browser can execute only JavaScript', important: false },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
];
exports.notes_get = (req, res, next) => {
  res.json(notes);
};

exports.note_get = (req, res, next) => {
  const id = req.params.id;
  const note = notes.find((note) => String(note.id) === id);
  note ? res.json(note) : res.sendStatus(404);
  res.json(note);
};
exports.notes_post = (req, res, next) => {
  const body = req.body;

  if (!body.content) {
    // need to call return or code will continue to execute
    return res.status(400).json({
      error: 'content missing',
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  };

  notes = notes.concat(note);
  res.json(note);
};
exports.note_delete = (req, res, next) => {
  const id = req.params.id;
  notes = notes.filter((note) => String(note.id) !== id);
  // 204 means no content
  response.sendStatus(204);
};

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};
