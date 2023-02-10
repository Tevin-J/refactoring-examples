const invoices = require('./invoices.json');
const plays = require('./plays.json');

const statement = (invoice, plays) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);

    // print line for this order
    result += ` ${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf);
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  console.log(result);
  return result;
};

const volumeCreditsFor = (performance) => {
  let result = 0;
  result += Math.max(performance.audience - 30, 0);
  if (playFor(performance).type === 'comedy') result += Math.floor(performance.audience);
  return result;
};

const playFor = (performance) => {
  return plays[performance.playID];
};

const amountFor = (performance) => {
  let result = 0;
  switch (playFor(performance).type) {
    case 'tragedy':
      result = 40000;
      if (performance.audience > 30) {
        result += 1000 * (performance.audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (performance.audience > 20) {
        result += 1000 + 500 * (performance.audience - 20);
      }
      result += 300 * performance.audience;
      break;
    default:
      throw new Error(`unknown type: ${playFor(performance).type}`);
  }
  return result;
};

exports.chapter1 = () => {
  statement(invoices[0], plays);
};
