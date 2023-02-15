const invoices = require('../../data/invoices.json');
const printOwing = (invoice) => {
  let outstanding = 0;

  console.log('*****************************');
  console.log('********Consumer Owes********');
  console.log('*****************************');

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due date: ${invoice.dueDate.toLocaleDateString()}`);
};

exports.chapter6 = () => {
  printOwing(invoices[0]);
};
