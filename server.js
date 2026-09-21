const app = require('./app');

const port = 3000;
app.listen(port, '0.0.0.0', () => {
   const msg = `Server listening on port ${port}`;
   //eslint-disable-next-line no-console
   console.log(msg);
});
