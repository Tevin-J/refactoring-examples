const PerformanceCalculator = require('./performanceCalculator');

exports.createStatementData = (invoice, plays) => {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(performance) {
    const calculator = createPerformanceCalculator(performance, playFor(performance));
    const result = Object.assign({}, performance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function createPerformanceCalculator(performance, play) {
    return new PerformanceCalculator(performance, play);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((sum, performance) => sum + performance.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((sum, performance) => sum + performance.amount, 0);
  }

  function playFor(performance) {
    return plays[performance.playID];
  }
};
