const gradeassigner = (grade) => {
  if (grade <= 64) return 'F';
  else if (grade <= 69) return 'D';
  else if (grade <= 79) return 'c';
  else if (grade <= 89) return 'B';
  else if (grade <= 100) return 'A';
};

console.log(gradeassigner(63));
console.log(gradeassigner(68));
console.log(gradeassigner(78));
console.log(gradeassigner(88));
console.log(gradeassigner(99));
