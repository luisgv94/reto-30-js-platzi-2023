function getStudentAverage(students) {
  // create a new array object with totals of students with average grade per student
  const studentsWithAverage = students.map((student) => {
    const { name, grades } = student;
    const average = (
      grades.reduce((acum, grade) => acum + grade, 0) / grades.length
    ).toFixed(2);
    return {
      name,
      average: Number(average),
    };
  });

  // from new array with averages we can calculate total classAverage similar way at first time
  const classAverage = (
    studentsWithAverage.reduce((acum, student) => acum + student.average, 0) /
    students.length
  ).toFixed(2);

  return {
    classAverage: Number(classAverage),
    students: studentsWithAverage,
  };
}

// test data
const students = [
  {
    name: 'Pedro',
    grades: [90, 87, 88, 90],
  },
  {
    name: 'Jose',
    grades: [99, 71, 88, 96],
  },
  {
    name: 'Maria',
    grades: [92, 81, 80, 96],
  },
];

console.log(getStudentAverage(students));
