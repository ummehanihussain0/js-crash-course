var students = [
  { name: "Taha", marks: [95, 97, 92] },
  { name: "Naseem", marks: [60, 68, 73] },
  { name: "Hussain", marks: [85, 91, 89] },
];

students.forEach((student) => {
  const average = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
  student.average = average;
});
students.forEach((student) => {
  let grade;
  if (student.average < 60) {
    grade = "F";
  } else if (student.average < 70) {
    grade = "D";
  } else if (student.average < 80) {
    grade = "C";
  } else if (student.average < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  student.grade = grade;
});
document.write("<h1>MARKSHEET </h1>");
document.write("<table>");
document.write("<tr><th>Student Name </th><th>Average Marks </th><th>Grade </th></tr>");
students.forEach((student) => {
  document.write(`<tr><td>${student.name}</td><td>${student.average.toFixed(2)}</td><td>${student.grade}</td></tr>`);
});
document.write("</table>");

