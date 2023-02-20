const record = require('./order.json');

class Order {
  constructor(record) {
    this._data = record;
  }
  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    );
  }
}

exports.example2 = () => {
  const order = new Order(record);
  const result = order.price;
  console.log('\nchapter6, 03_extractVariable, example2\n', result);
  return result;
};
