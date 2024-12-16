let students = [
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
    { name: "Bob", age: 21, marks: { math: 78, science: 82, english: 80 } },
   
  ];
students.push({ name: "Bisal", age: 22, marks: { math: 75, science: 50, english: 55  } } );
students.forEach(student => {
    let NumberOfStudents = students.length;
    let TotalMark = student.marks.math + student.marks.science + student.marks.english;
    let NumberOfSubjects = Object.keys(student.marks).length;
    let AverageMarks = TotalMark / NumberOfSubjects;
    student.average = AverageMarks;
    console.log(`${student.name}'s average marks: ${AverageMarks}`);
})

let topStudent = students[0];
students.forEach(student => {
  if (student.average > topStudent.average) {
    topStudent = student;
  }
});

console.log(`The student with the highest average marks is ${topStudent.name} with an average of ${topStudent.average}.`);
