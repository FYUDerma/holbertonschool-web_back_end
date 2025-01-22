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
    const lines = data.trim().split('\n');

    // Get the headers from the first line
    const headers = lines[0].split(',');

    // Create an array of student objects from the remaining lines
    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      return headers.reduce((acc, header, index) => {
        acc[header] = values[index];
        return acc;
      }, {});
    });

    console.log(`Number of students: ${students.length}`);

    // Group students by their field of study
    const fields = students.reduce((acc, student) => {
      const { field } = student;
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(student.firstname);
      return acc;
    }, {});

    for (const [field, firstnames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
