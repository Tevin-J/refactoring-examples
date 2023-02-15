const driversData = require('./drivers.json');
function rating(driver) {
  const result = moreThanFiveLateDeliveries(driver) ? 2 : 1;
  console.log('\nchapter6, 02_inlineFunction, example1', result);
  return result;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

exports.example1 = () => {
  rating(driversData.drivers[0]);
};
