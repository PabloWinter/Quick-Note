const router = require('express').Router();


router.get('/', (req, res) => {
    res.send("Main Page");
})



module.exports = router;