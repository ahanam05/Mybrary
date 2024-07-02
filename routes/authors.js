const express = require("express");
const router = express.Router();
const Author = require('../models/author');

//All Authors Route
router.get('/', (req, res) =>{
    res.render('authors/index');
})

//New Author Route - displays the form
router.get('/new', (req, res) =>{
    res.render('authors/new', {author : new Author()});
})

//Create New Author
router.post('/', (req, res) =>{
    res.send('Create');
})


module.exports = router;