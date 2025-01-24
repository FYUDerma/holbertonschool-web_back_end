const express = require('express');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
}).listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
