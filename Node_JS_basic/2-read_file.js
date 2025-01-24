const fs = require('node:fs');

/**
 * Reads a CSV file and counts students by their field of study.
 * @param {string} filepath - The path to the CSV file.
 */
function countStudents(filepath) {
  try {
    // Read the content of the file synchronously
    const data = fs.readFileSync(filepath, 'utf8');

    // Split the content into lines and trim whitespace
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1);
    const fields = {};

    students.forEach((line) => {
      const split = line.split(','); // Corrected line
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
