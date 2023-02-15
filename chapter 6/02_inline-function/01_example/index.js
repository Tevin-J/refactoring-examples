const driversData = require('./drivers.json');
function rating(driver) {
  return driver.numberOfLateDeliveries ? 2 : 1;
}

exports.example1 = () => {
  const result = rating(driversData.drivers[0]);
  console.log('\nchapter6, 02_inlineFunction, example1', result);
  return result;
};
