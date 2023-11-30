class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  tostring() {
    return `[${this._code}]`;
  }
}

export default Airport;
