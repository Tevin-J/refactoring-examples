class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    this._reservations.push(customer);
  }

  get reservations() {
    return this._reservations;
  }
}

exports.addingParameter = () => {
  const book = new Book();
  book.addReservation('John');
  console.log('\nchapter6, 04_changeFunctionDeclaration, addingParameter\n', book.reservations);
};
