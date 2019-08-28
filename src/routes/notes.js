const router = require('express').Router();

const Note = require('../models/note');

// Create a new Note
router.get('/notes/create', (req, res) => {
    res.render('./create-new-note');
})

// Handling new note data from create new note layout
router.post('/notes/new-note', async (req, res) => {

    // Array to store error messages if any
    const errorhandler = [];
    // Getting title and description from request body
    const {title, description} = req.body;

    // Simple validation to check for empty input from user
    if(!title){
        errorhandler.push({tetx: "Please insert a title"});
    }
    if(!description){
        errorhandler.push({text: "Please insert a description"});
    }
    
    if(errorhandler.length > 0){
        res.render('create-new-note', { errorhandler, title, description });
    }
    else{
        const newNote =  new Note({ title, description});
        await newNote.save();
        res.redirect('/notes');
    }
});

// Gets all user notes from database
router.get('/notes', (req, res) => {
    res.render('notes');
});


module.exports = router;