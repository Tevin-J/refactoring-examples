const invoices = require('./invoices.json');
const plays = require('./plays.json');
const { createStatementData } = require('./createStatementData.js');

const statement = (invoice, plays) => {
  return renderPlainText(createStatementData(invoice, plays));
};

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    // print line for this order
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  console.log(result);
  return result;

  function usd(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number / 100);
  }
}

exports.chapter1 = () => {
  statement(invoices[0], plays);
};
