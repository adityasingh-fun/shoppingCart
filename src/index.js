const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();
const multer = require('multer');
const {AppConfig} = require('aws-sdk');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(multer().any());

mongoose.connect('mongodb+srv://chaudharyaditya41:Z67gI1uJnrGCnHuY@cluster0.jgngtnq.mongodb.net/Group10Database?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on port", (process.env.PORT || 3000))
});