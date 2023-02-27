const customers = require('./customers.json');

function inNewEngland(customer) {
  const stateCode = customer.address.state;
  return xxx_inNewEngland(stateCode);
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
