const school = {
  teachers: [
    {
      id: 1,
      name: 'Pinchas',
      subjects: ['chemistry', 'biology', 'physics'],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: 'Williams',
      subjects: ['history', 'ethics'],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    { id: 10, name: 'Jennifer', age: 20 },
    { id: 11, name: 'Howard', age: 23 },
    { id: 12, name: 'Old-Timmy', age: 86 },
    { id: 13, name: 'Houston', age: 21 },
  ],
  findPerson: function (type, id) {
    switch (type) {
      case 'teacher':
        return this.teachers.find((teacher) => teacher.id == id);
      case 'student':
        return this.students.find((student) => student.id == id);
    }
  },
  assignStudent: function (id, subject) {
    console.log('--------------------------------');
    let teacher = this.teachers.find(
      (teacher) =>
        teacher.subjects.includes(subject) && teacher.capacityLeft > 0
    );
    console.log(teacher);
    if (teacher) {
      teacher.capacityLeft -= 1;
      teacher.students.push(id);
    } else console.log('Sorry, no available teachers left');
  },

  assignTeachersSubject: function (teacherId, newSubject) {
    let teacher = this.findPerson('teacher', teacherId);
    if (teacher && !teacher.subjects.includes(newSubject))
      teacher.subjects.push(newSubject);
    else console.log('No such teacher live here !');
  },
};

console.log(school.findPerson('teacher', 1));

school.assignStudent(10, 'chemistry');
console.log(JSON.stringify(school, null, 2));
school.assignStudent(11, 'chemistry');
school.assignStudent(12, 'chemistry');
school.assignStudent(13, 'chemistry');

school.assignTeachersSubject(1, 'arabic');
school.assignTeachersSubject(2, 'arabic');
console.log(JSON.stringify(school, null, 2));
