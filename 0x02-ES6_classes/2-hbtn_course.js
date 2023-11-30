class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || length < 0 || !Array.isArray(students)) {
      throw new Error('Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(aName) {
    if (typeof aName !== 'string') {
      throw new Error('Invalid input type');
    } else {
      this._name = aName;
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Invalid input type');
    } else {
      this._length = value;
    }
  }

  get students() {
    return this._students;
  }

  set students(student) {
    if (!Array.isArray(student)) {
      throw new Error('Invalid input type');
    } else {
      this._students = student;
    }
  }
}

export default HolbertonCourse;
