const express = require('express');

const port = 1245;
const server = express();

const app = server.get('/', (req, res) => {
  res.send('Hello Holberton School!');
}).listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
