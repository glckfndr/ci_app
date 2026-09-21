const express = require('express');
const app = express();

app.get('/', (req, res) => {
   //eslint-disable-next-line no-console
   console.log('Did we get here?');
   res.send('Works on my machine?');
});

module.exports = app;
