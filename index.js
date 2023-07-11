
const express = require('express')
const path = require('path');
const app = express()
const port1 = 3000

// Adds calculatorRoute functions.

var calculatorRoute = require('./routes/calculatorRoute');
app.use('/calculator',calculatorRoute);

// Serve calculator.html for /calculator route
app.get('/calculator', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

// Serve static files from the public directory
app.use('/', express.static('public'));


// Adds Swagger Service for API Documents

  const swaggerUi = require('swagger-ui-express');
  swaggerDocument = require('./swagger.json');
  app.use('/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );

// Start the server
app.listen(port1, () => {
  console.log(`Server 1 listening at http://localhost:${port1}`);
});