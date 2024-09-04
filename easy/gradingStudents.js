function gradingStudents(grades) {
  // Write your code here
  let arrGrade = [];
  for (let i = 0; i < grades.length; i++) {
    let multipleFive = Math.ceil(grades[i] / 5) * 5;
    let gradeDiff = multipleFive - grades[i];
    if (multipleFive >= 40) {
      if (gradeDiff < 3) {
        arrGrade.push(multipleFive);
      } else {
        arrGrade.push(grades[i]);
      }
    } else {
      arrGrade.push(grades[i]);
    }
  }
  return arrGrade;
}
