const PerformanceCalculator = require('./performanceCalculator');

exports.createStatementData = (invoice, plays) => {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(performance) {
    const calculator = new PerformanceCalculator(performance);
    const result = Object.assign({}, performance);
    result.play = ployFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((sum, performance) => sum + performance.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((sum, performance) => sum + performance.amount, 0);
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
};
