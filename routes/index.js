//defines all the routes for the index page
const express = require("express");
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index');
})

module.exports = router;
