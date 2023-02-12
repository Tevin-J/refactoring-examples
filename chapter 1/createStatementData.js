const PerformanceCalculator = require('./performanceCalculator');

exports.createStatementData = (invoice, plays) => {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(performance) {
    const calculator = new PerformanceCalculator(performance, playFor(performance));
    const result = Object.assign({}, performance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((sum, performance) => sum + performance.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((sum, performance) => sum + performance.amount, 0);
  }

  function volumeCreditsFor(performance) {
    let result = 0;
    result += Math.max(performance.audience - 30, 0);
    if (performance.play.type === 'comedy') result += Math.floor(performance.audience);
    return result;
  }

  function playFor(performance) {
    return plays[performance.playID];
  }
};
