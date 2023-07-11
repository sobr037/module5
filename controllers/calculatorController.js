
// Declarations
    const Calculator = require('../libraries/Calculator.js');
    const Logger = require('../libraries/Logger.js');

    const calculator = new Calculator();
    const logger = new Logger();

// Addition Controller
    const addNumbers = (req, res) => {
        const calculator = new Calculator();
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = calculator.add(number1, number2);
        logger.log(calculator.id, sum);
        res.status(200).json({ result: sum });
    };

// Minus Controller

    /*
    const minusNumbers = (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = number1 - number2;
        console.log(sum);
        res.status(200);
        res.json({ result: sum });
    };
    */
    const minusNumbers = (req, res) => {
        const calculator = new Calculator();
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = calculator.minus(number1, number2);
        logger.log(calculator.id, sum);
        res.status(200);
        res.json({ result: sum });
    };


// Multiplication Controller

    /*
    const timesNumbers = (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = number1 * number2;
        console.log(sum);
        res.status(200);
        res.json({ result: sum });
    };
    */
    const timesNumbers = (req, res) => {
        const calculator = new Calculator();
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = calculator.times(number1, number2);
        logger.log(calculator.id, sum);
        res.status(200);
        res.json({ result: sum });
    };


// Divide Controller 

    /*
    const divideNumbers = (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = number1/number2;
        console.log(sum);
        res.status(200);
        res.json({ result: sum });
    };
    */
    const divideNumbers = (req, res) => {
        const calculator = new Calculator();
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = calculator.divide(number1, number2);
        logger.log(calculator.id, sum);
        res.status(200);
        res.json({ result: sum });
    };

// Percentage Controller 

    /*
    const percentageNumbers = (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = (number1/number2) * 100
        console.log(sum);
        res.status(200);
        res.json({ result: sum });
    };
    */
    const percentageNumbers = (req, res) => {
        const calculator = new Calculator();
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = calculator.percentage(number1, number2);
        logger.log(calculator.id, sum);
        res.status(200);
        res.json({ result: sum });
    };


module.exports = {
    addNumbers,
    minusNumbers,
    timesNumbers,
    divideNumbers,
    percentageNumbers
};