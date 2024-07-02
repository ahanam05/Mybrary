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
router.post('/', async (req, res) =>{
    const author = new Author({
        name: req.body.name,
    })
    try{
        const newAuthor = await author.save();
        //res.redirect(`authors/${newAuthor.id}`);
        res.redirect(`authors`);
    }catch{
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error Creating Author'
        })
    }
    
})


module.exports = router;

/* Can access whatever is sent via the post form through the body in the create route
   The body-parser library needs to be installed to access req.body
   Specify which elements of the body need to be read
   Create a partials file to render the error message upon incorrect creation
   Everything in mongodb is done asynchronously, we should use async-await for the same
 */