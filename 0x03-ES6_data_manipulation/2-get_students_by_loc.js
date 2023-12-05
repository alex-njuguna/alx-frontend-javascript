function getStudentsByLocation(students, city) {
  const newArr = students.filter((student) => student.city === city);

  return newArr;
}

export default getStudentsByLocation;
