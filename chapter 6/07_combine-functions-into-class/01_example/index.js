const aquireReading = () => {
  return { customer: 'ivan', quantity: 10, month: 5, year: 2017 };
};

const baseRate = (month, year) => {
  return year % month;
};

const taxThreshold = (year) => {
  return year > 2017 ? 1 : 1.2;
};

const client1 = () => {
  const reading = aquireReading();
  const baseCharge = baseRate(reading.month, reading.year) * reading.quantity;
  console.log('client1', baseCharge);
};

const client2 = () => {
  const reading = aquireReading();
  const base = baseRate(reading.month, reading.year) * reading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshold(reading.year));
  console.log('client2', taxableCharge);
};

const client3 = () => {
  const reading = aquireReading();
  const basicChargeAmount = calculateBaseCharge(reading);
  function calculateBaseCharge(reading) {
    return baseRate(reading.month, reading.year) * reading.quantity;
  }
  console.log('client3', basicChargeAmount);
};

exports.example1 = () => {
  console.log('\nchapter7, 06_combineFunctionsIntoClass, example1');
  client1();
  client2();
  client3();
  console.log('\n');
};
