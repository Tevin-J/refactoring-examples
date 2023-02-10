const invoices = require('./invoices.json');
const plays = require('./plays.json');

const statement = (invoice, plays) => {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);

  return renderPlainText(statementData, plays);
};

function enrichPerformance(performance) {
  const result = Object.assign({}, performance);
  result.play = ployFor(result);
  result.amount = amountFor(result);
  result.volumeCredits = volumeCreditsFor(result);
  return result;
}

function amountFor(performance) {
  let result = 0;
  switch (performance.play.type) {
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
      throw new Error(`unknown type: ${performance.play.type}`);
  }
  return result;
}

function volumeCreditsFor(performance) {
  let result = 0;
  result += Math.max(performance.audience - 30, 0);
  if (performance.play.type === 'comedy') result += Math.floor(performance.audience);
  return result;
}

function ployFor(performance) {
  return plays[performance.playID];
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    // print line for this order
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(totalAmount())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  console.log(result);
  return result;

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of data.performances) {
      result += perf.volumeCredits;
    }
    return result;
  }

  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) {
      // print line for this order
      result += perf.amount;
    }
    return result;
  }

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
