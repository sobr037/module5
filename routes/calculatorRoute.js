var express = require('express');
var calculatorController = require('../controllers/calculatorController')
const path = require('path');
var router = express.Router();


// Specifies that http://localhost:3000/calculator calls upon the calculator.html file
    
    router.get('/calculator', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/calculator.html'));
    });

// Addition operation

    router.get('/add', (req, res) => {
        calculatorController.addNumbers(req,res)
        }),

// Subtraction operation

    router.get('/minus', (req, res) => {
        calculatorController.minusNumbers(req,res)
        }),

// Multiplication operation

    router.get('/times', (req, res) => {
        calculatorController.timesNumbers(req,res)
    }),

// Divide operation 

    router.get('/divide', (req, res) => {
        calculatorController.divideNumbers(req,res)
    }),


// Percentage operation 

    router.get('/percentage', (req, res) => {
        calculatorController.percentageNumbers(req,res)
    })

module.exports = router;

