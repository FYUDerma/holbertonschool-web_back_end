const getStudentsByLocation = (students, city) => {
  const studentslocation = students.filter(
    (student) => student.location === city,
  );

  return studentslocation;
};

export default getStudentsByLocation;
