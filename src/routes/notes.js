const router = require('express').Router();

// Gets all user notes from database
router.get('/notes', (req, res) => {
    res.send("Gets all notes from mongo DB")
});



module.exports = router;