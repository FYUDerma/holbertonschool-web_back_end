const fs = require('fs').promises;

async function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n').filter((line) => line !== '');

      lines.forEach(line => {
        const [firstname, field] = line.split(',');
        if (!students[field]) {
            students[field] = [];
        }
        students[field].push(firstname);
      });
      resolve(students);
    })
    .catch(() => {
      reject({ error: 'Cannot load the database' });
    });
  });
}

module.exports = { readDatabase };
