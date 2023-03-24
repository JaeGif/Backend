const express = require('express');
const noteController = require('../controllers/notes');
const router = express.Router();

router.get('/notes', noteController.notes_get);
router.get('/notes/:id', noteController.note_get);
router.post('/notes', noteController.notes_post);
router.delete('/notes/:id', noteController.note_delete);
module.exports = router;
