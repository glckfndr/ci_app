const express = require('express');
const app = express();

app.get('/', (req, res) => {
   console.log('Did we get here?');
   res.send('Works on my machine.');
});

module.exports = app;
