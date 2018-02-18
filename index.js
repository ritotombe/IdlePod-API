const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Questionnaire = require('./models/questionnaire.js')
const app = express();
const url = 'mongodb://localhost:27017/questionnaire';

app.use(bodyParser.urlencoded({ extended: true }));

// Root API
app.get('/', function(req, res) {
    res.json('you did it');
});

// Get All Questionnaire Data
app.get('/api/questionnaire', function(req, res) {
    Questionnaire.find({}).then(eachOne => {
            res.json(eachOne);
        })
})

// Post a New Questionnaire Entry
app.post('/api/questionnaire', function(req, res) {
    console.log(req.body)
    Questionnaire.create({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        answers: req.body.answers
    }).then(questionnaire => {
        res.json(questionnaire)
    });
});

// Connection
mongoose.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});

app.listen(3000)