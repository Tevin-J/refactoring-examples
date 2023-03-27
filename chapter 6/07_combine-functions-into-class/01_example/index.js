const aquireReading = () => {
  return { customer: 'ivan', quantity: 10, month: 5, year: 2017 };
};

const baseRate = (month, year) => {
  return year % month;
};

const taxThreshold = (year) => {
  return year > 2017 ? 1 : 1.2;
};

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get year() {
    return this._year;
  }
  get month() {
    return this._month;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

const client1 = () => {
  const rawReading = aquireReading();
  const reading = new Reading(rawReading);
  const baseCharge = reading.baseCharge;
  console.log('client1', baseCharge);
};

const client2 = () => {
  const rawReading = aquireReading();
  const reading = new Reading(rawReading);
  const taxableCharge = reading.taxableCharge;
  console.log('client2', taxableCharge);
};

const client3 = () => {
  const rawReading = aquireReading();
  const reading = new Reading(rawReading);
  const basicChargeAmount = reading.baseCharge;
  console.log('client3', basicChargeAmount);
};

exports.example1 = () => {
  console.log('\nchapter7, 06_combineFunctionsIntoClass, example1');
  client1();
  client2();
  client3();
  console.log('\n');
};
