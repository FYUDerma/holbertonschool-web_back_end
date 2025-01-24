const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const filepath = process.argv[2]; // Get the file path from command line arguments

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
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
  } else {
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
