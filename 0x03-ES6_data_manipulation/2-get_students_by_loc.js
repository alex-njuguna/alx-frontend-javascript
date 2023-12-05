function getStudentsByLocation(students, city) {
  const newArr = students.filter((student) => student.location === city);

  return newArr;
}

export default getStudentsByLocation;
