function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    throw new Error('Invalid input');
  }

  const sum = students.reduce((accumulator, student) => accumulator + student.id, 0);

  return sum;
}

export default getStudentIdsSum;
