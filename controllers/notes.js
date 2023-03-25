const mongoose = require('mongoose');
const Note = require('../models/note');

exports.notes_get = async (req, res, next) => {
  const notes = await Note.find({});
  res.json(notes);
};

exports.note_get = async (req, res, next) => {
  const id = req.params.id;
  const note = await Note.find({ id: Number(id) });
  note ? res.json(note) : res.sendStatus(404);
};
exports.notes_post = async (req, res, next) => {
  const body = req.body;

  if (!body.content) {
    // need to call return or code will continue to execute
    return res.status(400).json({
      error: 'content missing',
    });
  }

  const note = await new Note({
    content: body.content,
    important: body.important || false,
    id: generateId(),
  }).save();

  res.json(note);
};
exports.note_delete = async (req, res, next) => {
  const id = req.params.id;
  const note = await Note.findOneAndDelete({ id: Number(id) });
  res.sendStatus(204);
};

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};
