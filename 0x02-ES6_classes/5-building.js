class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number' || (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
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

//   // eslint-disable-next-line class-methods-use-this
//   evacuationWarningMessage() {
//     throw new Error('Class extending Building must override evacuationWarningMessage');
//   }
}

export default Building;
