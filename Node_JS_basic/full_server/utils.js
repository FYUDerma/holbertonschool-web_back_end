const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(Error(err));
      return;
    }

    const content = data.toString().split('\n');

    let students = content.filter((item) => item);

    students = students.map((item) => item.split(','));

    const fields = {};
    for (const student in students) {
      if (student !== 0) {
        if (!fields[students[student][3]]) fields[students[student][3]] = [];

        fields[students[student][3]].push(students[student][0]);
      }
    }

    delete fields.field;

    resolve(fields);

    });
  });
}

export default readDatabase;
  