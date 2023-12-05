function getListStudentIds(arr) {
  const newArr = [];

  if (!Array.isArray(arr)) {
    return newArr;
  }
  arr.map((student) => newArr.push(student.id));

  return newArr;
}

export default getListStudentIds;
