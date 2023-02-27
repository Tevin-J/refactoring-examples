function inNewEngland(customer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(customer.address.state);
}
