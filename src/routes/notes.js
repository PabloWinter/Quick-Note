const router = require('express').Router();

// Require model note to instantiate Note
const Note = require('../models/note');

// Route to create a new Note
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
        // If title and description are valid, intanciate a new note
        // save it, and redirect template with all notes from database
        const newNote =  new Note({ title, description});
        await newNote.save();
        res.redirect('/notes');
    }
});

// Gets all user notes from database and sort then by date
router.get('/notes', async (req, res) => {
    const userNotes = await Note.find().sort({date: 'desc'});
    res.render('all-notes', { userNotes });
});

// Route to edit existing notes in database
router.get('/notes/edit/:id', async (req,res) => {
    const note = await Note.findById(req.params.id);
    res.render('edit-note', {note});
});

// Route to edit the note using http method PUT
router.put('/edit-note/:id', async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    res.redirect('/notes');
});




module.exports = router;