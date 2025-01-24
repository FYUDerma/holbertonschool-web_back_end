const express = require('express');
const fs = require('fs');

const port = 1245;
const server = express();

const app = server.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});
server.get('/students', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  const filepath = process.argv[2];
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      res.end('Cannot load the database');
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    const fields = {};

    students.forEach((line) => {
      const split = line.split(',');
      if (split.length < 4) return;

      const firstnames = split[0].trim();
      const field = split[3].trim();

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstnames);
    });

    let response = `Number of students: ${students.length}\n`;
    for (const [field, firstnames] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`;
    }

    res.end(response);
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
