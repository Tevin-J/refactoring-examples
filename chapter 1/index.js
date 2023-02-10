const invoices = require('./invoices.json');
const plays = require('./plays.json');

const statement = (invoice, plays) => {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances;

  return renderPlainText(statementData, plays);
};

function renderPlainText(data, plays) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    // print line for this order
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(totalAmount())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  console.log(result);
  return result;

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of data.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) {
      // print line for this order
      result += amountFor(perf);
    }
    return result;
  }

  function volumeCreditsFor(performance) {
    let result = 0;
    result += Math.max(performance.audience - 30, 0);
    if (playFor(performance).type === 'comedy') result += Math.floor(performance.audience);
    return result;
  }

  function usd(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number / 100);
  }

  function playFor(performance) {
    return plays[performance.playID];
  }

  function amountFor(performance) {
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
  }
}

exports.chapter1 = () => {
  statement(invoices[0], plays);
};
