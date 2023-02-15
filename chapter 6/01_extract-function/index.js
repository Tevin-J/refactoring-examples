const invoices = require('../../data/invoices.json');
const printOwing = (invoice) => {
  printBanner();

  let outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
};

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due date: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
  console.log('*****************************');
  console.log('********Consumer Owes********');
  console.log('*****************************');
}

exports.chapter6 = () => {
  printOwing(invoices[0]);
};
