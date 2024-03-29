const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

const operatingPlan = {
  temperatureFloor: 49,
  temperatureCeiling: 53,
};

function readingsOutsideRange(station, range) {
  return station.readings.filter((reading) => !range.contains(reading.temp));
}

class NumberRange {
  constructor(min, max) {
    this._data = { min: min, max: max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
  contains(arg) {
    return arg >= this.min && arg <= this.max;
  }
}

function getResult(station, range) {
  return readingsOutsideRange(station, range);
}

exports.example1 = () => {
  const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
  const result = getResult(station, range);
  console.log('\nchapter6, 06_introduceParameterObject, example1\n', result);
};
