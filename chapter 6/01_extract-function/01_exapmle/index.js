const invoices = require('./invoices.json');
const printOwing = (invoice) => {
  printBanner();
  recordDueDate(invoice);
  printDetails(invoice, calculateOutstanding(invoice));
};

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
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

exports.example1 = () => {
  printOwing(invoices[0]);
};
