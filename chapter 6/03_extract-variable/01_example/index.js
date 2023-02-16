const order = require('./order.json');

function price(order) {
  //price is base price ­ quantity discount + shipping return order.quantity * order.itemPrice ­
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

exports.example1 = () => {
  const result = price(order);
  console.log('\nchapter6, 03_extractVariable, example1\n', result);
  return result;
};
