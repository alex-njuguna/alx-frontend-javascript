class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Invalid data type');
    } else {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid input');
    } else {
      this._sqft = value;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
