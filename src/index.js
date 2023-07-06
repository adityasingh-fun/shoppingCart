const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const {MONGOOSE_STRING} = process.env;

const route = require('./routes/route.js');

const app = express();
const multer = require('multer');
const {AppConfig} = require('aws-sdk');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(multer().any());

mongoose.connect(MONGOOSE_STRING, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on port", (process.env.PORT || 3000))
});