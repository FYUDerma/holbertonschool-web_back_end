import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(request, response) {
    try {
      const data = readDatabase();
      let responseText = 'This is the list of our students\n';

      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      fields.forEach((field) => {
        const students = data[field];
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      response.status(200);
      response.send(responseText);
    } catch (error) {
      response.status(500);
      response.send ('Cannot load the database');
    }
  }
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const data = readDatabase();
      const students = data[major];

      if (!students) {
        response.status(500);
        response.send('Cannot load the database');
        return;
      }

      const responseText = `List: ${students.join(', ')}`;
      response.status(200);
      response.send(responseText);
    } catch (error) {
      response.status(500);
      response.send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
