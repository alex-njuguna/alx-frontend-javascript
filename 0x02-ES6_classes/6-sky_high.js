import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number' || floors < 1) {
      throw new Error('Inavlid input');
    }
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number' || value < 1) {
      throw new Error('Floors must be a number');
    } else {
      this._floors = value;
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;
