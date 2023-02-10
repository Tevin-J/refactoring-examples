const invoices = require('./invoices.json');
const plays = require('./plays.json');

const statement = (invoice, plays) => {
  let totalAmount = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // print line for this order
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf);
  }

  let volumeCredits = 0;
  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
  result += `Amount owed is ${usd(totalAmount)}\n`;
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

const usd = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(number / 100);
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
