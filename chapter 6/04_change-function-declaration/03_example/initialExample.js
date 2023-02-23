class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }

  get reservations() {
    return this._reservations;
  }
}
