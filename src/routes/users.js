const router = require('express').Router();

// Sign in route for users
router.get('/users/signin', (req, res) => {
    res.render('signIn.hbs');
});

// Sign Up route for users
router.get('/users/signup', (req, res) => {
    res.render('signUp.hbs');
});



module.exports = router;