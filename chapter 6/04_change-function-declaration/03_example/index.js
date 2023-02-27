const customers = require('./customers.json');

function inNewEngland(customer) {
  return xxx_inNewEngland(customer.address.state);
}

function xxx_inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

exports.changingParameterToOneOfItsProperties = () => {
  const result = customers.filter((customer) => inNewEngland(customer));
  console.log(
    '\nchapter6, 04_changeFunctionDeclaration, changingParameterToOneOfItsProperties\n',
    result
  );
  return result;
};
