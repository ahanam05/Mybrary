const express = require("express");
const router = express.Router();

//All Authors Route
router.get('/', (req, res) =>{
    res.render('authors/index');
})

//New Author Route - displays the form
router.get('/new', (req, res) =>{
    res.render('authors/new');
})

//Create New Author
router.post('/', (req, res) =>{
    res.send('Create');
})


module.exports = router;