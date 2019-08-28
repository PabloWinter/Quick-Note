const router = require('express').Router();

// Sign in route for users
router.get('/users/signin', (req, res) => {
    res.send("Sign in please");
});

// Sign Up route for users
router.get('/users/signup', (req, res) => {
    res.send("Sign Up please");
});




module.exports = router;