const getStudentIdsSum = (students) => {
  const sum = students
    .map((students) => students.id)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum;
};

export default getStudentIdsSum;
