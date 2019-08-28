const router = require('express').Router();

// Gets all user notes from database
router.get('/notes', (req, res) => {
    res.send("Gets all notes from mongo DB")
});

// Create a new Note
router.get('/notes/create', (req, res) => {
    res.render('./create-new-note');
})



module.exports = router;