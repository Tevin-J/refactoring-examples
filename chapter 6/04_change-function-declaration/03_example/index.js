const customers = require('./customers.json');

function inNewEngland(customer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(customer.address.state);
}

exports.changingParameterToOneOfItsProperties = () => {
  const result = customers.filter((customer) => inNewEngland(customer));
  console.log(
    '\nchapter6, 04_changeFunctionDeclaration, changingParameterToOneOfItsProperties\n',
    result
  );
  return result;
};
