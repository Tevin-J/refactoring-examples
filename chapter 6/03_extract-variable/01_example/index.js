const order = require('./order.json');

function price(order) {
  //price is base price ­ quantity discount + shipping return order.quantity * order.itemPrice ­
  const basePrice = order.quantity * order.itemPrice;
  return (
    basePrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(basePrice * 0.1, 100)
  );
}

exports.example1 = () => {
  const result = price(order);
  console.log('\nchapter6, 03_extractVariable, example1\n', result);
  return result;
};
