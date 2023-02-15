const customers = require('./customers.json');

function reportLines(customer) {
  const lines = [];
  gatherCustomerData(lines, customer);
  return lines;
}
function gatherCustomerData(out, customer) {
  out.push(['name', customer.name]);
  out.push(['location', customer.location]);
}

exports.example2 = () => {
  const result = reportLines(customers.customers[0]);
  console.log('\nchapter6, 02_inlineFunction, example2\n', result);
  return result;
};
