const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
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

      console.log(`Number of students: ${students.length}`);

      for (const [field, firstnames] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
      }

      resolve();
    });
  });
}