const { connect } = require("http2");
require('dotenv').config();

/*if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
} -- SHOULD BE UNCOMMMENTED BUT??*/

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require('./routes/index'); //. means relative to current path
const authorRouter = require('./routes/authors');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //tells us where the views are available
app.set('layout', 'layouts/layout'); //to set the layout file, duplicates all the html files
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
const connectionString = process.env.DATABASE_URL;

//connecting to mongoDb atlas 

const connectToDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');
    } catch (error) {
        console.error(error);
    }
}
connectToDB();

/*mongoose.connect(process.env.DATABASE_URL); //figures out where to host based on env
const db = mongoose.connection;
db.on('error', error => console.error(error)); //displays error if any
db.on('open', () => console.log('Connected to Mongoose')); //confirms connection to mongoose*/

app.use('/', indexRouter); //mounted at the very root of the site
app.use('/authors', authorRouter);

app.listen(process.env.PORT || 3001);

//https://mybrary-31tz.onrender.com